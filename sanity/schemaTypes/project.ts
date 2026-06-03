import { defineArrayMember, defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "titleId",
      title: "Title (ID)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleEn",
      title: "Title (EN)",
      type: "string",
    }),

    defineField({
      name: "slugId",
      title: "Slug (ID)",
      type: "slug",
      options: { source: "titleId" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slugEn",
      title: "Slug (EN)",
      type: "slug",
      options: { source: "titleEn" },
    }),

    defineField({
      name: "descriptionId",
      title: "Description (ID)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "descriptionEn",
      title: "Description (EN)",
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
      name: "bodyId",
      title: "Body (ID)",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bodyEn",
      title: "Body (EN)",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "titleId",
      subtitle: "client",
      media: "heroImage",
    },
  },
});
