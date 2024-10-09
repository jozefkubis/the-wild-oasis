import { createClient } from "@supabase/supabase-js"

export const supabaseUrl = "https://imbvahwqbkntzyfgkowp.supabase.co"
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltYnZhaHdxYmtudHp5Zmdrb3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwMzEwMTEsImV4cCI6MjA0MzYwNzAxMX0.Ngoku6dNSuEfex9_JfMjnWe5-TTbmNvd36Pnd858uoM`
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
