import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const [rows] = await pool.execute("SELECT * FROM users");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
