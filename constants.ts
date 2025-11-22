
import { Unit, GalleryImage } from './types';

export const IMAGES = {
  hero: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCz6W18ChAQ6H2O8BZ7M7fgMEJjMciIHijLvcsUL-mgAmSl5JNcJ0LqqcjIfV9Gs1mdlwdnfZs9sNbIfEj-eE-TTLF0rR5nTL6E78JjHxPH6_FtZnJ7vzbXYEc860PrGOL5r5hA9gEIelnCSoXG_wmdWRXfGg3DwaighcJJIiEIaPi7LO2ypSHW05ZO1FToLMPCgY0UJtliFYVOGJTomsXvlufGvT3JuMX7N0NMv8fQIFkV9xB6RhHbPRrh5_KboRCoHzp3ZvsONks",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCvuorIzSAqEsJCHzP4e62yi6z-OstB6gOsKO5jhXcz-p3cSCJPmrr8MvHAFeWmn4Kmh2WH8vRw8JUz6vtcsCg0uPKZy0-5FQELNTpNWhPx9xbH585DtHpDVEn6mcpS9oVwXKEJkAc9EwNs9KDbLlT5zcSqLSTkxXdIl27_MqTBlsMYffjbVnKW3Te73YYMMPeCx1oMRP6RkLSuRWdouKqEjUVj-VLWGrn38039QBw3WlfegznMIzLhzeqZRyhivketrPbrffZDmVI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAxNfFdWaGlSaeANJF7GnJ018pE452LLlJgaD4fNOJyIg4XIPAPGpPZa1xpeudn56zVDoqxdyargwif1psXeCrcnrafT10sbpKjCz3whNEK4sLOk8djtuKkdnDGEmotpza2v3hG3dz1uiMbsBeB8TGqPU0y_YzwXWKY11n4OF2sw7gBLsE63r2a5JF_5LoTs9fsAqegRnD7UOdzEpgqTLOYhuSZe4zj8BmLYOpQM3ViyIQz0j9LinJyBtR--13_ON0OK2PdTnbxS_I"
  ],
  gallery: {
    livingRoom: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf-GXtNuGs2lf4I53VekyjYjJQNko5hiHfTqtyCt5gSwjkq9dbW8cYm6aXKjFC0or3jgGMkDuQPaPUpv3QzS0t6SDG2CD6LG85Ncig-EFLeTiXRY9PvygCUQeUZxrVejA6DL4CIptGLCyAOiIQp_iAWrGBIUCNt7CN-Laa76M1zyoRpdjxNtc7LARsUOV0n1n9IKZMdJy4GpCEqq4DCnyPE8LUJ_a5MJ1E1BrH7SV2Iykp1tE3IrUGyO1pSlUteGpqzO0B0med-FY",
    bedroom: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp3UKPwsTLWG_0SG8-F97nSvAYZuZf_XvJ1VUTzdAshG9yVnCtW8SSzaFDRmc5p4AOSLofAjRX4AKKFQg_bXRgLMptwE9Ii65t4SghAzbuOPm_mBWuFai8V482sFQtX_1WpVI7t8A4mgKGpV8hspU_fCXe8mqnRgRzk6AM0wnOJEHDo7QmvTB3s2i5n7IXsB1SOvJ5GWC19GWcYk1xrlVKMtU5m5TVIToDQ3qH8PzckNQvhBUrv_YKLrH2OZdkEu1oBs1RPSMWpyM",
    balcony: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1lr9iKeFDlv82Jql0Kbdqd8ifJo1T5EQUG7eoSPxQi_gQTe8SbdOmya_t7xnElXUhgBGPKoEk5XDJ9iRM4TNYiWde926AqOAr7oyfFwvvujS-nM8nqhxZcanbrT2ludAyL0UHn1VNJjaUUG2rLYdwhodJ0gLzCAOXnDvBNRaRUDe6w5NbeCTHqljCO2-_uyAanjn3ONcCumni5jaZ-lBrC1iJ0goHWgsPgykdoB2r-ltRj41RcxEdOP8BDxVMRhZ1yEA3RIEP7dk",
    exterior: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvuorIzSAqEsJCHzP4e62yi6z-OstB6gOsKO5jhXcz-p3cSCJPmrr8MvHAFeWmn4Kmh2WH8vRw8JUz6vtcsCg0uPKZy0-5FQELNTpNWhPx9xbH585DtHpDVEn6mcpS9oVwXKEJkAc9EwNs9KDbLlT5zcSqLSTkxXdIl27_MqTBlsMYffjbVnKW3Te73YYMMPeCx1oMRP6RkLSuRWdouKqEjUVj-VLWGrn38039QBw3WlfegznMIzLhzeqZRyhivketrPbrffZDmVI",
    pool: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxNfFdWaGlSaeANJF7GnJ018pE452LLlJgaD4fNOJyIg4XIPAPGpPZa1xpeudn56zVDoqxdyargwif1psXeCrcnrafT10sbpKjCz3whNEK4sLOk8djtuKkdnDGEmotpza2v3hG3dz1uiMbsBeB8TGqPU0y_YzwXWKY11n4OF2sw7gBLsE63r2a5JF_5LoTs9fsAqegRnD7UOdzEpgqTLOYhuSZe4zj8BmLYOpQM3ViyIQz0j9LinJyBtR--13_ON0OK2PdTnbxS_I",
    gym: "https://lh3.googleusercontent.com/aida-public/AB6AXuBle5Pyv4uX-T85J3SQVvCYI5oL2zEiCZjkCdu_Fv2w7plDpsU4RN9t8wsdAjZTWpunBnEtiQuLJ1iHs6aYT7chekP5RK7MZ8uUJciXWNgfIcTgTt48JBZBilhVbMpyKwnck12VSFLuCFRGVzrtvPhPbYkLMttmRLOCd8itwNexXSADB_Rwvnvch6f3qajhHTGSj1ha8eS_8ibk1fc8vYQoDkPf70FTDPV7iEXMARlTm-1nxm4D5mBng-r9iD8-Nbbr9LnVQIGH9CU",
    kitchen: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1vKiyCFqRtRaUiZk6wvx76ORr16Nu9W3rhYqMZpCdvq5FR9jv8WoC7SdEuPiUbDOLt32-heeovR2tubnJIVkuREtdCP4XG1zjDh86IfQ53rLhB2M7XRo_Kze-R9HUXx0O78gfE9nMaZOuz5MlhFEZVI5w8EszoqOFAPia8jJ4HRi90fzzWdZR8-qanK8f9th-utRAakti65o3-dsiUkIXnluz0mQ3mgDAQyViSofqVcg8yTVOpUGPxCZwHira7o6cRULBUFYWDqY",
    spa: "https://lh3.googleusercontent.com/aida-public/AB6AXuANXz82DWIaq3wtNJ9jz_iyWBg8GaoUiVQEVj4dMI3WehlWiLeOE_yJ6Z_psGSj8ZsyaIhIWH7URWEgpvIQ3fFyn18gKc9MzuoVRpkW55c18PfcBx5TZJrFbdqiYVtu5TDuy7JkvHkpAZKwBfBCdZQ1T9snaCB-4VZBzgRAwDIvRQdloPMox_ntk4btNpJRJ6NDNjAo0LslK9xu7y8mZ3n4gIN1ftahFbPSS-zhxKTml3uwj_gwADcLRuC6HEZ0h_15PjqSwgu05r8"
  },
  units: {
    unit1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmSejjFW4-MsO3mGem6ih8NEhJJCzRL_iqkSIIJ5hPLUn31qvPUOlLiUEupv4vT89zFjuDL1opGKNkBn2rWeH4DJoBqP-XyF52eaf14HEIRHStsE2M0vZlvuoMMdvYOUbWw8imFiJR9UCnZLFsSK2bHsX2MyRUFZBQUcTbQbB8sGi_fXsmFuDpA_JkYjx7kqws8n96xmNj45-WSo8vDwyur2JE3f9wJU-EXzpoBCeHNIpB5kE4ddM2lABhc1WMwB5eGUziXUULuFI",
    unit2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeTWTWFpEybkYFcS2PB4SY1tcjKOL5z5vAveYr3j3YPOxLbe6C46o0nOdplU7-xSF3AVi0FnxiTgnfruTOlMQQbOv81EylrhTx5XtTyG9UGF1Feak4B2NkWpHILuicajCphf1uwmFWTbAY9Y05CHLg5Co6k3woE0JDlpcIZnACZ7fvRdhdwljH0fOAuXeE_G2gfM5vSTFKNgpqs3E6mZe4KjZyOwglJohgnAdMOoy8tH-f5W6wjhBoC2Em0wQubz9lfkQewnZ9Nrg",
    unit3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr1k7gz-JdXCYA8YwLgNVuzmIE8FtYhA8wlD0GiP_AarUQbJQzlR1kYO7wuNqQQcIEYy94m5Kv8fm7sVF8le9eh_MAYCk11LI-NxZ6A7pGkOV6ethb2eJLz_GXzlDoqltcBTah_iTmFMeCU9zsonpGoBsLN8R1rQcbSR5Ka_vW4jcuwC8YNjzfpesuJIAZP_E03ihyHD_c9Nst7P5SfmX_xkJZyKj9i_BoKruFiCSycgaCMVfm3JrHzqmseIrJqH18vtk2_N32pYk"
  }
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
    floorPlan: 'https://picsum.photos/800/600?random=1',
    gallery: [IMAGES.gallery.livingRoom, IMAGES.gallery.kitchen],
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
    floorPlan: 'https://picsum.photos/800/600?random=2',
    gallery: [IMAGES.gallery.balcony, IMAGES.gallery.bedroom],
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
    floorPlan: 'https://picsum.photos/800/600?random=3',
    gallery: [IMAGES.gallery.exterior, IMAGES.gallery.pool],
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
    image: IMAGES.gallery.bedroom,
    floorPlan: 'https://picsum.photos/800/600?random=4',
    gallery: [IMAGES.gallery.bedroom, IMAGES.gallery.balcony],
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
    image: IMAGES.gallery.livingRoom,
    floorPlan: 'https://picsum.photos/800/600?random=5',
    gallery: [IMAGES.gallery.livingRoom, IMAGES.gallery.exterior],
    description: {
      en: 'The ultimate expression of luxury. A 5-bedroom royal suite with private elevator access and concierge service.',
      tr: 'Lüksün nihai ifadesi. Özel asansör erişimi ve konsiyerj hizmeti sunan 5 yatak odalı kral dairesi.'
    }
  },
];

