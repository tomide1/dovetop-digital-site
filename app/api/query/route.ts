import { NextRequest, NextResponse } from 'next/server'

type SubscribeRequestBody = {
  fullName: string
  email: string
  companyName: string
  phoneNumber: string
  enquiry: string
}

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, companyName, phoneNumber, enquiry }: SubscribeRequestBody = await req.json()

    const API_KEY = process.env.MAILCHIMP_API_KEY
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

    if (!API_KEY || !AUDIENCE_ID) {
      return NextResponse.json({ error: 'Missing Mailchimp config' }, { status: 500 })
    }

    const mailchimpEndpoint = `https://us17.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        MMERGE3: fullName,
        CNAME: companyName,
        MMERGE4: phoneNumber,
        MMERGE2: enquiry,
      },
    }

    const response = await fetch(mailchimpEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const responseBody = await response.json()
		console.error('Mailchimp error response:', responseBody);

    if (!response.ok) {
      return NextResponse.json({ error: responseBody.detail || 'Failed to subscribe' }, { status: response.status })
    }

    return NextResponse.json({ message: 'Subscription successful' })
  } catch (error) {
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 })
  }
}
