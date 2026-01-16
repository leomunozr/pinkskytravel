// src/shared/config/sanity-schemas/settingsType.ts
import { defineField, defineType } from 'sanity';

export const settingsType = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'The phone number for WhatsApp contact, e.g., +521234567890',
      validation: (Rule) => Rule.required(),
    }),
    // Add other global settings here if needed
  ],
});
