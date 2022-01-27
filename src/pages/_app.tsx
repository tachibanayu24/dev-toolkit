import Head from "next/head";
import { DefaultSeo } from "next-seo";

import "tailwindcss/tailwind.css";
import "@/styles/global.css";
import "@/styles/common.css";

import type { AppProps } from "next/app";
import DefaultLayout from "@/layouts/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🔧</text></svg>"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Ubuntu&subset=cyrillic,latin"
          rel="stylesheet"
          type="text/css"
        />
        <meta name="viewport" content="width=1200" />
      </Head>

      <DefaultSeo
        defaultTitle="DevToolkit - Free Online Developer Tools"
        canonical="https://kit.tachibanayu24.com"
        description="Developer tools for your everyday tasks. It don't collect any data, so you can use it offline in secure."
        twitter={{
          handle: "tachibanayu24",
          site: "tachibanayu24",
          cardType: "summary",
        }}
        openGraph={{
          type: "website",
          title: "🔧 DevToolkit - Free Online Developer Tools",
          description:
            "Developer tools for your everyday tasks. It don't collect any data, so you can use it offline in secure.",
          site_name: "🔧 DevToolkit - Free Online Developer Tools",
          url: "https://kit.tachibanayu24.com",

          images: [
            {
              url: "https://storage.googleapis.com/tachibanayu24/kit/ogp.png",
              width: 1140,
              height: 600,
              alt: "DevToolkit",
            },
          ],
        }}
      />

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;
