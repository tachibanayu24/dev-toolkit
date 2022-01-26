import { useEffect, useState } from "react";

export const useInputKey = (keywords: string[]) => {
  const [input, setInput] = useState<string>("");
  const [hasInputEnter, setHasInputEnter] = useState(false);
  const [matchedIndex, setMatchedIndex] = useState<number>();

  useEffect(
    () =>
      document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          setInput("");
          setMatchedIndex(undefined);
        } else {
          if (e.key === "Enter") {
            setHasInputEnter(true);
          }
          setInput((prev) => prev + e.key);
        }
      }),
    []
  );

  useEffect(() => {
    const index = keywords.findIndex(
      (keyword) => input && keyword.startsWith(input)
    );

    if (index >= 0) {
      setMatchedIndex(index);
    } else {
      setMatchedIndex(undefined);
      setInput((prev) => prev.slice(-1)); // Refresh input, leaving out the last character when it no longer matches.
    }
  }, [input, keywords]);

  return { input, matchedIndex, hasInputEnter };
};
