import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skillVertical',
  title: 'Skill Vertical',
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
      description: 'Icon for the skill vertical',
    })
  ],
})
