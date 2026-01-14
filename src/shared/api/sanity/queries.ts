import { groq } from 'next-sanity'

export const TOURS_QUERY = groq`*[_type == "tour"] | order(date desc) {
  _id,
  title,
  slug,
  price,
  date,
  vibe,
  "imageUrl": gallery[0].asset->url,
  leleTip
}`
