import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ourPeoplePhoto',
  title: 'Our People Photo',
  type: 'document',
  fields: [  
    // defineField({
    //     name: 'title',
    //     title: 'Title',
    //     type: 'string',
    //     description: 'Name of the person.',
    // }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: false, // Enables image cropping
      },
      description: 'Main image (e.g., cover photo).',
    })
  ],
  preview: {
    select: {
      media: 'photo'
    }
  }
})
