import { useEditor, EditorContent } from "@tiptap/react";
import { Node } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";

import style from "./style.module.css";

export const WYSIWYGEditor = () => {
  const CustomNode = Node.create({
    // Hea,
  });

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({ levels: [1, 2, 3] }),
      Blockquote,
    ],
    content: `<h1>Heading1</h1>
<h2>Heading2</h2>
<h3>Heading3</h3>
<p>paragpraph</p>
<blockquote>
  Nothing is impossible, the word itself says “I’m possible!”
</blockquote>
`,
    autofocus: "end",
  });

  return (
    <>
      <div className={style.div}>testhogehgoe</div>
      <EditorContent className={style.editor} editor={editor} />
    </>
  );
};
