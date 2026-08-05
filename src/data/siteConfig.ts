/*
============================================================
CHARMBERRY CROCHETS — WEBSITE CONTENT
============================================================

EDIT THIS FILE TO UPDATE THE WEBSITE.

Personal details, social URLs, product information,
images, reviews, FAQs and editable site copy live here.

You should generally NOT need to edit components.

Replace any value marked REPLACE_ME before launch.

Images:
  Place image files in /public/images (see subfolders).
  Reference them here as "/images/filename.jpg".
  If a referenced file doesn't exist yet, the site shows a
  tasteful placeholder instead of a broken image — nothing
  breaks, so you can fill these in gradually.
============================================================
*/

export interface NavLink {
  label: string;
  href: string;
}

export interface Announcement {
  enabled: boolean;
  text: string;
}

export interface Hero {
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  /** Leave empty to fall back to urls.etsy */
  secondaryCtaHref: string;
}

export interface BrandStatement {
  eyebrow: string;
  heading: string;
  body: string;
}

export interface EditorialStory {
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  caption: string;
}

export interface Craftsmanship {
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  caption: string;
}

export interface Category {
  id: string;
  label: string;
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: string;
  currency: string;
  category: string;
  images: string[];
  imageAlt: string;
  purchaseUrl: string;
  purchaseLabel: string;
  featured: boolean;
  soldOut: boolean;
  /** e.g. "Made to order" — leave empty to show no badge. Never invent this. */
  badge: string;
  materials: string[];
  dimensions: string;
  care: string;
  madeToOrderNote: string;
}

export interface AboutProcessStep {
  label: string;
  description: string;
  image?: string;
}

export interface About {
  eyebrow: string;
  heading: string;
  body: string[];
  portrait: string;
  portraitAlt: string;
  ownerName: string;
  ownerBio: string;
  process: AboutProcessStep[];
}

export interface CustomOrderStep {
  number: string;
  title: string;
  description: string;
}

export interface CustomOrders {
  enabled: boolean;
  eyebrow: string;
  heading: string;
  description: string;
  acceptedItems: string[];
  steps: CustomOrderStep[];
  timeline: string;
  contactLabel: string;
  contactUrl: string;
}

export interface Review {
  quote: string;
  author: string;
  source: string;
  rating: number;
  product?: string;
}

export interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

