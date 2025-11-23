
import { Unit, GalleryImage } from './types';

const NANO_BANANA_FILES = [
  'Gemini_Generated_Image_19swbt19swbt19sw.jpeg',
  'Gemini_Generated_Image_4aml8p4aml8p4aml.jpeg',
  'Gemini_Generated_Image_58klxu58klxu58kl.jpeg',
  'Gemini_Generated_Image_621up0621up0621u.jpeg',
  'Gemini_Generated_Image_6hj2hu6hj2hu6hj2.jpeg',
  'Gemini_Generated_Image_9kzqz49kzqz49kzq.jpeg',
  'Gemini_Generated_Image_ahuj6bahuj6bahuj.jpeg',
  'Gemini_Generated_Image_owiaauowiaauowia.jpeg',
  'Gemini_Generated_Image_p28hflp28hflp28h.jpeg',
  'Gemini_Generated_Image_q9qk6q9qk6q9qk6q.jpeg',
  'Gemini_Generated_Image_rgjpiprgjpiprgjp.jpeg',
  'Gemini_Generated_Image_se0bhuse0bhuse0b.jpeg',
  'Gemini_Generated_Image_vuslqwvuslqwvusl.jpeg',
  'Gemini_Generated_Image_wdpjpowdpjpowdpj.jpeg',
  'Gemini_Generated_Image_yrnk9byrnk9byrnk.jpeg',
  'Gemini_Generated_Image_yyvh95yyvh95yyvh.jpeg'
];

const NANO_BANANA_PATHS = NANO_BANANA_FILES.map(
  (file) => `/nano-banana/${file}`
);

export const IMAGES = {
  hero: NANO_BANANA_PATHS.slice(0, 3),
  units: {
    unit1: NANO_BANANA_PATHS[3],
    unit2: NANO_BANANA_PATHS[4],
    unit3: NANO_BANANA_PATHS[5],
    unit4: NANO_BANANA_PATHS[6],
    unit5: NANO_BANANA_PATHS[7],
  },
  gallery: NANO_BANANA_PATHS
};

export const UNITS_DATA: Unit[] = [
  {
    id: '1',
    type: {
      en: '2 Bedroom Apartment',
      tr: '2 Yatak Odalı Daire'
    },
    price: '$2,500,000',
    priceRange: '2.5M - 3.1M',
    image: IMAGES.units.unit1,
    floorPlan: '/floorplans/floorplan1.png',
    gallery: [IMAGES.gallery[8], IMAGES.gallery[9]],
    description: {
      en: 'A stunning 2-bedroom apartment featuring open-plan living, premium finishes, and spectacular city views.',
      tr: 'Açık plan yaşam alanı, birinci sınıf yüzeyler ve muhteşem şehir manzarası sunan 2 yatak odalı çarpıcı bir daire.'
    }
  },
  {
    id: '2',
    type: {
      en: '3 Bedroom Sky Villa',
      tr: '3 Yatak Odalı Gökyüzü Villası'
    },
    price: '$4,200,000',
    priceRange: '4.2M - 5.5M',
    image: IMAGES.units.unit2,
    floorPlan: '/floorplans/floorplan2.jpg',
    gallery: [IMAGES.gallery[10], IMAGES.gallery[11]],
    description: {
      en: 'Elevated luxury in this 3-bedroom Sky Villa, offering expansive terraces, private amenities, and unmatched privacy.',
      tr: 'Geniş teraslar, özel olanaklar ve eşsiz mahremiyet sunan bu 3 yatak odalı Gökyüzü Villasında lüksün zirvesini yaşayın.'
    }
  },
  {
    id: '3',
    type: {
      en: '4 Bedroom Penthouse',
      tr: '4 Yatak Odalı Penthouse'
    },
    price: '$8,000,000',
    priceRange: '8M - 12M',
    image: IMAGES.units.unit3,
    floorPlan: '/floorplans/floorplan3.jpeg',
    gallery: [IMAGES.gallery[12], IMAGES.gallery[13]],
    description: {
      en: 'The pinnacle of urban living. This 4-bedroom penthouse spans the entire top floor with 360-degree panoramic views.',
      tr: 'Şehir yaşamının zirvesi. Bu 4 yatak odalı penthouse, 360 derece panoramik manzarasıyla tüm en üst katı kaplıyor.'
    }
  },
  {
    id: '4',
    type: {
      en: '3 Bedroom Sea View',
      tr: '3 Yatak Odalı Deniz Manzaralı'
    },
    price: '$3,800,000',
    priceRange: '3.8M - 4.5M',
    image: IMAGES.units.unit4,
    floorPlan: '/floorplans/floorplan4.jpg',
    gallery: [IMAGES.gallery[14], IMAGES.gallery[15]],
    description: {
      en: 'Breathtaking sea views from every room. This 3-bedroom residence offers a unique blend of comfort and coastal elegance.',
      tr: 'Her odadan nefes kesen deniz manzarası. Bu 3 yatak odalı rezidans, konfor ve sahil şıklığının eşsiz bir karışımını sunuyor.'
    }
  },
  {
    id: '5',
    type: {
      en: '5 Bedroom Royal Suite',
      tr: '5 Yatak Odalı Kral Dairesi'
    },
    price: '$15,000,000',
    priceRange: '15M+',
    image: IMAGES.units.unit5,
    floorPlan: '/floorplans/floorplan5.png',
    gallery: [IMAGES.gallery[0], IMAGES.gallery[1]],
    description: {
      en: 'The ultimate expression of luxury. A 5-bedroom royal suite with private elevator access and concierge service.',
      tr: 'Lüksün nihai ifadesi. Özel asansör erişimi ve konsiyerj hizmeti sunan 5 yatak odalı kral dairesi.'
    }
  },
];

export const GALLERY_DATA: GalleryImage[] = IMAGES.gallery.map((src, index) => ({
  src,
  alt: { 
    en: `AI-generated luxury residence ${index + 1}`, 
    tr: `Yapay zeka ile üretilmiş lüks konut ${index + 1}` 
  }
}));
