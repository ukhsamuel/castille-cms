import {defineField, defineType} from 'sanity'
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
    }),

    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Candidate', value: 'candidate'},
          {title: 'Employer', value: 'employer'},
        ],
        layout: 'radio', // Displays options as radio buttons
      },
      description: 'Specify whether the testimonial is from a candidate or an employer.',
      validation: (Rule) => Rule.required().error('Type is required.'),
    }),
  ],
})
