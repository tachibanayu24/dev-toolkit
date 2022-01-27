import Head from "next/head";

import "tailwindcss/tailwind.css";
import "@/styles/global.css";
import "@/styles/common.css";

import type { AppProps } from "next/app";
import DefaultLayout from "@/layouts/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DevToolkit - Free Online Developer Tools</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🔧</text></svg>"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Ubuntu&subset=cyrillic,latin"
          rel="stylesheet"
          type="text/css"
        />
        <meta
          name="description"
          content="DevToolkit - Free Online Developer Tools"
        />
        <meta name="viewport" content="width=1200" />

        <meta property="og:url" content="https://kit.tachibanayu24.com" />
        <meta
          property="og:title"
          content="🔧 DevToolkit - Free Online Developer Tools"
        />
        <meta
          property="og:site_name"
          content="🔧 DevToolkit - Free Online Developer Tools"
        />
        <meta
          property="og:description"
          content="Developer tools for your everyday tasks. It don't collect any data, so you can use it offline in secure."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kit.tachibanayu24.com/_next/image?url=%2Fimages%2Fogp.png&w=1920&q=75"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="960" />
      </Head>

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;
