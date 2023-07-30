import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { AppProps } from 'next/app'
import TopBarLanding from '@/components/TopBarLanding';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
