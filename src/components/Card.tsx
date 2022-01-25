import Image from "next/image";
import { VFC } from "react";

type Props = {
  title: string;
  description: string;
  shortcut: string;
  to?: string;
  isComingSoon?: boolean;
};

export const Card: VFC<Props> = ({
  title,
  description,
  shortcut,
  to,
  isComingSoon,
}) => {
  return (
    <a
      href={to}
      className="w-full rounded-md bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 h-[320px] shadow-lg"
    >
      <div className="w-full h-[200px] bg-blue-500 rounded-t-md flex justify-center items-center">
        {isComingSoon ? (
          <p className="text-2xl font-bold rotate-6 shadow-lg p-4 bg-blue-600 rounded-md">
            Coming Soon... 🚧
          </p>
        ) : (
          <p>Image Area</p>
        )}
      </div>
      <div className="m-4 h-[120px] relative">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <p className="text-sm text-center absolute m-0 bottom-8 w-full">
          Type <code>{shortcut}</code>
        </p>
      </div>
    </a>
  );
};
