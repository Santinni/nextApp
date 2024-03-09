import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma/client"

import schema from "./schema"

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany()

  return NextResponse.json(products, { status: 200 })
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
      description: body.description,
      image: body.image,
    },
  })

  return NextResponse.json(newProduct, { status: 201 })
}

// export async function PUT(request: NextRequest): Promise<NextResponse> {
//   const body = await request.json()
//   const validation = schema.safeParse(body)
//   if (!validation.success)
//     return NextResponse.json(validation.error.errors, { status: 400 })

//   return NextResponse.json({ id: 10, ...body })
// }

// export async function DELETE(request: NextRequest): Promise<NextResponse> {
//   return NextResponse.json({ message: "Product deleted" })
// }

export async function PUT(request: NextRequest): Promise<NextResponse> {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  const updatedProduct = await prisma.product.update({
    where: { id: body.id },
    data: {
      name: body.name,
      price: body.price,
      description: body.description,
      image: body.image,
    },
  })

  return NextResponse.json(updatedProduct, { status: 200 })
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  await prisma.product.delete({ where: { id: body.id } })

  return NextResponse.json({ message: "Product deleted" })
}
