import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'salaryBenchmark',
  title: 'Salary Benchmark',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the Salary Benchmark (e.g., Malta Salary Benchmark 2023)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description or summary of the Salary Benchmark.',
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
      name: 'file',
      title: 'Downloadable File',
      type: 'file',
      options: {
        storeOriginalFilename: true, // Retain the original filename when uploaded
      },
      description: 'The downloadable file for the Salary Benchmark (e.g., PDF document).',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'photo'
    }
  }
})
