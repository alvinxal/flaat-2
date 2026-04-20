import { defineArrayMember, defineField, defineType } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "URL",
                type: "url",
                validation: (Rule) => Rule.required(),
              }),
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt",
          type: "string",
        }),
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "codeBlock",
      title: "Code",
      fields: [
        defineField({
          name: "language",
          title: "Language",
          type: "string",
          options: {
            list: [
              { title: "Plain text", value: "text" },
              { title: "Bash", value: "bash" },
              { title: "CSS", value: "css" },
              { title: "HTML", value: "html" },
              { title: "JavaScript", value: "javascript" },
              { title: "JSON", value: "json" },
              { title: "Markdown", value: "markdown" },
              { title: "TypeScript", value: "typescript" },
              { title: "TSX", value: "tsx" },
            ],
          },
          initialValue: "text",
        }),
        defineField({
          name: "code",
          title: "Code",
          type: "text",
          rows: 8,
          validation: (Rule) => Rule.required(),
        }),
      ],
      preview: {
        select: { language: "language", code: "code" },
        prepare({ language, code }) {
          const firstLine = typeof code === "string" ? code.split("\n")[0] : "";
          return {
            title: language || "code",
            subtitle: firstLine,
          };
        },
      },
    }),
  ],
});
