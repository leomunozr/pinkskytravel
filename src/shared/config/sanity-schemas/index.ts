import { type SchemaTypeDefinition } from 'sanity'
import { tourType } from './tourType'
import { destinationType } from './destinationType'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tourType, destinationType, categoryType],
}
