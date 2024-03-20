import { NextResponse } from "next/server"
import { Resend } from "resend"

import WelcomeTemplate from "@/emails/WelcomeTemplate"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    await resend.emails.send({
        from: 'karel@codeguy.cz',
        to: 'karel@codeguy.cz',
        subject: 'Welcome to our platform!',
        react: <WelcomeTemplate name="Karel" />
    })

    return NextResponse.json({})
}