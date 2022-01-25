// import html2canvas from "html2canvas";
import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const Home: NextPage = () => {
  const { storedValue: isDarkMode, setValue: setIsDarkMode } = useLocalStorage(
    "isDarkMode",
    true
  );

  return (
    <div className={isDarkMode ? "dark" : undefined}>
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
      </Head>

      <div className="flex flex-col min-h-screen antialiased hover:subpixel-antialiased text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800">
        <Header
          isDarkMode={isDarkMode}
          onToggle={() => setIsDarkMode(!isDarkMode)}
        />
        <main className="grow"></main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
