import { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <footer className="m-4 text-xs">
      <div className="flex justify-center items-center">
        <div className="pr-4 h-full text-right">DevToolkit v0.0.0</div>
        <div className="pl-4 text-left border-solid border-l-2 border-slate-300 dark:border-slate-600">
          <a
            href="https://github.com/tachibanayu24/dev-toolkit/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 font-bold block mb-2"
          >
            Feature Request
          </a>

          <a
            href="https://github.com/tachibanayu24/dev-toolkit/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 font-bold block mb-2"
          >
            Release Note
          </a>

          <p>
            Copyright © MIT by{" "}
            <a
              href="https://tachibanayu24.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 font-bold"
            >
              Yuto Tachibana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
