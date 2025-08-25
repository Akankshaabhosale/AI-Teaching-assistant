import "@/styles/globals.css";
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const getWindow = typeof window !== 'undefined' ? () => window : undefined;

  return <Component {...pageProps} window={getWindow} />;
}

export default MyApp;
