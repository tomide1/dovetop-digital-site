import { createBrowserClient } from '@supabase/ssr'
import { ClientType, SassClient } from "@/lib/supabase/unified";
import { Database } from "@/lib/types";

export function createSPAClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )
}

export async function createSPASassClient() {
    const client = createSPAClient();
    return new SassClient(client, ClientType.SPA);
}

export async function createSPASassClientAuthenticated() {
    const client = createSPAClient();
    const user = await client.auth.getSession();
    if (!user.data || !user.data.session) {
        window.location.href = '/signin';
    }

    return new SassClient(client , ClientType.SPA);
}