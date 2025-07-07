import { createClient } from '@supabase/supabase-js'

// Use Vite environment variables (available on both server and client)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hmeehyatdkspizmtdihh.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our users table
export interface User {
  id: number
  created_at: string
  email: string
}

// Function to add a user to the waitlist
export async function addToWaitlist(email: string) {
  console.log('Adding to waitlist:', email);
  const { data, error } = await supabase
    .from('users')
    .insert([{ email }])
    .select()

  if (error) {
    console.error('Error adding to waitlist:', error);
    throw error
  }

  console.log('Added to waitlist:', data);
  return data
} 