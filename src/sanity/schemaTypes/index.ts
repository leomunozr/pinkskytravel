import { type SchemaTypeDefinition } from 'sanity'
import { tourType } from './tourType'
import { destinationType } from './destinationType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tourType, destinationType],
}
