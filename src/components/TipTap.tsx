"use client";

import React, { useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
// import Image from '@tiptap/extension-image'


type TipTapProps = {
  description: string;
  // onChange: (richText: string) => void;
};

export default function TipTap({ description }: TipTapProps) {


  const editor = useEditor({
    editable: false,
    extensions: [
      StarterKit.configure({
        heading : false,
      }),
      Heading.configure({
        levels: [1],
        HTMLAttributes: {
          class: "text-xl font-bold",
        },
      }),
      Typography.configure(),
      TextAlign.configure({
        defaultAlignment: "right",
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        HTMLAttributes: {
          class: "text-blue-500 underline hover:text-blue-700",
        },
        autolink: true,
        linkOnPaste : true,
        openOnClick : false,
        }),


        // Image.configure({
        //     inline: true,
        //     allowBase64: true,
        //     HTMLAttributes: {
        //     class: "rounded-md",
        //     },
        // }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          "min-h-[150px]",
      },
    },
    // onUpdate: ({ editor }) => {
    //     onChange(JSON.stringify(editor.getJSON()));
    //     console.log(editor.getJSON());
    // },
  });





  return (
    <div className="flex flex-col justify-stretch min-h-[250px] gap-y-2">
      <EditorContent editor={editor} />
    </div>
  );
}