export interface SocialGalleryItem {
  image: string;
  alt: string;
  href?: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
  };
  urls: {
    website: string;
    etsy: string;
    instagram: string;
    tiktok: string;
    email: string;
  };
  nav: {
    primary: NavLink[];
  };
  announcement: Announcement;
  hero: Hero;
  brandStatement: BrandStatement;
  editorialStory: EditorialStory;
  craftsmanship: Craftsmanship;
  marquee: {
    enabled: boolean;
    text: string;
  };
  categories: Category[];
  products: Product[];
  about: About;
  customOrders: CustomOrders;
  reviews: Review[];
  faq: FaqItem[];
  socialGallery: SocialGalleryItem[];
  footer: {
    note: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Charmberry Crochets",
    shortName: "Charmberry",
    tagline: "Made to be noticed.",
    description:
      "Charmberry Crochets creates handmade crochet pieces with bold details, playful design, and a style that feels anything but ordinary.",
  },

  urls: {
    website: "https://charmberrycrochets.com", // e.g. "https://charmberrycrochets.com"
    etsy: "https://www.etsy.com/shop/CharmberryStudiosss",
    instagram: "https://www.instagram.com/charmberry.studios/",
    tiktok: "https://www.tiktok.com/@charmberry.studios?_r=1&_t=ZS-98d7fbOOGOb",
    email: "",
  },

  nav: {
    primary: [
      { label: "Shop", href: "/shop" },
      { label: "About", href: "/about" },
      { label: "Custom Orders", href: "/custom-orders" },
      { label: "FAQ", href: "/faq" },
    ],
  },

  announcement: {
    enabled: true,
    text: "Handmade crochet, made in small batches ♡",
  },

  hero: {
    eyebrow: "Charmberry Crochets",
    heading: "made slowly,\nloved for a long time.",
    description:
      "Every piece starts as a ball of yarn and a lot of patience — worked by hand, one stitch at a time.",
    image: "/images/hero.jpg",
    imageAlt: "A handmade Charmberry Crochets piece",
    primaryCtaLabel: "Shop crochet",
    primaryCtaHref: "/shop",
    secondaryCtaLabel: "Visit Etsy",
    secondaryCtaHref: "",
  },

  brandStatement: {
    eyebrow: "The idea",
    heading: "Made by hand, kept close.",
    body: "Nothing here is mass-produced. Each piece is worked one stitch at a time, which is most of the reason no two ever turn out quite the same.",
  },

  editorialStory: {
    eyebrow: "In progress",
    heading: "Slow, on purpose.",
    body: "REPLACE_ME — a short paragraph about how pieces come together, in your own words.",
    image: "/images/studio-01.jpg",
    imageAlt: "Work in progress, yarn and crochet hook",
    caption: "detail / work in progress",
  },

  craftsmanship: {
    eyebrow: "Handmade",
    heading: "Every piece, worked by hand.",
    body: "REPLACE_ME — describe materials, technique, or sourcing here only if you can state it factually.",
    image: "/images/craftsmanship.jpg",
    imageAlt: "Close-up detail of hand-crocheted stitches",
    caption: "detail / hand-crocheted stitching",
  },

  marquee: {
    enabled: true,
    text: "HANDMADE CROCHET  •  SMALL BATCH  •  CHARMBERRY  •  MADE TO ORDER  •",
  },

  categories: [
    { id: "lightstick-holders", label: "Lightstick Holders", image: "/images/categories/lightstick-holders.jpg" },
    { id: "bags", label: "Bags", image: "/images/categories/bags.jpg" },
    { id: "hats", label: "Hats", image: "/images/categories/hats.jpg" },
    { id: "amigurumi", label: "Amigurumi", image: "/images/categories/amigurumi.jpg" },
    { id: "keychains", label: "Keychains", image: "/images/categories/keychains.jpg" },
  ],

  // REPLACE_ME — sample products so the shop, product pages, and grids render.
  // Replace name / price / images / description for each real item, or delete
  // and add your own using the same shape.
  products: [
    {
      id: "p1",
      slug: "REPLACE_ME-lightstick-holder-1",
      name: "REPLACE_ME — Lightstick Holder",
      shortDescription: "REPLACE_ME",
      description: "REPLACE_ME",
      price: "REPLACE_ME",
      currency: "USD",
      category: "lightstick-holders",
      images: ["/images/products/lightstick-holder-1-01.jpg", "/images/products/lightstick-holder-1-02.jpg"],
      imageAlt: "REPLACE_ME product photo",
      purchaseUrl: "https://www.etsy.com/shop/CharmberryStudiosss",
      purchaseLabel: "Buy on Etsy",
      featured: true,
      soldOut: false,
      badge: "",
      materials: [],
      dimensions: "",
      care: "",
      madeToOrderNote: "",
    },
    {
      id: "p2",
      slug: "REPLACE_ME-tote-bag-1",
      name: "REPLACE_ME — Crochet Tote",
      shortDescription: "REPLACE_ME",
      description: "REPLACE_ME",
      price: "REPLACE_ME",
      currency: "USD",
      category: "bags",
      images: ["/images/products/tote-bag-1-01.jpg"],
      imageAlt: "REPLACE_ME product photo",
      purchaseUrl: "https://www.etsy.com/shop/CharmberryStudiosss",
      purchaseLabel: "Buy on Etsy",
      featured: true,
      soldOut: false,
      badge: "",
      materials: [],
      dimensions: "",
      care: "",
      madeToOrderNote: "",
    },
    {
      id: "p3",
      slug: "REPLACE_ME-bucket-hat-1",
      name: "REPLACE_ME — Bucket Hat",
      shortDescription: "REPLACE_ME",
      description: "REPLACE_ME",
      price: "REPLACE_ME",
      currency: "USD",
      category: "hats",
      images: ["/images/products/bucket-hat-1-01.jpg"],
      imageAlt: "REPLACE_ME product photo",
      purchaseUrl: "https://www.etsy.com/shop/CharmberryStudiosss",
      purchaseLabel: "Buy on Etsy",
      featured: true,
      soldOut: false,
      badge: "",
      materials: [],
      dimensions: "",
      care: "",
      madeToOrderNote: "",
    },
    {
      id: "p4",
      slug: "REPLACE_ME-amigurumi-1",
      name: "REPLACE_ME — Amigurumi Friend",
      shortDescription: "REPLACE_ME",
      description: "REPLACE_ME",
      price: "REPLACE_ME",
      currency: "USD",
      category: "amigurumi",
      images: ["/images/products/amigurumi-1-01.jpg"],
      imageAlt: "REPLACE_ME product photo",
      purchaseUrl: "https://www.etsy.com/shop/CharmberryStudiosss",
      purchaseLabel: "Buy on Etsy",
      featured: false,
      soldOut: false,
      badge: "",
      materials: [],
      dimensions: "",
      care: "",
      madeToOrderNote: "",
    },
    {
      id: "p5",
      slug: "REPLACE_ME-keychain-1",
      name: "REPLACE_ME — Mini Keychain",
      shortDescription: "REPLACE_ME",
      description: "REPLACE_ME",
      price: "REPLACE_ME",
      currency: "USD",
      category: "keychains",
      images: ["/images/products/keychain-1-01.jpg"],
      imageAlt: "REPLACE_ME product photo",
      purchaseUrl: "https://www.etsy.com/shop/CharmberryStudiosss",
      purchaseLabel: "Buy on Etsy",
      featured: false,
      soldOut: true,
      badge: "",
      materials: [],
      dimensions: "",
      care: "",
      madeToOrderNote: "",
    },
    {
      id: "p6",
      slug: "REPLACE_ME-lightstick-holder-2",
      name: "REPLACE_ME — Lightstick Holder No. 2",
      shortDescription: "REPLACE_ME",
      description: "REPLACE_ME",
      price: "REPLACE_ME",
      currency: "USD",
      category: "lightstick-holders",
      images: ["/images/products/lightstick-holder-2-01.jpg"],
      imageAlt: "REPLACE_ME product photo",
      purchaseUrl: "https://www.etsy.com/shop/CharmberryStudiosss",
      purchaseLabel: "Buy on Etsy",
      featured: false,
      soldOut: false,
      badge: "",
      materials: [],
      dimensions: "",
      care: "",
      madeToOrderNote: "",
    },
    {
      id: "p7",
      slug: "REPLACE_ME-tote-bag-2",
      name: "REPLACE_ME — Crochet Bag No. 2",
      shortDescription: "REPLACE_ME",
      description: "REPLACE_ME",
      price: "REPLACE_ME",
      currency: "USD",
      category: "bags",
      images: ["/images/products/tote-bag-2-01.jpg"],
      imageAlt: "REPLACE_ME product photo",
      purchaseUrl: "https://www.etsy.com/shop/CharmberryStudiosss",
      purchaseLabel: "Buy on Etsy",
      featured: false,
      soldOut: false,
      badge: "",
      materials: [],
      dimensions: "",
      care: "",
      madeToOrderNote: "",
    },
  ],

  about: {
    eyebrow: "Behind the stitches",
    heading: "REPLACE_ME",
    body: ["REPLACE_ME", "REPLACE_ME"],
    portrait: "/images/about.jpg",
    portraitAlt: "REPLACE_ME",
    ownerName: "REPLACE_ME",
    ownerBio: "REPLACE_ME",
    process: [],
  },

  customOrders: {
    enabled: true,
    eyebrow: "Custom orders",
    heading: "Have something in mind?",
    description:
      "REPLACE_ME — describe what kinds of custom pieces you take on, and any limits (colors, characters, timelines, etc).",
    acceptedItems: [],
    steps: [
      {
        number: "01",
        title: "Tell me your idea",
        description: "REPLACE_ME",
      },
      {
        number: "02",
        title: "We agree on the details",
        description: "REPLACE_ME",
      },
      {
        number: "03",
        title: "Your piece is handmade",
        description: "REPLACE_ME",
      },
    ],
    timeline: "REPLACE_ME",
    contactLabel: "Message on Etsy",
    contactUrl: "https://www.etsy.com/shop/CharmberryStudiosss",
  },

  // Leave empty to hide the reviews section entirely. Never fabricate reviews.
  reviews: [],

  faq: [
    {
      category: "Ordering",
      question: "How do I place an order?",
      answer: "REPLACE_ME",
    },
    {
      category: "Ordering",
      question: "Can I change or cancel my order?",
      answer: "REPLACE_ME",
    },
    {
      category: "Custom Orders",
      question: "Do you take custom requests?",
      answer: "REPLACE_ME",
    },
    {
      category: "Shipping",
      question: "How long does shipping take?",
      answer: "REPLACE_ME",
    },
    {
      category: "Care",
      question: "How do I take care of my crochet piece?",
      answer: "REPLACE_ME",
    },
  ],

  // Leave empty to hide "From the studio" section.
  socialGallery: [
    { image: "/images/studio-01.jpg", alt: "REPLACE_ME", href: "" },
    { image: "/images/studio-02.jpg", alt: "REPLACE_ME", href: "" },
    { image: "/images/studio-03.jpg", alt: "REPLACE_ME", href: "" },
    { image: "/images/studio-04.jpg", alt: "REPLACE_ME", href: "" },
  ],

  footer: {
    note: "Small batch crochet, made by hand.",
  },

  seo: {
    title: "Charmberry Crochets — Handmade Crochet",
    description:
      "REPLACE_ME — a one or two sentence description of Charmberry Crochets for search results.",
    ogImage: "/images/og.jpg",
  },
};
