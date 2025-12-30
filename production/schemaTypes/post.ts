// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'post',
//   title: 'Post',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96,
//       },
//     }),
//     defineField({
//       name: 'author',
//       title: 'Author',
//       type: 'reference',
//       to: {type: 'author'},
//     }),
//     defineField({
//       name: 'mainImage',
//       title: 'Main image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//     }),
//     defineField({
//       name: 'categories',
//       title: 'Categories',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'category'}}],
//     }),
//     defineField({
//       name: 'publishedAt',
//       title: 'Published at',
//       type: 'datetime',
//     }),
//     defineField({
//       name: 'body',
//       title: 'Body',
//       type: 'blockContent',
//     }),
//   ],

//   preview: {
//     select: {
//       title: 'title',
//       author: 'author.name',
//       media: 'mainImage',
//     },
//     prepare(selection) {
//       const {author} = selection
//       return {...selection, subtitle: author && `by ${author}`}
//     },
//   },
// })
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'News Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    }),
      defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'breaking',
      title: 'Breaking News',
      type: 'boolean',
      description: 'Mark this as breaking news'
    }),

  ],
})

