import { useEditor, EditorContent } from "@tiptap/react";
import { Node } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Image from "@tiptap/extension-image";
import History from "@tiptap/extension-history";

import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";

import { lowlight } from "lowlight";

import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

import style from "./style.module.css";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("ts", ts);

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
      BulletList,
      ListItem,
      OrderedList,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      HorizontalRule,
      Image,
      History,
    ],
    content: `<h1>Heading1</h1>
<h2>Heading2</h2>
<h3>Heading3</h3>
<p>paragpraph</p>
<blockquote>
  Nothing is impossible, the word itself says “I’m possible!”
</blockquote>
<ul>
  <li>A list item</li>
  <li>And another one</li>
</ul>
<ol>
  <li>A list item</li>
  <li>And another one</li>
</ol>

<pre><code class="language-javascript">for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre>
<p>paragpraph</p>
<hr>
<p>paragpraph</p>
<img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
<ul data-type="taskList">
  <li data-type="taskItem" data-checked="true">A list item</li>
  <li data-type="taskItem" data-checked="false">And another one</li>
</ul>
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
