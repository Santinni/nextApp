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
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  })

  if (!user)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    )
  return NextResponse.json(user, { status: 200 })
}

export async function PUT(request: NextRequest, props: Props) {
  const { id } = props.params

  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  })

  if (!user)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    )
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: body.name,
      email: body.email,
    },
  })
  return NextResponse.json(updatedUser, { status: 200 })
}

export async function DELETE(request: NextRequest, props: Props) {
  const { id } = props.params

  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  })

  if (!user)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    )
  await prisma.user.delete({
    where: { id: parseInt(id) },
  })
  return NextResponse.json({ message: "User deleted" })
}
