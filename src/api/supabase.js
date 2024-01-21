import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://fpcfzrevqqlgeikifvkr.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwY2Z6cmV2cXFsZ2Vpa2lmdmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3NTAyNzYsImV4cCI6MjAyMDMyNjI3Nn0.eR2uHio8MwbpFx_OAj6XPrQvCONPfoY1uYxW7pSXDVI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;