import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma/client"

import schema from "../schema"

interface Props {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, props: Props) {
  const { id } = props.params
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  })

  if (!product)
    return NextResponse.json(
      {
        error: "Product not found",
      },
      { status: 404 }
    )
  return NextResponse.json(product, { status: 200 })
}

export async function PUT(request: NextRequest, props: Props) {
  const { id } = props.params

  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  })

  if (!product)
    return NextResponse.json(
      {
        error: "Product not found",
      },
      { status: 404 }
    )
  const updatedproduct = await prisma.product.update({
    where: { id: parseInt(id) },
    data: {
      name: body.name,
      price: body.price,
      image: body.image,
      description: body.description,
    },
  })
  return NextResponse.json(updatedproduct, { status: 200 })
}

export async function DELETE(request: NextRequest, props: Props) {
  const { id } = props.params

  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  })

  if (!product)
    return NextResponse.json(
      {
        error: "Product not found",
      },
      { status: 404 }
    )
  await prisma.product.delete({
    where: { id: parseInt(id) },
  })
  return NextResponse.json({ message: "Product deleted" })
}
