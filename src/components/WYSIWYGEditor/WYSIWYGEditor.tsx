import { EditorContent } from "@tiptap/react";
import { useEditor } from "./useEditor";
import style from "./style.module.css";
import "highlight.js/styles/github-dark-dimmed.css";

export const WYSIWYGEditor = () => {
  const editor = useEditor();

  const handleFocus = () => editor?.chain().focus().run();

  return (
    <EditorContent
      onClick={handleFocus}
      className={`${style.editor} prose prose-sm w-full rounded-md shadow-lg text-gray-900 py-2 px-8 bg-slate-100 placeholder:text-gray-500`}
      editor={editor}
    />
  );
};
