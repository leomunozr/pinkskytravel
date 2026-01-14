export interface Destino {
  _id: string;
  name: string;
  slug: { current: string };
  imageUrl?: string;
  description?: string;
  region?: string;
  highlights?: string[];
}
