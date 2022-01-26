// import { useCallback, useState } from "react";
import type { NextPage } from "next";

import { Card } from "@/components/Card";
import { useInputKey } from "@/hooks/useInputKey";

const KEYWORDS = ["count", "uuid", "color", "diff", "edit"];

const Home: NextPage = () => {
  const { input, matchedIndex } = useInputKey(KEYWORDS);

  return (
    <>
      <div className="flex gap-10 mb-10">
        <Card
          to="/counter"
          title="Characters counter"
          description="Count the number of characters entered"
          shortcut={`${KEYWORDS[0]} + ↵`}
          imagePath="/images/counter.gif"
          isFocus={matchedIndex === 0}
          hasInputEnter={input.slice(-1)[0] === "Enter"}
        />
        <Card
          to="/uuid"
          title="UUID Generator"
          description="Generate random IDs based on UUID v4"
          shortcut={`${KEYWORDS[1]} + ↵`}
          imagePath="/images/uuid.gif"
          isFocus={matchedIndex === 1}
          hasInputEnter={input.slice(-1)[0] === "Enter"}
        />
        <Card
          to="/color"
          title="HTML Color Names"
          description="List the color names supported by all browsers"
          shortcut={`${KEYWORDS[2]} + ↵`}
          imagePath="/images/color.gif"
          isFocus={matchedIndex === 2}
          hasInputEnter={input.slice(-1)[0] === "Enter"}
        />
      </div>

      <div className="flex gap-10">
        <Card
          title="JSON Diff Checker"
          description="Semantically compare two JSON objects"
          shortcut={`${KEYWORDS[3]} + ↵`}
          isComingSoon
          isFocus={matchedIndex === 3}
          hasInputEnter={input.slice(-1)[0] === "Enter"}
        />
        <Card
          title="JSON Editor"
          description="Edit, validate and format JSON"
          shortcut={`${KEYWORDS[4]} + ↵`}
          isComingSoon
          isFocus={matchedIndex === 4}
          hasInputEnter={input.slice(-1)[0] === "Enter"}
        />
        <div className="w-full" />
      </div>
    </>
  );
};

export default Home;
