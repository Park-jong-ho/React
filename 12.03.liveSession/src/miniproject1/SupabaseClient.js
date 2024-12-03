import { createClient } from "@supabase/supabase-js"


// supabase과 통신하는 파일
const supabaseURL = "https://tnuvcmgdhatbkukvthnl.supabase.co";

const supabaseAPIKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRudXZjbWdkaGF0Ymt1a3Z0aG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyMTMzMTAsImV4cCI6MjA0ODc4OTMxMH0.bnBZ4G9InEDQ2McNS0IGptZVb_H25aAkGmImjEKZ4RE";

const supabase = createClient(supabaseURL, supabaseAPIKEY)

export default supabase
