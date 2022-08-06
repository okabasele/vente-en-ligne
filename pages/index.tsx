import { useEffect } from "react";
import { useSupabase } from "../utils/useSupabase";


export default function Home() {

  const supabaseClient = useSupabase(); 

  useEffect(()=>{
    async function readSize() {
      // Reading
      let { data, error } = await supabaseClient
      .from('Size')
      .select('id, name')
      
      console.log(data,error);
      
    }
    
    readSize()

  },[])


  return (
    <>

    </>
  );
}
