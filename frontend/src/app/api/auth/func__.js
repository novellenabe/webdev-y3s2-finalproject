import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";
import { getWaitUntilPromiseFromEvent } from "next/dist/server/web/spec-extension/fetch-event";
import { createServerSearchParamsForServerPage } from "next/dist/server/request/search-params";

export async function validateFields(data) {
  if (!data.fname || !data.lname || !data.email || !data.password) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }
  return NextResponse.json({ message: "Fields Ok!" }, { status: 200 });
}

export async function validateEmail(data) {
  try {
    const [existingUser] = await pool.execute(
      "SELECT email FROM user WHERE email = ?",
      [data.email]
    );

    if (existingUser.length > 0) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 }
      );
    }
    return NextResponse.json({ message: "Email Ok!" }, { status: 200 });
  } catch (dbError) {
    console.error("Database error checking email:", dbError);
    return NextResponse.json(
      { message: "Database error: " + dbError.message },
      { status: 500 }
    );
  }
}

export async function registerAccount(data) {
  try {
    const [accounts] = await pool.execute(
      "INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)",
      [data.fname, data.lname, data.email, data.password] //  Use placeholders and an array to prevent SQL injection
    );
    return NextResponse.json(
      { message: "Registerd Successful!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error: " + error.message },
      { status: 500 }
    );
  }
}

export async function validatePassword(password) {}

// TODO: IN SESSION ID. ADD EXPIRATION
export async function login(data) {
  try {
    const [accounts] = await pool.execute(
      "SELECT user_id, email, password FROM user WHERE email = ? AND password = ?",
      [data.email, data.password]
    );
    if (accounts.length === 1) {
      console.log(
        "\x1b[33m%s\x1b[0m%s\x1b[32m%s\x1b[0m",
        `${data.email} `,
        "Login Status: ",
        "Success!"
      );
    } else {
      return NextResponse.json(
        { message: `(${data.email}) Account Doesnt Exist.` },
        { status: 400 }
      );
    }

    //await startSession(data);
    return NextResponse.json(
      { message: `(${data.email}) Login Successful!` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error: " + error.message },
      { status: 500 }
    );
  }
}

export async function startSession(data) {
  try {
    const sessionId = uuidv4();
    try {
      // await pool.execute( // Remove the await here, we want to handle errors in this function
      //   'INSERT INTO sessions (session_id, user_id) VALUES (?, ?)',
      //   [sessionId, data.user_id] // Use user_id from the data object
      // );

      /* GET CURRENT USER ID FROM EMAIL */
      const [user_id] = await pool.execute(
        "SELECT user_id FROM user WHERE email = ?",
        [data.email]
      );
      //console.log(user_id[0].user_id);

      const [result] = await pool.execute(
        "INSERT INTO sessions (session_id, user_id) VALUES (?, ?)",
        [sessionId, user_id[0].user_id]
      );
      if (result.affectedRows !== 1) {
        throw new Error("Failed to insert session data into database.");
      }
    } catch (dbError) {
      console.error("Database error starting session:", dbError);
      return NextResponse.json(
        { message: "Database error: " + dbError.message },
        { status: 500 }
      );
    }

    console.log(
      "\x1b[33m%s\x1b[0m%s\x1b[32m%s\x1b[0m",
      `${data.email} `,
      "Session Status: ",
      "Created!"
    );

    return NextResponse.json(
      {
        message: `(${data.email}) Session Started!`,
        sessionId: sessionId, // Include the session ID in the response
      },
      {
        status: 200,
        headers: {
          "Set-Cookie": `sessionId=${sessionId}; Path=/; HttpOnly; Secure; SameSite=Strict`,
          //  Path=/ :  The cookie is valid for the entire website.
          //  HttpOnly: The cookie cannot be accessed by client-side JavaScript, mitigating XSS attacks.
          //  Secure  : The cookie is only sent over HTTPS, protecting it from eavesdropping.
          //  SameSite: Strict prevents the browser from sending this cookie along with cross-site requests.
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error: " + error.message },
      { status: 500 }
    );
  }
}

async function DELETE_sessionId() {
  try {
    cookies().delete("sessionId"); // TODO: Fix this issue here
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}

export async function endSession(sessionId) {
  try {
    // TODO: THIS FUNCTION ALREADY EXSISTS. CLEAN IT LATER

    const [id] = await pool.execute(
      "SELECT user_id FROM sessions WHERE session_id = ?",
      [sessionId]
    );

    const user_id = id[0].user_id;
    const [session] = await pool.execute(
      "DELETE FROM sessions WHERE user_id = ?",
      [user_id]
    );

    cookies().delete("sessionId"); // TODO: Fix this issue here
    //const x = await cookies().delete("sessionId"); // Simpler method in Next.js
    //const x = await DELETE_sessionId();

    return NextResponse.json({ message: "Session Ended!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error: " + error.message },
      { status: 500 }
    );
  }
}

// FIXME: session not detecing
export async function verifySessionIdToken(session_token, email) {
  try {
    const user_id = await getUserId(email);
    console.log("> " + user_id + " <");
    if (user_id === null)
      return NextResponse.json(
        { message: `(${email}) Account doesn't exist` },
        { status: 404 }
      );

    const [session] = await pool.execute(
      "SELECT session_id FROM sessions WHERE user_id = ? AND session_id = ?",
      [user_id, session_token]
    );

    if (session.length === 0) {
      console.log("ERROR 1");
      return NextResponse.json(
        { message: `(${email}) Session doesn't exist!` },
        { status: 404 }
      );
    }
    if (session.length > 1) {
      console.log("ERROR 2");
      return NextResponse.json(
        { message: `(${email}) Multiple sessions present!` },
        { status: 409 }
      );
    }

    console.log("success");
    return NextResponse.json(
      { message: `(${email}) Session Valid!` },
      { status: 200 }
    );
  } catch (error) {
    console.log("TSH");
    return NextResponse.json(
      { message: "Error: " + error.message },
      { status: 500 }
    );
  }
}

// DISPLAY MESSAGES HERE
function displayMessages(cc, msg) {
  console.log("MESSAGE HERE");
}

// TODO: Make these 2 functions into 1
async function getUserId(email) {
  const [result] = await pool.execute(
    "SELECT user_id FROM user WHERE email = ?",
    [email]
  );
  return result.length === 0 ? null : result[0].user_id;
}

export async function getActiveEmail(sessionId) {
  const [session] = await pool.execute(
    "SELECT user_id FROM sessions WHERE session_id = ?",
    [sessionId]
  );
  if (session.length === 0) return null; // session and user_id don't match

  const user_id = session[0].user_id;
  const [email] = await pool.execute(
    "SELECT email FROM user WHERE user_id = ?",
    [user_id]
  );

  if (email.length === 0) return null; // acc/email doesn't exsist
  return email[0].email;
}
