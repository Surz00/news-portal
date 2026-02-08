// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'category',
//   title: 'Category',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     }),
//   ],
// })

import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Category Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    // 🔥 PARENT CATEGORY (IMPORTANT)
    defineField({
      name: "parent",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Select Himachal Pradesh for districts",
    }),
  ],
});

