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
    etsy: "https://www.etsy.com/shop/CharmberryCrochets",
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
    { id: "scarves", label: "Scarves" },
    { id: "amigurumi", label: "Amigurumi", image: "/images/categories/amigurumi.jpg" },
    { id: "keychains", label: "Keychains", image: "/images/categories/keychains.jpg" },
  ],

  products: [
    {
      id: "p1", slug: "crochet-cat-ear-beanie-stars", name: "Crochet Cat Ear Beanie with Star Charms",
      shortDescription: "Soft, stretchy crochet beanie with cat ears and dangling stars.",
      description: "A cozy, playful beanie for chilly days, festivals, or adding a fun detail to an outfit. Available in a range of colors; the seller can combine colors and adjust the hat size or length.",
      price: "$25.00", currency: "USD", category: "hats",
      images: ["https://i.etsystatic.com/63669427/r/il/e11fba/7581107201/il_794xN.7581107201_akcd.jpg"],
      imageAlt: "Hand-crocheted cat-ear beanie with dangling star details",
      purchaseUrl: "https://www.etsy.com/listing/4429210861/crochet-cat-ear-beanie-with-star-charms", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Made to order", materials: [],
      dimensions: "Fits head circumferences approximately 19–25 inches.",
      care: "Hand wash and air dry. Do not use heat.",
      madeToOrderNote: "Allow about 2–4 days for making, depending on the order queue.",
    },
    {
      id: "p2", slug: "kpop-lightstick-holder-half", name: "KPOP Lightstick Crochet Holder (Half)",
      shortDescription: "A handmade half-style crochet holder for a K-pop lightstick.",
      description: "Made to order in a chosen color to suit a favorite group, outfit, or aesthetic. Designed for concerts, storage, or display.",
      price: "$15.00", currency: "USD", category: "lightstick-holders",
      images: ["https://i.etsystatic.com/63669427/r/il/f46b82/7966645260/il_794xN.7966645260_117t.jpg"],
      imageAlt: "Crochet half-holder for a K-pop lightstick",
      purchaseUrl: "https://www.etsy.com/listing/4496869921/kpop-lightstick-crochet-holder-half", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Made to order", materials: [], dimensions: "", care: "",
      madeToOrderNote: "Choose the color on Etsy before ordering.",
    },
    {
      id: "p3", slug: "soft-crochet-scarf", name: "Soft Crochet Scarf",
      shortDescription: "A very soft handmade scarf with ruffle fringe.",
      description: "A cozy winter accessory that can cover the lower part of the face for added warmth. Available in pink, purple, blue, white, or brown.",
      price: "$60.00", currency: "USD", category: "scarves",
      images: ["https://i.etsystatic.com/63669427/r/il/1b6e6e/7581114929/il_794xN.7581114929_9j0y.jpg"],
      imageAlt: "Soft crocheted scarf with fringed ends",
      purchaseUrl: "https://www.etsy.com/listing/4430650025/soft-crochet-scarf", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Made to order", materials: [],
      dimensions: "Length: 74 in · Width: 7 in · Fringe: 4 in",
      care: "", madeToOrderNote: "Choose pink, purple, blue, white, or brown on Etsy.",
    },
    {
      id: "p4", slug: "hanging-star-kpop-hat", name: "Hanging Star Crochet Hat | K-Pop Inspired",
      shortDescription: "A crochet beanie with bold lettering and dangling stars.",
      description: "A cozy, playful hat inspired by P1Harmony’s “DUH!” and made for K-pop fans. The listing photos show a cream hat with purple lettering.",
      price: "$25.00", currency: "USD", category: "hats",
      images: ["https://i.etsystatic.com/63669427/r/il/019ac6/7540368668/il_794xN.7540368668_h5wp.jpg"],
      imageAlt: "Cream crochet hat with purple lettering and hanging stars",
      purchaseUrl: "https://www.etsy.com/listing/4430672590/hanging-star-crochet-hat-k-pop-inspired", purchaseLabel: "View on Etsy",
      featured: true, soldOut: false, badge: "", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p5", slug: "soft-kpop-crochet-hat", name: "Crochet Soft Hat | K-Pop Inspired",
      shortDescription: "A cozy crochet beanie with bold P1Harmony-inspired lettering.",
      description: "A simple, stylish K-pop-inspired hat. This version has no hanging stars.",
      price: "$25.00", currency: "USD", category: "hats",
      images: ["https://i.etsystatic.com/63669427/r/il/160592/7540358498/il_794xN.7540358498_k4yg.jpg"],
      imageAlt: "Soft crochet hat with bold lettering and no hanging stars",
      purchaseUrl: "https://www.etsy.com/listing/4430664661/crochet-soft-hat-k-pop-inspired", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p6", slug: "fluffy-bunny-removable-dress", name: "Crochet Soft Fluffy Bunny in Removable Dress",
      shortDescription: "A ready-to-ship crochet bunny wearing a purple dress.",
      description: "A soft handmade bunny with a removable purple outfit, suggested as a gift for kids, teens, and young adults.",
      price: "$40.00", currency: "USD", category: "amigurumi",
      images: ["https://i.etsystatic.com/63669427/r/il/e7c9cb/8125732006/il_794xN.8125732006_cal2.jpg"],
      imageAlt: "White crochet bunny wearing a removable purple dress",
      purchaseUrl: "https://www.etsy.com/listing/4520402062/crochet-soft-fluffy-bunny-in-removable", purchaseLabel: "View on Etsy",
      featured: true, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p7", slug: "ruffle-heart-bag-purple-tulips", name: "Crochet Ruffle Heart Bag with Purple 3D Tulips",
      shortDescription: "A lavender heart-shaped bag with raised purple tulips.",
      description: "A handmade heart-shaped crochet bag with white ruffle trim and three-dimensional tulip details.",
      price: "$40.00", currency: "USD", category: "bags",
      images: ["https://i.etsystatic.com/63669427/r/il/03c690/7737394507/il_794xN.7737394507_ivf7.jpg"],
      imageAlt: "Lavender crochet heart bag with purple tulips and white ruffle trim",
      purchaseUrl: "https://www.etsy.com/listing/4454588630/crochet-ruffle-heart-bag-with-purple-3d", purchaseLabel: "View on Etsy",
      featured: true, soldOut: false, badge: "", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p8", slug: "star-bag-minisode-3-tomorrow", name: "Crochet Star Bag — Minisode 3: Tomorrow",
      shortDescription: "A lined granny-square star bag in the Minisode 3 colorway.",
      description: "Made from crochet granny-square stars and lined with white fabric patterned with black butterflies. This ready-to-ship colorway references TXT’s “Minisode 3: Tomorrow.”",
      price: "$45.00", currency: "USD", category: "bags",
      images: ["https://i.etsystatic.com/63669427/r/il/9ce69e/7540339992/il_794xN.7540339992_ihge.jpg"],
      imageAlt: "Granny-square crochet star bag in the Minisode 3 colorway",
      purchaseUrl: "https://www.etsy.com/listing/4430666206/crochet-lined-star-baggranny-square-star", purchaseLabel: "View on Etsy",
      featured: true, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p9", slug: "star-bag-blue-hour", name: "Crochet Star Bag — Minisode 1: Blue Hour",
      shortDescription: "A lined granny-square star bag in the Blue Hour colorway.",
      description: "A lightweight, sturdy crochet bag made from granny-square stars and lined with white fabric patterned with black butterflies. This ready-to-ship colorway references TXT’s “Minisode 1: Blue Hour.”",
      price: "$45.00", currency: "USD", category: "bags",
      images: ["https://i.etsystatic.com/63669427/r/il/6b8921/7540344162/il_794xN.7540344162_n622.jpg"],
      imageAlt: "Granny-square crochet star bag in the Blue Hour colorway",
      purchaseUrl: "https://www.etsy.com/listing/4430660071/crochet-lined-star-baggranny-square-star", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p10", slug: "star-bag-thursdays-child", name: "Crochet Star Bag — Minisode 2: Thursday’s Child",
      shortDescription: "A lined granny-square star bag in the Thursday’s Child colorway.",
      description: "A lightweight, sturdy crochet bag made from granny-square stars and lined with white fabric patterned with black butterflies. This ready-to-ship colorway references TXT’s “Minisode 2: Thursday’s Child.”",
      price: "$45.00", currency: "USD", category: "bags",
      images: ["https://i.etsystatic.com/63669427/r/il/c38a74/7540336274/il_794xN.7540336274_lpyo.jpg"],
      imageAlt: "Granny-square crochet star bag in the Thursday’s Child colorway",
      purchaseUrl: "https://www.etsy.com/listing/4430658285/crochet-lined-star-baggranny-square-star", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p11", slug: "star-bag-temptation", name: "Crochet Star Bag — The Name Chapter: Temptation",
      shortDescription: "A lined granny-square star bag in the Temptation colorway.",
      description: "A lightweight, sturdy crochet bag made from granny-square stars and lined with white fabric patterned with black butterflies. This ready-to-ship colorway references TXT’s “The Name Chapter: Temptation.”",
      price: "$45.00", currency: "USD", category: "bags",
      images: ["https://i.etsystatic.com/63669427/r/il/5febfc/7588270755/il_794xN.7588270755_83bc.jpg"],
      imageAlt: "Granny-square crochet star bag in the Temptation colorway",
      purchaseUrl: "https://www.etsy.com/listing/4430657349/crochet-lined-star-baggranny-square-star", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p12", slug: "hello-kitty-pink-christmas-tree", name: "Crochet Hello Kitty Plush — Pink Christmas Tree Outfit",
      shortDescription: "A handmade Hello Kitty plush in a festive pink outfit.",
      description: "A ready-to-ship crochet plush in a pink Christmas-tree outfit with kawaii holiday details. A seasonal gift, collectible, or decoration for crochet and Hello Kitty fans.",
      price: "$40.00", currency: "USD", category: "amigurumi",
      images: ["https://i.etsystatic.com/63669427/r/il/ca5afa/7588293817/il_794xN.7588293817_ctz9.jpg"],
      imageAlt: "Crochet Hello Kitty plush wearing a pink Christmas tree outfit",
      purchaseUrl: "https://www.etsy.com/listing/4430668814/crochet-hello-kitty-plushpink-christmas", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p13", slug: "grape-cow-amigurumi", name: "Crochet Grape Cow Amigurumi with Grape Bag",
      shortDescription: "A ready-to-ship grape-themed crochet cow with a removable bag.",
      description: "A handmade amigurumi cow with a removable grape-themed crossbody bag.",
      price: "$40.00", currency: "USD", category: "amigurumi",
      images: ["https://i.etsystatic.com/63669427/r/il/fa6e94/8125771996/il_794xN.8125771996_lo11.jpg"],
      imageAlt: "Crochet grape cow plush with a removable grape bag",
      purchaseUrl: "https://www.etsy.com/listing/4520404999/crochet-grape-cow-amigurumi-with-grape", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p14", slug: "bunny-removable-axolotl-costume", name: "Crochet Bunny in Removable Axolotl Costume",
      shortDescription: "A fluffy crochet bunny wearing a removable axolotl costume.",
      description: "A handmade bunny in a removable axolotl hoodie. The seller notes the hood is slightly oversized and leaves extra space at the back of the bunny’s head.",
      price: "$40.00", currency: "USD", category: "amigurumi",
      images: ["https://i.etsystatic.com/63669427/r/il/8f7c04/8173616607/il_794xN.8173616607_1hi8.jpg"],
      imageAlt: "Crochet bunny plush wearing a pink removable axolotl hoodie",
      purchaseUrl: "https://www.etsy.com/listing/4520397372/crochet-fluffy-soft-bunny-amigurumu-in", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p15", slug: "rainbow-scale-dino-amigurumi", name: "Crochet Dino Amigurumi",
      shortDescription: "A ready-to-ship crochet dinosaur with rainbow scales.",
      description: "A colorful handmade dinosaur plush, suggested by the seller as a gift for kids and teens.",
      price: "$30.00", currency: "USD", category: "amigurumi",
      images: ["https://i.etsystatic.com/63669427/r/il/204f0b/8125760624/il_794xN.8125760624_g58c.jpg"],
      imageAlt: "Crochet dinosaur plush with rainbow scales",
      purchaseUrl: "https://www.etsy.com/listing/4520405172/crochet-dino-amigurumi", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p16", slug: "crochet-lily-shoulder-bag", name: "Crochet Lily Shoulder Bag",
      shortDescription: "A flower-inspired shoulder bag in purple and pink tones.",
      description: "A lightweight yet sturdy crochet bag with a flower-inspired design. Color options pictured include purple and pink.",
      price: "$60.00", currency: "USD", category: "bags",
      images: ["https://i.etsystatic.com/63669427/r/il/795866/7540312356/il_794xN.7540312356_2ijn.jpg"],
      imageAlt: "Crochet lily flower shoulder bags in purple and pink",
      purchaseUrl: "https://www.etsy.com/listing/4430660806/crochet-lily-shoulder-bag", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Made to order", materials: [], dimensions: "", care: "",
      madeToOrderNote: "Choose the color on Etsy before ordering.",
    },
    {
      id: "p17", slug: "beaded-ruffle-star-bag", name: "Crochet Star Bag with Beads and Ruffles",
      shortDescription: "A beaded crochet star bag with ruffle trim, lining, and zipper.",
      description: "Each bag is handmade, so small differences make each one unique. It is fully lined, closes with a zipper, is designed to hold heavier items without stretching, and has a comfortable lined shoulder strap. The listing photos show a white and yellow colorway.",
      price: "$60.00", currency: "USD", category: "bags",
      images: ["https://i.etsystatic.com/63669427/r/il/b2fe1e/8271858512/il_794xN.8271858512_vint.jpg"],
      imageAlt: "Beaded crochet star bag with yellow ruffle edging",
      purchaseUrl: "https://www.etsy.com/listing/4540483150/crochet-star-bag-w-beads-and-ruffles", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Handmade", materials: [], dimensions: "", care: "",
      madeToOrderNote: "Choose the color on Etsy before ordering.",
    },
    {
      id: "p18", slug: "kpop-lightstick-crochet-holder", name: "KPOP Lightstick Crochet Holder",
      shortDescription: "A made-to-order crochet holder designed for a K-pop lightstick.",
      description: "Choose a color to match a favorite group, outfit, or aesthetic. The handmade holder is designed for concerts, storage, or display.",
      price: "$16.00", currency: "USD", category: "lightstick-holders",
      images: ["https://i.etsystatic.com/63669427/r/il/b9d0c8/7689412956/il_794xN.7689412956_fgzd.jpg"],
      imageAlt: "Crochet holder carrying a K-pop lightstick",
      purchaseUrl: "https://www.etsy.com/listing/4454582834/kpop-lightstick-crochet-holder", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Made to order", materials: [], dimensions: "", care: "",
      madeToOrderNote: "Choose the color on Etsy before ordering.",
    },
    {
      id: "p19", slug: "hanging-star-bag-keychain", name: "Hanging Star Bag Crochet Keychain",
      shortDescription: "A handmade star keychain for keys, bags, backpacks, or purses.",
      description: "Each crochet star is handmade and may vary slightly. A small colorful charm for a bag or key ring.",
      price: "$15.00", currency: "USD", category: "keychains",
      images: ["https://i.etsystatic.com/63669427/r/il/2e8a83/8319800227/il_794xN.8319800227_ri36.jpg"],
      imageAlt: "Crochet hanging star bag keychain",
      purchaseUrl: "https://www.etsy.com/listing/4540469235/hanging-star-bag-crochet-keychain", purchaseLabel: "Choose a color on Etsy",
      featured: false, soldOut: false, badge: "", materials: [], dimensions: "", care: "",
      madeToOrderNote: "Choose a color on Etsy before ordering.",
    },
    {
      id: "p20", slug: "crochet-jellyfish-keychain", name: "Crochet Jellyfish Keychain",
      shortDescription: "A handmade crochet jellyfish with bead details.",
      description: "Available in pink, purple, and blue. Add a playful ocean-inspired touch to keys, a backpack, or a purse.",
      price: "$17.00", currency: "USD", category: "keychains",
      images: ["https://i.etsystatic.com/63669427/r/il/01ad63/7540321300/il_794xN.7540321300_bim3.jpg"],
      imageAlt: "Crochet jellyfish keychain with bead details",
      purchaseUrl: "https://www.etsy.com/listing/4430655317/crochet-jellyfish-keychain", purchaseLabel: "Choose a color on Etsy",
      featured: false, soldOut: false, badge: "Made to order", materials: [], dimensions: "", care: "",
      madeToOrderNote: "Choose pink, purple, or blue on Etsy before ordering.",
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
    contactUrl: "https://www.etsy.com/shop/CharmberryCrochets",
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
