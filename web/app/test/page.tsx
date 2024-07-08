"use client";
import "./styles.scss";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { Button } from "@/components/ui/button";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "default" : "link"}
      >
        Bold
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "default" : "link"}
      >
        Italic
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        variant={editor.isActive("strike") ? "default" : "link"}
      >
        Strike
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        variant={editor.isActive("code") ? "default" : "link"}
      >
        Code
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        Clear marks
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        Clear nodes
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().setParagraph().run()}
        variant={editor.isActive("paragraph") ? "default" : "link"}
      >
        Paragraph
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        variant={editor.isActive("heading", { level: 1 }) ? "default" : "link"}
      >
        H1
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        variant={editor.isActive("heading", { level: 2 }) ? "default" : "link"}
      >
        H2
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        variant={editor.isActive("heading", { level: 3 }) ? "default" : "link"}
      >
        H3
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        variant={editor.isActive("heading", { level: 4 }) ? "default" : "link"}
      >
        H4
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        variant={editor.isActive("heading", { level: 5 }) ? "default" : "link"}
      >
        H5
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        variant={editor.isActive("heading", { level: 6 }) ? "default" : "link"}
      >
        H6
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        variant={editor.isActive("bulletList") ? "default" : "link"}
      >
        Bullet list
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        variant={editor.isActive("orderedList") ? "default" : "link"}
      >
        Ordered list
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        variant={editor.isActive("codeBlock") ? "default" : "link"}
      >
        Code block
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        variant={editor.isActive("blockquote") ? "default" : "link"}
      >
        Blockquote
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        Horizontal rule
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        Hard break
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        Undo
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        Redo
      </Button>
      <Button
        className="m-1"
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        variant={
          editor.isActive("textStyle", { color: "#958DF1" })
            ? "default"
            : "link"
        }
      >
        Purple
      </Button>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

export default function Home() {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
    ></EditorProvider>
  );
}
