// import html2canvas from "html2canvas";
import type { NextPage } from "next";

import { Card } from "@/components/Card";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex gap-10 mb-10">
        <Card
          title="UUID Generator"
          description="Generate random IDs based on UUID v4"
          shortcut="uuid + ↵"
          isComingSoon
        />
        <Card
          title="HTML Color Names"
          description="List the color names supported by all browsers"
          shortcut="color + ↵"
          isComingSoon
        />
        <Card
          title="JSON Diff Checker"
          description="Semantically compare two JSON objects"
          shortcut="diff + ↵"
          isComingSoon
        />
      </div>

      <div className="flex gap-10">
        <Card
          title="JSON Editor"
          description="Edit, validate and format JSON"
          shortcut="edit + ↵"
          isComingSoon
        />
        <div className="w-full" />
        <div className="w-full" />
      </div>
    </>
  );
};

export default Home;
