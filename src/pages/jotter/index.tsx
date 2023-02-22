import type { NextPage } from "next";
import Head from "next/head";

import { WYSIWYGEditor } from "@/components/WYSIWYGEditor";

const Jotter: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          WYSIWYG Text Editor | DevToolkit - Free Online Developer Tools
        </title>
        <meta
          name="description"
          content="You can edit text to WYSIWYG(What You See Is What You Get). You can also copy in HTML or Text."
        />
      </Head>

      <div className="flex justify-center">
        <div className="w-[90%] ">
          <WYSIWYGEditor />
        </div>
      </div>
    </>
  );
};

export default Jotter;
