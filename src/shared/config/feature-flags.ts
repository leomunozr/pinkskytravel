export const featureFlags = {
  home: {
    hero: process.env.NEXT_PUBLIC_FF_HOME_HERO !== 'false',
    categories: process.env.NEXT_PUBLIC_FF_HOME_CATEGORIES !== 'false',
    featured: process.env.NEXT_PUBLIC_FF_HOME_FEATURED !== 'false',
    tours: process.env.NEXT_PUBLIC_FF_HOME_TOURS !== 'false',
  },
};
