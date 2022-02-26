import "@fontsource/inter";

import { ChakraProvider } from '@chakra-ui/react'
import theme from "../themes/theme";
import { useRouter } from "next/router";
import { route } from 'next/dist/server/router';
import { useEffect } from "react";
import * as ga from '../lib/analytics';

function MyApp({ Component, pageProps }) {


    //analytics
    const router = useRouter()
    useEffect(() => {
      const handleRouteChange = (url) => {
        ga.pageview(url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [router.events])


  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} key={route} />
    </ChakraProvider>
  )
}

export default MyApp