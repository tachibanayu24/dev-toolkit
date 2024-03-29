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

import c from "highlight.js/lib/languages/c";
import cpp from "highlight.js/lib/languages/cpp";
import css from "highlight.js/lib/languages/css";
import django from "highlight.js/lib/languages/django";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import elm from "highlight.js/lib/languages/elm";
import go from "highlight.js/lib/languages/go";
import graphql from "highlight.js/lib/languages/graphql";
import html from "highlight.js/lib/languages/xml";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import kotlin from "highlight.js/lib/languages/kotlin";
import markdown from "highlight.js/lib/languages/markdown";
import perl from "highlight.js/lib/languages/perl";
import php from "highlight.js/lib/languages/php";
import python from "highlight.js/lib/languages/python";
import ruby from "highlight.js/lib/languages/ruby";
import rust from "highlight.js/lib/languages/rust";
import scala from "highlight.js/lib/languages/scala";
import scss from "highlight.js/lib/languages/scss";
import typescript from "highlight.js/lib/languages/typescript";
import wasm from "highlight.js/lib/languages/wasm";
import yaml from "highlight.js/lib/languages/yaml";

lowlight.registerLanguage("c", c);
lowlight.registerLanguage("cpp", cpp);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("django", django);
lowlight.registerLanguage("dockerfile", dockerfile);
lowlight.registerLanguage("elm", elm);
lowlight.registerLanguage("go", go);
lowlight.registerLanguage("graphql", graphql);
lowlight.registerLanguage("html", html);
lowlight.registerLanguage("java", java);
lowlight.registerLanguage("js", javascript);
lowlight.registerLanguage("json", json);
lowlight.registerLanguage("kotlin", kotlin);
lowlight.registerLanguage("markdown", markdown);
lowlight.registerLanguage("perl", perl);
lowlight.registerLanguage("php", php);
lowlight.registerLanguage("python", python);
lowlight.registerLanguage("ruby", ruby);
lowlight.registerLanguage("rust", rust);
lowlight.registerLanguage("scala", scala);
lowlight.registerLanguage("scss", scss);
lowlight.registerLanguage("ts", typescript);
lowlight.registerLanguage("wasm", wasm);
lowlight.registerLanguage("yaml", yaml);

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
            ...this.parent?.(),
            Tab: () => {
              this.editor.commands.sinkListItem(this.name);
              return true; // Prevent focus out from editor
            },
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
