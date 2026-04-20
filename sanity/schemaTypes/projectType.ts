import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "projectType",
  title: "Project Types",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
