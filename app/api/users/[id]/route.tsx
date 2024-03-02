import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: {
    id: number;
  };
}

export function GET(request: NextRequest, props: Props) {
  const { id } = props.params;
  if (id > 10)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );
  return NextResponse.json(
    {
      id,
      name: "John Doe",
      username: "johndoe",
      email: "email",
    },
    { status: 200 }
  );
}

export async function PUT(request: NextRequest, props: Props) {
  const { id } = props.params;

  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  if (id > 10)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );
  return NextResponse.json({ id, ...body });
}

export async function DELETE(request: NextRequest, props: Props) {
  const { id } = props.params;

  if (id > 10)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );
  return NextResponse.json({ message: "User deleted" });
}
