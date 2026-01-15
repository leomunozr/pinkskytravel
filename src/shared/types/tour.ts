export interface Tour {
  _id: string;
  title: string;
  price: number;
  imageUrl?: string;
  vibe?: string;
  slug?: { current: string };
  summary?: string;
  currency?: string;
  date?: Date;
  itinerary?: Array<{
    day: string;
    activities: string[];
  }>;
  features?: {
    duration?: string;
    groupSize?: string;
    transportation?: string;
    difficulty?: string;
  };
  included?: string[];
  notIncluded?: string[];
  logistics?: {
    meetingPoint?: string;
    whatToBring?: string;
  };
  gallery?: any;
}
