import { VFC } from "react";

type Props = { isDarkMode: boolean; onToggle: () => void };

export const ModeSwitch: VFC<Props> = ({ isDarkMode, onToggle }) => {
  return (
    <button
      className="flex justify-center items-center w-8 h-8 font-bold bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 rounded-md shadow-lg lg:w-10 lg:h-10"
      onClick={onToggle}
    >
      <p className="z-10 text-lg lg:text-3xl">{isDarkMode ? "🌛" : "🌞"}</p>
    </button>
  );
};
