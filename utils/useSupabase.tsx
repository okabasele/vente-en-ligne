import { createClient } from "@supabase/supabase-js";

export const useSupabase = ()=> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";
    return createClient(supabaseUrl, supabaseKey);
} 
