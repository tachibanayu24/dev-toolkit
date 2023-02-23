import { useEditor as useEditorOrigin } from "@tiptap/react";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
import Gapcursor from "@tiptap/extension-gapcursor";
import History from "@tiptap/extension-history";
import Placeholder from "@tiptap/extension-placeholder";

import Bold from "@tiptap/extension-bold";
import Code from "@tiptap/extension-code";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Link from "@tiptap/extension-link";

import { lowlight } from "lowlight";

import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("ts", ts);

export const useEditor = () =>
  useEditorOrigin({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({ levels: [1, 2, 3] }),
      Blockquote,
      BulletList,
      ListItem.extend({
        addKeyboardShortcuts() {
          return {
            Enter: () => this.editor.commands.splitListItem(this.name),
            Tab: () => {
              this.editor.commands.sinkListItem(this.name);
              return true; // Prevent focus out from editor
            },
            "Shift-Tab": () => this.editor.commands.liftListItem(this.name),
          };
        },
      }),
      OrderedList,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      HorizontalRule,
      Image,
      Gapcursor,
      Dropcursor.configure({
        color: "#38bdf8", // TODO: tailwindのconfig resolverを実装する
        width: 3,
      }),
      History,
      Placeholder.configure({
        placeholder: ({ node }) => {
          switch (node.type.name) {
            case "heading":
              return "Heading...";
            case "codeBlock":
              return "";
            default:
              return "Write something...";
          }
        },
        emptyNodeClass:
          "cursor-text before:content-[attr(data-placeholder)] before:absolute before:left-0 before:text-mauve-11 before:opacity-50 before-pointer-events-none",
      }),
      Bold,
      Code,
      Italic,
      Strike,
      Link.configure({
        openOnClick: true,
      }),
    ],
    //     content: `<h1>Heading1</h1>
    // <h2>Heading2</h2>
    // <h3>Heading3</h3>
    // <p>paragpraph</p>
    // <blockquote>
    //   Nothing is impossible, the word itself says “I’m possible!”
    // </blockquote>
    // <ul>
    //   <li>A list item</li>
    //   <li>And another one</li>
    // </ul>
    // <ol>
    //   <li>A list item</li>
    //   <li>And another one</li>
    // </ol>

    // <pre><code class="language-javascript">for (var i=1; i <= 20; i++)
    // {
    //   if (i % 15 == 0)
    //     console.log("FizzBuzz");
    //   else if (i % 3 == 0)
    //     console.log("Fizz");
    //   else if (i % 5 == 0)
    //     console.log("Buzz");
    //   else
    //     console.log(i);
    // }</code></pre>
    // <p>paragpraph</p>
    // <hr>
    // <p>paragpraph</p>
    // <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
    // <ul data-type="taskList">
    //   <li data-type="taskItem" data-checked="true">A list item</li>
    //   <li data-type="taskItem" data-checked="false">And another one</li>
    // </ul>

    // <p><strong>This is bold.</strong></p>
    // <p><code>This is code.</code></p>
    // <p><em>This is italic.</em></p>
    // <p><s>But that’s striked through.</s></p>

    // `,
    autofocus: "end",
  });
