import { defineArrayMember, defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projects",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
    }),
    defineField({
      name: "liveUrl",
      title: "Live Url",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroAlt",
      title: "Hero Alt",
      type: "string",
    }),

    defineField({
      name: "types",
      title: "Types",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: [{ type: "projectType" }] }),
      ],
      validation: (Rule) => Rule.required().min(1).unique(),
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "service" }] })],
      validation: (Rule) => Rule.unique(),
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client",
      media: "heroImage",
    },
  },
});