export const GALLERY_DATA: GalleryImage[] = [
  { 
    src: IMAGES.gallery.livingRoom, 
    alt: { en: "Modern apartment living room with city view", tr: "Şehir manzaralı modern daire oturma odası" }
  },
  { 
    src: IMAGES.gallery.bedroom, 
    alt: { en: "Luxurious bedroom with panoramic window", tr: "Panoramik pencereli lüks yatak odası" }
  },
  { 
    src: IMAGES.gallery.balcony, 
    alt: { en: "Spacious balcony with outdoor furniture overlooking the sea", tr: "Deniz manzaralı dış mekan mobilyalarına sahip geniş balkon" }
  },
  { 
    src: IMAGES.gallery.exterior, 
    alt: { en: "Elegant building exterior at sunset", tr: "Gün batımında zarif bina dış cephesi" }
  },
  { 
    src: IMAGES.gallery.pool, 
    alt: { en: "Infinity pool with a view of the skyline", tr: "Şehir silüeti manzaralı sonsuzluk havuzu" }
  },
  { 
    src: IMAGES.gallery.gym, 
    alt: { en: "State-of-the-art gym facility", tr: "Son teknoloji spor salonu tesisi" }
  },
  { 
    src: IMAGES.gallery.kitchen, 
    alt: { en: "Designer kitchen with marble countertops", tr: "Mermer tezgahlı tasarım mutfak" }
  },
  { 
    src: IMAGES.gallery.spa, 
    alt: { en: "Serene spa and wellness center", tr: "Huzurlu spa ve sağlıklı yaşam merkezi" }
  },
];
