import { VFC } from "react";

import { ModeSwitch } from "./ModeSwitch";

type Props = { isDarkMode: boolean; onToggle: () => void };

export const Header: VFC<Props> = ({ isDarkMode, onToggle }) => {
  return (
    <header className="w-full border-b-2 border-slate-300 dark:border-slate-600 border-dashed">
      <div className="flex relative justify-start items-center p-4 h-20 lg:justify-center">
        <h1 className="m-0 text-base font-bold lg:text-4xl">
          🔧 DevToolkit - Free Online Developer Tools
        </h1>
        <div className="absolute right-8">
          <ModeSwitch {...{ isDarkMode, onToggle }} />
        </div>
      </div>
    </header>
  );
};
