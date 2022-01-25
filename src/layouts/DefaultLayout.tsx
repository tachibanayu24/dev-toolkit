import { ReactChild, VFC } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function DefaultLayout({ children }: { children: ReactChild }) {
  const { storedValue: isDarkMode, setValue: setIsDarkMode } = useLocalStorage(
    "isDarkMode",
    true
  );

  return (
    <div className={isDarkMode ? "dark" : undefined}>
      <div className="flex flex-col min-h-screen antialiased hover:subpixel-antialiased text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800">
        <Header
          isDarkMode={isDarkMode}
          onToggle={() => setIsDarkMode(!isDarkMode)}
        />

        <main className="grow p-20">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
