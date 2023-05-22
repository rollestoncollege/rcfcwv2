import { useState, useEffect } from "react";

const useSessionStorage = (name) => {
  const [value, setValue] = useState('')

  async function getName() {
    try {
      const { data, error } = await supabase.from('profile').select()
      console.log({ data, error })
      return data[0]["display_name"]
    } catch (TypeError) { }
  }

  useEffect(() => {
    
    if (!sessionStorage.getItem("userData")){
      getName().then(e => {
        console.log("Running From Hocks")
        if (e) {
          console.log(e);
          sessionStorage.setItem("userData",  e.display_name)
        }
      })
    }
    setValue()
  }, [])

  return value
}


export default useSessionStorage
