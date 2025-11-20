import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/lib/types";

export enum ClientType {
  SERVER = 'server',
  SPA = 'spa'
}

export class SassClient {
  private client: SupabaseClient<Database, "public", "public">;
  private clientType: ClientType;

  constructor(client: SupabaseClient<Database, "public", "public">, clientType: ClientType) {
    this.client = client;
    this.clientType = clientType;

  }

  async loginEmail(email: string, password: string) {
    return this.client.auth.signInWithPassword({
      email: email,
      password: password
    });
  }

  async registerEmail(email: string, password: string) {
    return this.client.auth.signUp({
      email: email,
      password: password
    });
  }

  async exchangeCodeForSession(code: string) {
    return this.client.auth.exchangeCodeForSession(code);
  }

  async resendVerificationEmail(email: string) {
    return this.client.auth.resend({
      email: email,
      type: 'signup'
    })
  }

  async logout() {
    const { error } = await this.client.auth.signOut({
      scope: 'local',
    });
    if (error) throw error;
    if (this.clientType === ClientType.SPA) {
      window.location.href = '/signin';
    }
  }

  async uploadFile(myId: string, filename: string, file: File) {
    filename = filename.replace(/[^0-9a-zA-Z!\-_.*'()]/g, '_');
    filename = myId + "/" + filename
    return this.client.storage.from('dovetopdigital').upload(filename, file);
  }

  async getFiles(myId: string) {
    return this.client.storage.from('dovetopdigital').list(myId)
  }

  async deleteFile(myId: string, filename: string) {
    filename = myId + "/" + filename
    return this.client.storage.from('dovetopdigital').remove([filename])
  }

  async shareFile(myId: string, filename: string, timeInSec: number, forDownload: boolean = false) {
    filename = myId + "/" + filename
    return this.client.storage.from('dovetopdigital').createSignedUrl(filename, timeInSec, {
      download: forDownload
    });

  }

  async getInsightsList(page: number = 1, pageSize: number = 100, order: string = 'created_at', is_active: boolean | null = false) {
    let query = this.client.from('insights').select(`*,author:profiles(id, name, title, image)`)
      // .range(page * pageSize - pageSize, page * pageSize - 1).order(order)
    
    // if (is_active !== null) {
    //   query = query.eq('is_active', is_active)
    // }
    
    return query
  }

  async createInsights(row: Database["public"]["Tables"]["insights"]["Insert"]) {
    return this.client.from('insights').insert(row)
  }

  async removeInsights(id: number) {
    return this.client.from('insights').delete().eq('id', id)
  }

  async updateInsightsAsFeatured(id: number) {
    return this.client.from('insights').update({ featured: true }).eq('id', id)
  }

  async getInsight(id: number) {
    return this.client.from('insights').select(`*,author:profiles(id, name, title, image)`).eq('id', id).single()
  }

  async updateInsight(id: number, row: Database["public"]["Tables"]["insights"]["Update"]) {
    return this.client.from('insights').update(row).eq('id', id)
  }

  async deleteInsight(id: number) {
    return this.client.from('insights').delete().eq('id', id)
  }

  async uploadInsightImage(file: File, filename: string) {
    const fileExt = file.name.split('.').pop()
    const fileName = `private/${filename}.${fileExt}`;
    console.log('Uploading to ', fileName);
    return this.client.storage.from('dovetopdigital').upload(fileName, file)
  }

  async getInsightImageUrl(filename: string) {
    return this.client.storage.from('dovetopdigital').getPublicUrl(filename)
  }

  getSupabaseClient() {
    return this.client;
  }
}