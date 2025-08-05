// Temporary Supabase client - will be replaced by auto-generated one
import { createClient } from '@supabase/supabase-js';

// For now, we'll use placeholder values that won't work but won't crash the app
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);