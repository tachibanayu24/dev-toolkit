import { EditorContent } from "@tiptap/react";
import { useEditor } from "./useEditor";
import style from "./style.module.css";

export const WYSIWYGEditor = () => {
  const editor = useEditor();

  return (
    <EditorContent
      onClick={() => editor?.chain().focus().run()}
      className={`${style.editor} w-full rounded-md shadow-lg text-gray-900 py-2 px-8 bg-slate-100 placeholder:text-gray-500`}
      editor={editor}
    />
  );
};