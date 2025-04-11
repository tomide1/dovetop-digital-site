import { NextRequest, NextResponse } from 'next/server';

interface SubscribeRequestBody {
  email: string;
	companyName: string;
	enquiry: string;
}

export async function POST(req: NextRequest) {
	const { email, companyName, enquiry } = await req.json();
	const API_KEY = process.env.MAILCHIMP_API_KEY!;
	const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;

	const mailchimpEndpoint = `https://us17.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

	const response = await fetch(mailchimpEndpoint, {
		method: 'POST',
		headers: {
			Authorization: `apikey ${API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email_address: email,
			company_name: companyName,
			enquiry: enquiry,
			status: 'subscribed', // 'subscribed' adds them to the list
		}),
	});

	if (response.ok) {
		return NextResponse.json({ message: 'Subscription successful' });
	} else {
		const data = await response.json();
		return NextResponse.json(
			{ error: data.detail || 'Failed to subscribe' },
			{ status: 500 }
		);
	}
}
