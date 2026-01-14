import { defineField, defineType } from 'sanity'

export const tourType = defineType({
  name: 'tour',
  title: 'Tours',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'destino',
      title: 'destino',
      type: 'reference',
      to: [{ type: 'destino' }],
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Catchy, benefit-driven description (e.g., "Explore Aztec Wonders & Flavors")',
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
        name: 'features',
        title: 'Features',
        type: 'object',
        fields: [
            defineField({name: 'duration', type: 'string', title: 'Duration'}),
            defineField({name: 'groupSize', type: 'string', title: 'Group Size'}),
            defineField({name: 'transportation', type: 'string', title: 'Transportation'}),
            defineField({name: 'difficulty', type: 'string', title: 'Difficulty'}),
        ]
    }),
    defineField({
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'day', type: 'string', title: 'Day/Time'}),
            defineField({name: 'title', type: 'string', title: 'Title'}),
            defineField({name: 'description', type: 'text', title: 'Description'}),
          ]
        }
      ],
    }),
    defineField({
      name: 'included',
      title: 'What\'s Included',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'notIncluded',
      title: 'What\'s Not Included',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'logistics',
      title: 'Logistics',
      type: 'object',
      fields: [
        defineField({name: 'meetingPoint', type: 'string', title: 'Meeting Point'}),
        defineField({name: 'whatToBring', type: 'text', title: 'What to Bring'}),
      ]
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
