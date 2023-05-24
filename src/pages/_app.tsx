import {useEffect} from 'react'
import {AppProps} from 'next/app'
import {useRouter} from 'next/router'

import '../styles/globals.css'

export default function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    if (isSafari) {
      history.scrollRestoration = 'auto'
    } else {
    }
  }, [])

  useEffect(() => {
    // const handleRouteChange = (url: string) => {}
    router.events.on('routeChangeComplete', () => {})
    return () => {
      router.events.off('routeChangeComplete', () => {})
    }
  }, [router.events])

  return <Component {...pageProps} />
}
