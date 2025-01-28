import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'consultant',
  title: 'Consultant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'expertise',
      title: 'Expertise',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required().email().error('Please enter a valid email address.'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping in the CMS
      },
    }),
  ],
})
