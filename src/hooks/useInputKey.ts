import { useEffect, useState } from "react";

export const useInputKey = (keywords: string[]) => {
  const [input, setInput] = useState<string[]>([]);
  const [matchedIndex, setMatchedIndex] = useState<number>();

  useEffect(
    () =>
      document.addEventListener("keyup", (e) =>
        setInput((prev) => [...prev, e.key])
      ),
    []
  );

  useEffect(() => {
    const index = keywords.findIndex((k) =>
      input.slice(-k.length).join("").includes(k)
    );

    if (index >= 0) {
      setMatchedIndex(index);
    }
  }, [input]);

  return { input, matchedIndex };
};
