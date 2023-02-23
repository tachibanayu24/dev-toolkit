import type { NextPage } from "next";

import { Card } from "@/components/Card";
import { useInputKey } from "@/hooks/useInputKey";

const KEYWORDS = ["count", "uuid", "color", "textdiff", "jotter", "jsonedit"];

const Home: NextPage = () => {
  const { matchedIndex, hasInputEnter } = useInputKey(KEYWORDS);

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
          hasInputEnter={hasInputEnter}
        />
        <Card
          to="/uuid"
          title="UUID Generator"
          description="Generate random IDs based on UUID v4"
          shortcut={`${KEYWORDS[1]} + ↵`}
          imagePath="/images/uuid.gif"
          isFocus={matchedIndex === 1}
          hasInputEnter={hasInputEnter}
        />
        <Card
          to="/color"
          title="HTML Color Names"
          description="List the color names supported by all browsers"
          shortcut={`${KEYWORDS[2]} + ↵`}
          imagePath="/images/color.gif"
          isFocus={matchedIndex === 2}
          hasInputEnter={hasInputEnter}
        />
      </div>

      <div className="flex gap-10">
        <Card
          to="textdiff"
          title="Text Diff Checker"
          description="Check and highlight text or code differences"
          shortcut={`${KEYWORDS[3]} + ↵`}
          imagePath="/images/textdiff.gif"
          isFocus={matchedIndex === 3}
          hasInputEnter={hasInputEnter}
        />
        <Card
          to="/jotter"
          title="WYSIWYG Jotter"
          description="Notion-like WYSIWYG Notepad."
          shortcut={`${KEYWORDS[4]} + ↵`}
          imagePath="/images/jotter.png"
          isFocus={matchedIndex === 4}
          hasInputEnter={hasInputEnter}
        />
        <Card
          title="JSON Editor"
          description="Edit, validate and format JSON"
          shortcut={`${KEYWORDS[5]} + ↵`}
          isComingSoon
          isFocus={matchedIndex === 5}
          hasInputEnter={hasInputEnter}
        />
        {/* <div className="w-full" /> */}
      </div>
    </>
  );
};

export default Home;
