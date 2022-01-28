import Head from "next/head";

import "tailwindcss/tailwind.css";
import "@/styles/global.css";
import "@/styles/common.css";

import type { AppProps } from "next/app";
import DefaultLayout from "@/layouts/DefaultLayout";
import { GA } from "@/components/GA";
import { usePageView } from "@/hooks/usePageView";

function App({ Component, pageProps }: AppProps) {
  usePageView();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=1200" />
      </Head>

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default App;
