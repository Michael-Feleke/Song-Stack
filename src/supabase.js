import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fdrrktprfsmjvulmiuxo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkcnJrdHByZnNtanZ1bG1pdXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwMTU0ODAsImV4cCI6MjAzMDU5MTQ4MH0.SuACAQjHRQrEiD_Kn-FXimEFsf5mktxTQI4ca6PY4io";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
