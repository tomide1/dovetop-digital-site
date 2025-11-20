import { NextRequest, NextResponse } from 'next/server';
import { createSPASassClient } from '@/lib/supabase/client';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = (formData as any).get('file');
    
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const supabase = await createSPASassClient();
    const filename = `insight-${Date.now()}`;
    
    const { data, error } = await supabase.uploadFile("111", filename, file);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }

    const { data: urlData } = await supabase.getInsightImageUrl(data.path);
    
    return NextResponse.json({ 
      message: 'Image uploaded successfully',
      url: urlData.publicUrl
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}