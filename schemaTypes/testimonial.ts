import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [  
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Name of the person who gave the testimonial.',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: false, // Enables image cropping
      },
      description: 'Main image for the Salary Benchmark (e.g., cover photo).',
    })
  ],
})
