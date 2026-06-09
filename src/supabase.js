import { createClient } from '@supabase/supabase-js';

// Supabase config for this Vite project.
// Vite exposes client-side env variables that start with VITE_.
// NEXT_PUBLIC_* aliases are kept here for compatibility with values copied from Supabase/Next.js guides.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://quflfbtlkipmbgaqlqgo.supabase.co';

const supabaseKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_sUsTqBk7H1nMeCL03O1B-A_QJXnnkjh';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and publishable key are required. Check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
