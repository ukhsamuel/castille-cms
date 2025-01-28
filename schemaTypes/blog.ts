import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleSeo', title: 'Title SEO', type: 'string'}),
    defineField({name: 'content', title: 'Content', type: 'text'}),
    defineField({name: 'readingTime', title: 'Reading Time', type: 'string'}),
    defineField({name: 'type', title: 'Type', type: 'string'}),
    defineField({name: 'publishedBy', title: 'Published By', type: 'string'}),
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime',
    }),
    defineField({name: 'status', title: 'Status', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
    }),
    // defineField({name: 'imageUrl', title: 'Image URL', type: 'url'}),
    defineField({name: 'metaDescription', title: 'Meta Description', type: 'text'}),
    defineField({name: 'category', title: 'Category', type: 'string'}),
    defineField({name: 'numberLike', title: 'Number of Likes', type: 'number'}),
    defineField({name: 'likedByCandidate', title: 'Liked by Candidate', type: 'boolean'}),
    defineField({name: 'numberJobs', title: 'Number of Jobs', type: 'string'}),
    defineField({name: 'summary', title: 'Summary', type: 'text'}),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'lsOtherTags',
      title: 'Other Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'coverImageUrl', title: 'Cover Image URL', type: 'url'}),
  ],
})
