import Head from "next/head";
import { DefaultSeo } from "next-seo";

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
        <meta name="viewport" content="width=1280" />
      </Head>

      <DefaultSeo
        defaultTitle="DevToolkit - Free Online Developer Tools"
        canonical="https://kit.tachibanayu24.com"
        description="Developer tools for your everyday tasks. It don't collect any data, so you can use it offline in secure."
        twitter={{
          handle: "tachibanayu24",
          site: "tachibanayu24",
          cardType: "summary_large_image",
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
              url: "https://storage.googleapis.com/tachibanayu24/kit/ogp-v2.png",
              width: 1140,
              height: 600,
              alt: "DevToolkit",
            },
          ],
        }}
      />
      <GA />

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default App;
