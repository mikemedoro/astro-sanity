import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.max(200).warning("The description shouldn't be longer than 200 characters"),
    }),

    defineField({
      name: 'richText',
      title: 'Rich Text',
      type: 'blockContent',
    }),
  ],
});
