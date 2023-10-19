import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// Get - getting data
export function GET(request: NextRequest) {
  // fetch users from db
  return NextResponse.json([
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      email: "email",
    },
    {
      id: 2,
      name: "Jane Doe",
      username: "janedoe",
      email: "email",
    },
  ]);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json({ id: 1, ...body }, { status: 201 });
}