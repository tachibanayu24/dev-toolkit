import { useState, useCallback, useEffect, VFC } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  shortcut: string;
  imagePath?: string;
  to?: string;
  isComingSoon?: boolean;
  isFocus?: boolean;
  hasInputEnter?: boolean;
};

export const Card: VFC<Props> = ({
  title,
  description,
  shortcut,
  imagePath,
  to,
  isComingSoon,
  isFocus,
  hasInputEnter,
}) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (to) {
      router.push(to);
    }
  }, [router, to]);

  useEffect(() => {
    if (hasInputEnter && isFocus) {
      handleClick();
    }
  }, [handleClick, hasInputEnter, isFocus]);

  return (
    <div
      onClick={handleClick}
      className={`w-full rounded-md ${
        isFocus
          ? `bg-black/10 dark:bg-white/10`
          : `bg-black/20 dark:bg-white/20`
      } ${
        isComingSoon ? "" : "cursor-pointer"
      } hover:bg-black/10 dark:hover:bg-white/10 h-[320px] shadow-lg relative`}
    >
      <div
        className={`w-full h-[200px]  rounded-t-md flex justify-center items-center ${
          isFocus ? "bg-blue-600" : "bg-blue-500"
        }`}
      >
        {!isComingSoon && imagePath ? (
          <div className="w-[85%] h-[85%] relative">
            <Image
              className="rounded-lg shadow-lg"
              src={imagePath}
              layout="fill"
              objectFit="fill"
              alt="counter"
            />
          </div>
        ) : (
          <p className="text-2xl font-bold rotate-6 shadow-lg p-4 bg-blue-700 rounded-md">
            Coming Soon... 🚧
          </p>
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
      {isFocus && (
        <p className="absolute top-3 left-1/2 z-10 text-6xl -translate-x-1/2 -translate-y-1/2 rounded-full p-2 shadow-2xl">
          {to ? "👇" : "🙇"}
        </p>
      )}
    </div>
  );
};
