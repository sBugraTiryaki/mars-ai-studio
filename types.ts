
export type LocalizedString = {
  en: string;
  tr: string;
};

export interface Unit {
  id: string;
  type: LocalizedString;
  price: string;
  priceRange: string;
  image: string;
  floorPlan: string;
  gallery: string[];
  description: LocalizedString;
}

export interface GalleryImage {
  src: string;
  alt: LocalizedString;
  span?: boolean;
}
