import { createSSRSassClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
        const supabase = await createSSRSassClient()

        // Exchange the code for a session
        await supabase.exchangeCodeForSession(code)

        return NextResponse.redirect(new URL('/admin', request.url))
    }

    // If no code provided, redirect to login
    return NextResponse.redirect(new URL('/signin', request.url))
}