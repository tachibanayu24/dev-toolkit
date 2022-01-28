import { Html, Head, Main, NextScript } from "next/document";
import { DefaultSeo } from "next-seo";
import { GA } from "@/components/GA";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🔧</text></svg>"
        />
        <meta name="viewport" content="width=1200" />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu&subset=cyrillic,latin&display=optional"
          rel="stylesheet"
          type="text/css"
        />
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

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
