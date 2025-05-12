import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  return NextResponse.json({ status: 200 });
}
