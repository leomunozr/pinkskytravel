import { groq } from "next-sanity";

export const TOURS_QUERY = groq`*[_type == "tour"] | order(date desc) {
  _id,
  title,
  slug,
  price,
  date,
  vibe,
  "imageUrl": gallery[0].asset->url,
  leleTip
}`;

export const GET_TOUR = groq`*[slug.current == $slug][0] {
  _id,
  title,
  price,
  imageUrl,
  vibe,
  slug,
  summary,
  currency,
  date,
  itinerary,
  features,
  included,
  notIncluded,
  logistics,
  "imageUrl": gallery[0].asset->url,
}`;

export const CATEGORIES_QUERY = groq`*[_type == "categoria"] {
  _id,
  name,
  slug,
  "imageUrl": image.asset->url
}`;

export const FEATURED_DESTINATIONS_QUERY = groq`*[_type == "destino"][0...3] {
  _id,
  name,
  slug,
  "imageUrl": image.asset->url,
  description,
  region,
  highlights
}`;

export const GET_WHATSAPP_NUMBER = `
  *[_type == "settings"][0].whatsappNumber
`;
