import { useState, useEffect } from "react";
import { supabase } from '../../lib/initSupabase'


const useSessionStorage = (name) => {
  const [value, setValue] = useState('')

  async function getName() {
    // try {
      const { data, error } = await supabase.from('profile').select()
      console.log("Getting Data");
      return data
    // } catch (TypeError) { }
  }

  useEffect(() => {
      getName().then(e => {
        console.log("Running From Hocks")
        setValue(e[0])
      })
  }, [])

  return value
}


export default useSessionStorage
