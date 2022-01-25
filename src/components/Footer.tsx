import { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <footer className="p-4 font-light text-xs flex justify-center items-center">
      <div className="border-solid border-r-2 border-slate-300 dark:border-slate-600 pr-4 h-full w-1/2 text-right">
        DevToolkit v0.0.0
      </div>
      <div className="pl-4 w-1/2 text-left">
        <a
          href="https://github.com/tachibanayu24/dev-toolkit/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 font-bold mr-2"
        >
          Source Code
        </a>
        <a
          href="https://github.com/tachibanayu24/dev-toolkit/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 font-bold"
        >
          Release Note
        </a>
        <p className="mt-1">
          Copyright © MIT by{" "}
          <a
            href="https://tachibanayu24.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 font-bold"
          >
            Yuto Tachibana
          </a>
        </p>
      </div>
    </footer>
  );
};
