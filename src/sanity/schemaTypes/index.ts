import { type SchemaTypeDefinition } from 'sanity'
import { tourType } from './tourType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tourType],
}
