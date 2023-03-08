import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import suppressHydrationWarning from 'react-ssr-prepass';
suppressHydrationWarning(true);


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
