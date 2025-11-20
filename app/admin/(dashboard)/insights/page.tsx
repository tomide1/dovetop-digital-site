import InsightsPageContent from "./content";
import { createSPASassClient } from "@/lib/supabase/client";
import { InsightData } from "@/types/data/insights";

export interface InsightsPageData {
  data: InsightData[] | null;
}

async function getData(): Promise<InsightsPageData> {
  try {
    const supabase = await createSPASassClient();
    const { data, error: supabaseError } = await supabase.getInsightsList(1, 10, 'created_at');
    
    if (supabaseError) throw supabaseError;
    return { data } as InsightsPageData;
  } catch (err) {
    console.error('Error loading insights:', err);
    return { data: null };
  }
}

export default async function InsightsListPage() {
  const data = await getData();
  return <InsightsPageContent {...data} />;
}