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

export const CATEGORIES_QUERY = groq`*[_type == "categoria"] {
  _id,
  name,
  slug,
  emoji
}`

export const FEATURED_DESTINATIONS_QUERY = groq`*[_type == "destino"][0...3] {
  _id,
  name,
  slug,
  "imageUrl": image.asset->url,
  description,
  region,
  highlights
}`