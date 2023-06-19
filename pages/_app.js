import './styles/global.css'
import {useRouter} from "next/router"
import { useEffect } from 'react';


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname == "/logout") return
    const script = document.createElement('script');

    script.src = '/flowbite.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [router]); // router prop or w/e

  return (
    <main>
        <Component {...pageProps} />
    </main>
  )
}
