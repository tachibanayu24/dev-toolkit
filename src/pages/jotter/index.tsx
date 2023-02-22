import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import {
  BlockNoteView,
  useBlockNote,
} from "@/libs/notion-like-editor/react/src";
import { WYSIWYGEditor } from "@/components/WYSIWYGEditor";

const Jotter: NextPage = () => {
  // const editor = useBlockNote({
  //   onUpdate: ({ editor }) => {
  //     // Log the document to console on every update
  //     console.log(editor.getJSON());
  //   },
  // });

  return (
    <>
      <Head>
        <title>
          Characters counter | DevToolkit - Free Online Developer Tools
        </title>
        <meta
          name="description"
          content="Counts the number of characters in the inputted text.The number of characters, excluding spaces and line feeds, and the number of lines can be displayed immediately."
        />
      </Head>

      <div className="flex justify-center">
        <h1>test</h1>
        <div className="w-[80%] ">
          <WYSIWYGEditor />
        </div>
      </div>
    </>
  );
};

export default Jotter;
