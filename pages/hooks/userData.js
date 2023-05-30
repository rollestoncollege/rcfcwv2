import { useState, useEffect } from "react";
import { supabase } from "@supabase/supabase-js"

const useSessionStorage = (name) => {
  const [value, setValue] = useState('')

  async function getName() {
    // try {
      const { data, error } = await supabase.from('profile').select()
      console.log("Getting Data");
      console.log( {data, error} );
      return data
    // } catch (TypeError) { }
  }

  useEffect(() => {
      getName().then(e => {
        console.log("Running From Hocks")
        console.log(e);
        setValue(e)
      })
  }, [])

  return value
}


export default useSessionStorage
