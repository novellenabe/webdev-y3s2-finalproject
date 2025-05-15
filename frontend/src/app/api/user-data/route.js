import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// TODO: Make GET method function to fetch user data from mySQL
// TODO: Use session data to retrieve user info
export async function GET(request) {
  try {
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({
      status: 500,
    });
  }
}
