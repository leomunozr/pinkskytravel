import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../../config/sanity-env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: any) => {
  return builder.image(source)
}
