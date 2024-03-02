import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  //fetch products from db
  return NextResponse.json(
    [
      {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: 100,
        image: "https://picsum.photos/200",
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description 2",
        price: 200,
        image: "https://picsum.photos/200",
      },
    ],
    { status: 200 }
  );
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json({ id: 10, ...body }, { status: 201 });
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json({ id: 10, ...body });
}

//DeLETe
export async function DELETE(request: NextRequest): Promise<NextResponse> {
  return NextResponse.json({ message: "Product deleted" });
}
