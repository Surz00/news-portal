import { defineType, defineField } from "sanity";

export default defineType({
  name: "post",
  title: "News Post",
  type: "document",

  fields: [
    // 🔹 TITLE (H1 + SEO TITLE BASE)
    defineField({
      name: "title",
      title: "News Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(120),
    }),

    // 🔹 SLUG (SEO URL)
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // 🔹 SEO DESCRIPTION (META DESCRIPTION)
    defineField({
      name: "excerpt",
      title: "Short Description (SEO)",
      type: "text",
      rows: 3,
      description:
        "140–160 characters | Google search में दिखेगा",
      validation: (Rule) => Rule.required().min(50).max(160),
    }),

    // 🔹 MAIN IMAGE (GOOGLE DISCOVER)
    defineField({
      name: "image",
      title: "Main Image (1200×675)",
      type: "image",
      options: {
        hotspot: true,
      },
      description:
        "Landscape image only | No text/banner | Mandatory for Discover",
      validation: (Rule) => Rule.required(),
    }),

    // 🔹 NEWS CONTENT
    defineField({
      name: "content",
      title: "News Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),

    // 🔹 CATEGORY (CHAMBA / HIMACHAL)
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),

    // 🔹 BREAKING NEWS FLAG
    defineField({
      name: "breaking",
      title: "Breaking News",
      type: "boolean",
      initialValue: false,
    }),

    // 🔹 PUBLISHED DATE (GOOGLE NEWS)
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    // 🔹 AUTHOR (TRUST SIGNAL)
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      initialValue: "Taza Truth Team",
    }),
  ],

  // 🔥 ORDERING (LATEST NEWS FIRST)
  orderings: [
    {
      title: "Latest News",
      name: "latest",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
