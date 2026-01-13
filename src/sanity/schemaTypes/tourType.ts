import { defineField, defineType } from 'sanity'

export const tourType = defineType({
  name: 'tour',
  title: 'Tour',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'vibe',
      title: 'Vibe',
      type: 'string',
      options: {
        list: [
          { title: 'Pueblos Mágicos', value: 'pueblos_magicos' },
          { title: 'Playa', value: 'playa' },
          { title: 'Gastronomía', value: 'gastronomia' },
          { title: 'Aventura', value: 'aventura' },
        ],
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'leleTip',
      title: 'El consejo de Lele',
      type: 'text',
    }),
  ],
})
