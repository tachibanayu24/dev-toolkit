// import html2canvas from "html2canvas";
import type { NextPage } from "next";

import { Card } from "@/components/Card";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex gap-10">
        <Card
          to="#"
          title="UUID Generator"
          description="Generate random IDs based on UUID v4"
          shortcut="uuid + ↵"
        />
        <Card
          to="#"
          title="JSON Diff Checker"
          description="Semantically compare two JSON objects"
          shortcut="diff + ↵"
          isComingSoon
        />
        <Card
          to="#"
          title="JSON Editor"
          description="Edit, validate and format JSON"
          shortcut="edit + ↵"
          isComingSoon
        />
      </div>
    </>
  );
};

export default Home;
