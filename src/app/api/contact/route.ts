// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure your SMTP transporter using env vars:
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,     // e.g. "smtp.gmail.com"
  port: Number(process.env.SMTP_PORT), // e.g. 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { email, message } = await request.json()

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Missing email or message' },
        { status: 400 }
      )
    }

    await transporter.sendMail({
      from: email,
      to: 'dhanshiri_ent@yahoo.com',
      subject: 'New query from website',
      text: message,
      replyTo: email,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: any) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
