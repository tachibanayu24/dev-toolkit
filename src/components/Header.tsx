import { VFC } from "react";

import { ModeSwitch } from "./ModeSwitch";

type Props = { isDarkMode: boolean; onToggle: () => void };

export const Header: VFC<Props> = ({ isDarkMode, onToggle }) => {
  return (
    <header className="w-full border-b-2 border-slate-300 dark:border-slate-600 border-dashed">
      <div className="flex relative items-center p-4 h-30 justify-center">
        <div className="text-center">
          <h1 className="m-0 font-bold text-4xl pb-1">
            🔧 DevToolkit - Free Online Developer Tools
          </h1>
          <p className="font-light leading-5">
            Developer tools for your everyday tasks. <br />
            It don't collect any data, so you can use it offline in secure.
          </p>
        </div>
        <div className="absolute right-8">
          <ModeSwitch {...{ isDarkMode, onToggle }} />
        </div>
      </div>
    </header>
  );
};
