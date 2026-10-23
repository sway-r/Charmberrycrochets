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
  variations: { name: string; options: { name: string; soldOut: boolean }[] }[];
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
    logo: string;
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
    logo: "/images/brand-logo.jpg",
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
      shortDescription: "This beanie is crocheted with soft yarn, cat ears, and little stars that dangle from each side. It’s warm, cozy, and playful, something to wear on a chilly day, to a festival, or just when you want a touch of fun in your outfit. Each one is made TO ORDER (etsy makes me put a quantity available) with care💗",
      description: "This beanie is crocheted with soft yarn, cat ears, and little stars that dangle from each side. It’s warm, cozy, and playful, something to wear on a chilly day, to a festival, or just when you want a touch of fun in your outfit. Each one is made TO ORDER (etsy makes me put a quantity available) with care💗\n\nFAQ:\nWashing instructions:\n- Please do not use any heat on this yarn! Only hand wash and air dry.\nCustomizations:\n- I can combine colors and modify the size or length of the hat as needed! Please message me and I will get back to you in just a couple of hours.\n- This hat fits head circumferences of anywhere from 19 inches to 25, the yarn is super soft and stretchy!\nWhen will my order arrive?\n- Please give me 2-4 days to make an order (depending on how many orders are ahead of yours). Shipping is completely out of my hands!",
      price: "$25.00", currency: "USD", category: "hats",
      variations: [{"name":"Primary color","options":[{"name":"White","soldOut":false},{"name":"Pink","soldOut":false},{"name":"Purple","soldOut":false},{"name":"Blue","soldOut":false},{"name":"Brown","soldOut":false}]}],
      images: ["/images/products/crochet-cat-ear-beanie-stars-01.jpg", "/images/products/crochet-cat-ear-beanie-stars-02.jpg", "/images/products/crochet-cat-ear-beanie-stars-03.jpg", "/images/products/crochet-cat-ear-beanie-stars-04.jpg", "/images/products/crochet-cat-ear-beanie-stars-05.jpg"],
      imageAlt: "Hand-crocheted cat-ear beanie with dangling star charms",
      purchaseUrl: "https://www.etsy.com/listing/4429210861/crochet-cat-ear-beanie-with-star-charms", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Made to order", materials: [],
      dimensions: "Fits head circumferences approximately 19–25 inches.",
      care: "Hand wash and air dry. Do not use heat.",
      madeToOrderNote: "Allow about 2–4 days for making, depending on the order queue.",
    },
    {
      id: "p2", slug: "kpop-lightstick-holder-half", name: "KPOP Lightstick Crochet Holder (Half)",
      shortDescription: "A handmade crochet holder designed to fit your Kpop lightstick perfectly! Made to order in any color you choose, so it can match your favorite group, aesthetic, or outfit🫶🏻 Cute, functional, and great for concerts, storage, or display☺️",
      description: "A handmade crochet holder designed to fit your Kpop lightstick perfectly! Made to order in any color you choose, so it can match your favorite group, aesthetic, or outfit🫶🏻 Cute, functional, and great for concerts, storage, or display☺️\nEach holder is carefully crafted from my original design and one of a kind!💕",
      price: "$15.00", currency: "USD", category: "lightstick-holders",
      variations: [{"name":"Primary color","options":[{"name":"1","soldOut":false},{"name":"2","soldOut":false},{"name":"3","soldOut":false},{"name":"4","soldOut":false},{"name":"5","soldOut":false},{"name":"6","soldOut":false},{"name":"7","soldOut":false},{"name":"8","soldOut":false},{"name":"9","soldOut":false},{"name":"10","soldOut":false},{"name":"11","soldOut":false},{"name":"12","soldOut":false},{"name":"13","soldOut":false},{"name":"14","soldOut":false},{"name":"15","soldOut":false},{"name":"16","soldOut":false},{"name":"17","soldOut":false},{"name":"18","soldOut":false},{"name":"19","soldOut":false},{"name":"20","soldOut":false},{"name":"21","soldOut":false},{"name":"22","soldOut":false},{"name":"23","soldOut":false},{"name":"24","soldOut":false},{"name":"25","soldOut":false},{"name":"26","soldOut":false}]}],
      images: ["/images/products/kpop-lightstick-holder-half-01.jpg", "/images/products/kpop-lightstick-holder-half-02.jpg", "/images/products/kpop-lightstick-holder-half-03.jpg", "/images/products/kpop-lightstick-holder-half-04.jpg", "/images/products/kpop-lightstick-holder-half-05.jpg", "/images/products/kpop-lightstick-holder-half-06.jpg", "/images/products/kpop-lightstick-holder-half-07.jpg", "/images/products/kpop-lightstick-holder-half-08.jpg", "/images/products/kpop-lightstick-holder-half-09.jpg"],
      imageAlt: "Half-style handmade crochet holder for a K-pop lightstick",
      purchaseUrl: "https://www.etsy.com/listing/4496869921/kpop-lightstick-crochet-holder-half", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Made to order", materials: [], dimensions: "", care: "",
      madeToOrderNote: "Choose the color on Etsy before ordering.",
    },
    {
      id: "p3", slug: "soft-crochet-scarf", name: "Soft Crochet Scarf",
      shortDescription: "Stay warm and adorable all winter with this handmade crochet scarf! 💗🧶",
      description: "Stay warm and adorable all winter with this handmade crochet scarf! 💗🧶\n• Length: 74 inches\n• Width: 7 inches\n• Ruffle fringe: 4 inches\nMade with VERY soft yarn, it perfectly covers the bottom of your face for extra warmth and comfort. Choose your color: pink, purple, blue, white, or brown! The perfect cozy accessory or gift!L,,m",
      price: "$60.00", currency: "USD", category: "scarves",
      variations: [{"name":"Primary color","options":[{"name":"White","soldOut":false},{"name":"Purple","soldOut":false},{"name":"Pink","soldOut":false},{"name":"Blue","soldOut":false},{"name":"Brown","soldOut":false}]}],
      images: ["/images/products/soft-crochet-scarf-01.jpg", "/images/products/soft-crochet-scarf-02.jpg", "/images/products/soft-crochet-scarf-03.jpg", "/images/products/soft-crochet-scarf-04.jpg", "/images/products/soft-crochet-scarf-05.jpg"],
      imageAlt: "Soft handmade crochet scarf with ruffle fringe",
      purchaseUrl: "https://www.etsy.com/listing/4430650025/soft-crochet-scarf", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Made to order", materials: [],
      dimensions: "Length: 74 in · Width: 7 in · Fringe: 4 in",
      care: "", madeToOrderNote: "Choose pink, purple, blue, white, or brown on Etsy.",
    },
    {
      id: "p4", slug: "hanging-star-kpop-hat", name: "Hanging Star Crochet Hat | K-Pop Inspired",
      shortDescription: "Handmade crochet beanie inspired by the song “DUH!” by P1Harmony, featuring dangling star details and bold lettering. Cozy, cute, and perfect for K-pop fans ✨",
      description: "Handmade crochet beanie inspired by the song “DUH!” by P1Harmony, featuring dangling star details and bold lettering. Cozy, cute, and perfect for K-pop fans ✨",
      price: "$25.00", currency: "USD", category: "hats",
      variations: [],
      images: ["/images/products/hanging-star-kpop-hat-01.jpg", "/images/products/hanging-star-kpop-hat-02.jpg", "/images/products/hanging-star-kpop-hat-03.jpg"],
      imageAlt: "Crochet beanie with hanging star details and bold lettering",
      purchaseUrl: "https://www.etsy.com/listing/4430672590/hanging-star-crochet-hat-k-pop-inspired", purchaseLabel: "View on Etsy",
      featured: true, soldOut: false, badge: "", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p5", slug: "soft-kpop-crochet-hat", name: "Crochet Soft Hat | K-Pop Inspired",
      shortDescription: "Handmade crochet beanie inspired by the song “DUH!” by P1Harmony, featuring bold lettering and a cozy fit. ‼️without hanging stars‼️A simple, stylish accessory for any K-pop fan.",
      description: "Handmade crochet beanie inspired by the song “DUH!” by P1Harmony, featuring bold lettering and a cozy fit. ‼️without hanging stars‼️A simple, stylish accessory for any K-pop fan.",
      price: "$25.00", currency: "USD", category: "hats",
      variations: [],
      images: ["/images/products/soft-kpop-crochet-hat-01.jpg", "/images/products/soft-kpop-crochet-hat-02.jpg", "/images/products/soft-kpop-crochet-hat-03.jpg"],
      imageAlt: "Crochet beanie with bold lettering and no hanging stars",
      purchaseUrl: "https://www.etsy.com/listing/4430664661/crochet-soft-hat-k-pop-inspired", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p6", slug: "fluffy-bunny-removable-dress", name: "Crochet Soft Fluffy Bunny in Removable Dress",
      shortDescription: "Cute crochet bunny in purple dress ready to ship!",
      description: "Cute crochet bunny in purple dress ready to ship!\nPerfect as a gift for kids, teens, or young adults🤍",
      price: "$40.00", currency: "USD", category: "amigurumi",
      variations: [],
      images: ["/images/products/fluffy-bunny-removable-dress-01.jpg", "/images/products/fluffy-bunny-removable-dress-02.jpg", "/images/products/fluffy-bunny-removable-dress-03.jpg", "/images/products/fluffy-bunny-removable-dress-04.jpg", "/images/products/fluffy-bunny-removable-dress-05.jpg"],
      imageAlt: "Crochet bunny wearing a removable purple dress",
      purchaseUrl: "https://www.etsy.com/listing/4520402062/crochet-soft-fluffy-bunny-in-removable", purchaseLabel: "View on Etsy",
      featured: true, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p7", slug: "ruffle-heart-bag-purple-tulips", name: "Crochet Ruffle Heart Bag with Purple 3D Tulips",
      shortDescription: "A handmade crochet heart shaped bag in light purple, detailed with white ruffle trim and 3D purple tulips for a dreamy, floral touch. Perfect for adding a sweet statement to any outfit or gifting to someone special💓☺️",
      description: "A handmade crochet heart shaped bag in light purple, detailed with white ruffle trim and 3D purple tulips for a dreamy, floral touch. Perfect for adding a sweet statement to any outfit or gifting to someone special💓☺️",
      price: "$40.00", currency: "USD", category: "bags",
      variations: [],
      images: ["/images/products/ruffle-heart-bag-purple-tulips-01.jpg", "/images/products/ruffle-heart-bag-purple-tulips-02.jpg", "/images/products/ruffle-heart-bag-purple-tulips-03.jpg", "/images/products/ruffle-heart-bag-purple-tulips-04.jpg", "/images/products/ruffle-heart-bag-purple-tulips-05.jpg", "/images/products/ruffle-heart-bag-purple-tulips-06.jpg"],
      imageAlt: "Light purple crochet heart bag with white ruffle trim and purple tulips",
      purchaseUrl: "https://www.etsy.com/listing/4454588630/crochet-ruffle-heart-bag-with-purple-3d", purchaseLabel: "View on Etsy",
      featured: true, soldOut: false, badge: "", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p8", slug: "star-bag-minisode-3-tomorrow", name: "Granny-Square Star Bag — Peach and Neutral Colorway",
      shortDescription: "Etsy listing title: “Crochet Lined Star Bag–Granny Square Star Purse.”\n\nThis Crochet Star Bag is made from multiple granny-square stars sewn together for a cute boho look, fully lined with a black-butterfly pattern on a white background (see second photo). It’s ready to ship in the color shown, lightweight but sturdy, and sized to fit your daily essentials—perfect for everyday wear, gifting, festivals, or anyone who loves unique handmade crochet accessories. This color way references TXTs Minisode 3: Tomorrow album! A perfect gift for MOAs and K-Pop lovers:)",
      description: "Etsy listing title: “Crochet Lined Star Bag–Granny Square Star Purse.”\n\nThis Crochet Star Bag is made from multiple granny-square stars sewn together for a cute boho look, fully lined with a black-butterfly pattern on a white background (see second photo). It’s ready to ship in the color shown, lightweight but sturdy, and sized to fit your daily essentials—perfect for everyday wear, gifting, festivals, or anyone who loves unique handmade crochet accessories. This color way references TXTs Minisode 3: Tomorrow album! A perfect gift for MOAs and K-Pop lovers:)",
      price: "$45.00", currency: "USD", category: "bags",
      variations: [{"name":"Colorway","options":[{"name":"Minisode 3: Tomorrow — TXT album reference","soldOut":false}]}],
      images: ["/images/products/star-bag-minisode-3-tomorrow-01.jpg", "/images/products/star-bag-minisode-3-tomorrow-02.jpg"],
      imageAlt: "Granny-square crochet star bag in peach and neutral tones",
      purchaseUrl: "https://www.etsy.com/listing/4430666206/crochet-lined-star-baggranny-square-star", purchaseLabel: "View on Etsy",
      featured: true, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p9", slug: "star-bag-blue-hour", name: "Granny-Square Star Bag — Blue and Lavender Colorway",
      shortDescription: "Etsy listing title: “Crochet Lined Star Bag–Granny Square Star Purse.”\n\nThis Crochet Star Bag is made from multiple granny-square stars sewn together for a cute boho look, fully lined with a black-butterfly pattern on a white background (see second photo). It’s ready to ship in the color shown, lightweight but sturdy, and sized to fit your daily essentials—perfect for everyday wear, gifting, festivals, or anyone who loves unique handmade crochet accessories. This color way references TXTs Minisode 1: Blue Hour album! A perfect gift for MOAs and K-Pop lovers:)",
      description: "Etsy listing title: “Crochet Lined Star Bag–Granny Square Star Purse.”\n\nThis Crochet Star Bag is made from multiple granny-square stars sewn together for a cute boho look, fully lined with a black-butterfly pattern on a white background (see second photo). It’s ready to ship in the color shown, lightweight but sturdy, and sized to fit your daily essentials—perfect for everyday wear, gifting, festivals, or anyone who loves unique handmade crochet accessories. This color way references TXTs Minisode 1: Blue Hour album! A perfect gift for MOAs and K-Pop lovers:)",
      price: "$45.00", currency: "USD", category: "bags",
      variations: [{"name":"Colorway","options":[{"name":"Minisode 1: Blue Hour — TXT album reference","soldOut":false}]}],
      images: ["/images/products/star-bag-blue-hour-01.jpg", "/images/products/star-bag-blue-hour-02.jpg"],
      imageAlt: "Granny-square crochet star bag in blue and lavender tones",
      purchaseUrl: "https://www.etsy.com/listing/4430660071/crochet-lined-star-baggranny-square-star", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p10", slug: "star-bag-thursdays-child", name: "Granny-Square Star Bag — Red and Tan Colorway",
      shortDescription: "Etsy listing title: “Crochet Lined Star Bag–Granny Square Star Purse.”\n\nThis Crochet Star Bag is made from multiple granny-square stars sewn together for a cute boho look, fully lined with a black-butterfly pattern on a white background (see second photo). It’s ready to ship in the color shown, lightweight but sturdy, and sized to fit your daily essentials—perfect for everyday wear, gifting, festivals, or anyone who loves unique handmade crochet accessories. This color way references TXTs Minisode 2: Thursday&#39;s Child album! A perfect gift for MOAs and K-Pop lovers:)",
      description: "Etsy listing title: “Crochet Lined Star Bag–Granny Square Star Purse.”\n\nThis Crochet Star Bag is made from multiple granny-square stars sewn together for a cute boho look, fully lined with a black-butterfly pattern on a white background (see second photo). It’s ready to ship in the color shown, lightweight but sturdy, and sized to fit your daily essentials—perfect for everyday wear, gifting, festivals, or anyone who loves unique handmade crochet accessories. This color way references TXTs Minisode 2: Thursday&#39;s Child album! A perfect gift for MOAs and K-Pop lovers:)",
      price: "$45.00", currency: "USD", category: "bags",
      variations: [{"name":"Colorway","options":[{"name":"Minisode 2: Thursday’s Child — TXT album reference","soldOut":false}]}],
      images: ["/images/products/star-bag-thursdays-child-01.jpg", "/images/products/star-bag-thursdays-child-02.jpg"],
      imageAlt: "Granny-square crochet star bag in red and tan tones",
      purchaseUrl: "https://www.etsy.com/listing/4430658285/crochet-lined-star-baggranny-square-star", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p11", slug: "star-bag-temptation", name: "Granny-Square Star Bag — Green and Pink Colorway",
      shortDescription: "Etsy listing title: “Crochet Lined Star Bag–Granny Square Star Purse.”\n\nThis Crochet Star Bag is made from multiple granny-square stars sewn together for a cute boho look, fully lined with a black-butterfly pattern on a white background (see second photo). It’s ready to ship in the color shown, lightweight but sturdy, and sized to fit your daily essentials—perfect for everyday wear, gifting, festivals, or anyone who loves unique handmade crochet accessories. This color way references TXTs The Name Chapter: Temptation album! A perfect gift for MOAs and K-Pop lovers:)",
      description: "Etsy listing title: “Crochet Lined Star Bag–Granny Square Star Purse.”\n\nThis Crochet Star Bag is made from multiple granny-square stars sewn together for a cute boho look, fully lined with a black-butterfly pattern on a white background (see second photo). It’s ready to ship in the color shown, lightweight but sturdy, and sized to fit your daily essentials—perfect for everyday wear, gifting, festivals, or anyone who loves unique handmade crochet accessories. This color way references TXTs The Name Chapter: Temptation album! A perfect gift for MOAs and K-Pop lovers:)",
      price: "$45.00", currency: "USD", category: "bags",
      variations: [{"name":"Colorway","options":[{"name":"The Name Chapter: Temptation — TXT album reference","soldOut":false}]}],
      images: ["/images/products/star-bag-temptation-01.jpg", "/images/products/star-bag-temptation-02.jpg"],
      imageAlt: "Granny-square crochet star bag in green and pink tones",
      purchaseUrl: "https://www.etsy.com/listing/4430657349/crochet-lined-star-baggranny-square-star", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p12", slug: "hello-kitty-pink-christmas-tree", name: "Pink Holiday Tree Cat Plush",
      shortDescription: "Etsy listing title: “Crochet Hello Kitty Plush—Pink Christmas Tree Outfit.”\n\nThis adorable crochet Hello Kitty is dressed in a pink Christmas tree outfit, complete with kawaii holiday details for the cutest festive look. Soft, handmade, and ready to ship, she makes the perfect holiday gift, collectible plush, or seasonal decor piece for anyone who loves kawaii, Christmas, or crochet amigurumi.",
      description: "Etsy listing title: “Crochet Hello Kitty Plush—Pink Christmas Tree Outfit.”\n\nThis adorable crochet Hello Kitty is dressed in a pink Christmas tree outfit, complete with kawaii holiday details for the cutest festive look. Soft, handmade, and ready to ship, she makes the perfect holiday gift, collectible plush, or seasonal decor piece for anyone who loves kawaii, Christmas, or crochet amigurumi.",
      price: "$40.00", currency: "USD", category: "amigurumi",
      variations: [],
      images: ["/images/products/hello-kitty-pink-christmas-tree-01.jpg", "/images/products/hello-kitty-pink-christmas-tree-02.jpg", "/images/products/hello-kitty-pink-christmas-tree-03.jpg"],
      imageAlt: "Crochet cat plush in a pink Christmas tree outfit",
      purchaseUrl: "https://www.etsy.com/listing/4430668814/crochet-hello-kitty-plushpink-christmas", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p13", slug: "grape-cow-amigurumi", name: "Crochet Grape Cow Amigurumi with Grape Bag",
      shortDescription: "Crochet Grape Cow with removable grape bag made ready to ship!🤍",
      description: "Crochet Grape Cow with removable grape bag made ready to ship!🤍",
      price: "$40.00", currency: "USD", category: "amigurumi",
      variations: [],
      images: ["/images/products/grape-cow-amigurumi-01.jpg", "/images/products/grape-cow-amigurumi-02.jpg", "/images/products/grape-cow-amigurumi-03.jpg", "/images/products/grape-cow-amigurumi-04.jpg"],
      imageAlt: "Crochet grape cow with a removable grape bag",
      purchaseUrl: "https://www.etsy.com/listing/4520404999/crochet-grape-cow-amigurumi-with-grape", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p14", slug: "bunny-removable-axolotl-costume", name: "Crochet Fluffy Soft Bunny Amigurumi in Removable Axolotl Costume",
      shortDescription: "Crochet bunny in a removable axolotl costume! Perfect for a gift for kids, teens, and young adults🤍",
      description: "Crochet bunny in a removable axolotl costume! Perfect for a gift for kids, teens, and young adults🤍\nMade ready to ship!\nPlease note that the hoodie was made a little too big so there is slack/space at the back of the bunnies head!",
      price: "$40.00", currency: "USD", category: "amigurumi",
      variations: [],
      images: ["/images/products/bunny-removable-axolotl-costume-01.jpg", "/images/products/bunny-removable-axolotl-costume-02.jpg", "/images/products/bunny-removable-axolotl-costume-03.jpg", "/images/products/bunny-removable-axolotl-costume-04.jpg", "/images/products/bunny-removable-axolotl-costume-05.jpg", "/images/products/bunny-removable-axolotl-costume-06.jpg", "/images/products/bunny-removable-axolotl-costume-07.jpg", "/images/products/bunny-removable-axolotl-costume-08.jpg", "/images/products/bunny-removable-axolotl-costume-09.jpg"],
      imageAlt: "Crochet bunny wearing a removable axolotl costume",
      purchaseUrl: "https://www.etsy.com/listing/4520397372/crochet-fluffy-soft-bunny-amigurumu-in", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p15", slug: "rainbow-scale-dino-amigurumi", name: "Crochet Dino Amigurumi",
      shortDescription: "Crochet Dino with rainbow scales made ready to ship!",
      description: "Crochet Dino with rainbow scales made ready to ship!\nPerfect gift for any kid, boys, and teens🤍",
      price: "$30.00", currency: "USD", category: "amigurumi",
      variations: [],
      images: ["/images/products/rainbow-scale-dino-amigurumi-01.jpg", "/images/products/rainbow-scale-dino-amigurumi-02.jpg", "/images/products/rainbow-scale-dino-amigurumi-03.jpg", "/images/products/rainbow-scale-dino-amigurumi-04.jpg", "/images/products/rainbow-scale-dino-amigurumi-05.jpg"],
      imageAlt: "Crochet dinosaur plush with rainbow scales",
      purchaseUrl: "https://www.etsy.com/listing/4520405172/crochet-dino-amigurumi", purchaseLabel: "View on Etsy",
      featured: false, soldOut: false, badge: "Ready to ship", materials: [], dimensions: "", care: "", madeToOrderNote: "",
    },
    {
      id: "p16", slug: "crochet-lily-shoulder-bag", name: "Crochet Lily Shoulder Bag",
      shortDescription: "Handmade with love, these crochet lily bags come in dreamy purple and pink shades that make any outfit pop. Lightweight yet sturdy, each bag features a unique flower inspired design that’s both practical and eye catching, perfect for everyday use or as a thoughtful gift.",
      description: "Handmade with love, these crochet lily bags come in dreamy purple and pink shades that make any outfit pop. Lightweight yet sturdy, each bag features a unique flower inspired design that’s both practical and eye catching, perfect for everyday use or as a thoughtful gift.",
      price: "$60.00", currency: "USD", category: "bags",
      variations: [{"name":"Primary color","options":[{"name":"Pink","soldOut":false},{"name":"Purple","soldOut":false}]}],
      images: ["/images/products/crochet-lily-shoulder-bag-01.jpg", "/images/products/crochet-lily-shoulder-bag-02.jpg", "/images/products/crochet-lily-shoulder-bag-03.jpg", "/images/products/crochet-lily-shoulder-bag-04.jpg"],
      imageAlt: "Crochet lily shoulder bag in pink or purple",
      purchaseUrl: "https://www.etsy.com/listing/4430660806/crochet-lily-shoulder-bag", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Made to order", materials: [], dimensions: "", care: "",
      madeToOrderNote: "Choose the color on Etsy before ordering.",
    },
    {
      id: "p17", slug: "beaded-ruffle-star-bag", name: "Crochet Star Bag with Beads and Ruffles — Lined, Zipper",
      shortDescription: "Each bag is handmade by me, so there may be small differences between each one, making every bag unique ♡",
      description: "Each bag is handmade by me, so there may be small differences between each one, making every bag unique ♡\n\n⭐ Fully lined inside\n⭐ Zipper closure\n⭐ Will hold heavy things and NOT stretch\n⭐ Comfortable, lined shoulder strap\n\nIf you have any questions, feel free to message me! ♡",
      price: "$60.00", currency: "USD", category: "bags",
      variations: [{"name":"Primary color","options":[{"name":"Yellow","soldOut":true},{"name":"Purple","soldOut":true},{"name":"Pink","soldOut":true},{"name":"Custom (dm me)","soldOut":false}]}],
      images: ["/images/products/beaded-ruffle-star-bag-01.jpg", "/images/products/beaded-ruffle-star-bag-02.jpg", "/images/products/beaded-ruffle-star-bag-03.jpg", "/images/products/beaded-ruffle-star-bag-04.jpg", "/images/products/beaded-ruffle-star-bag-05.jpg", "/images/products/beaded-ruffle-star-bag-06.jpg", "/images/products/beaded-ruffle-star-bag-07.jpg", "/images/products/beaded-ruffle-star-bag-08.jpg", "/images/products/beaded-ruffle-star-bag-09.jpg", "/images/products/beaded-ruffle-star-bag-10.jpg", "/images/products/beaded-ruffle-star-bag-11.jpg", "/images/products/beaded-ruffle-star-bag-12.jpg", "/images/products/beaded-ruffle-star-bag-13.jpg", "/images/products/beaded-ruffle-star-bag-14.jpg"],
      imageAlt: "Crochet star bag with beads, ruffles, lining, and a zipper",
      purchaseUrl: "https://www.etsy.com/listing/4540483150/crochet-star-bag-w-beads-and-ruffles", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Handmade", materials: [], dimensions: "", care: "",
      madeToOrderNote: "Choose the color on Etsy before ordering.",
    },
    {
      id: "p18", slug: "kpop-lightstick-crochet-holder", name: "KPOP Lightstick Crochet Holder",
      shortDescription: "A handmade crochet holder designed to fit your Kpop lightstick perfectly! Made to order in any color you choose, so it can match your favorite group, aesthetic, or outfit. Cute, functional, and great for concerts, storage, or display☺️ Each holder is carefully crafted from my original design and one of a kind💞",
      description: "A handmade crochet holder designed to fit your Kpop lightstick perfectly! Made to order in any color you choose, so it can match your favorite group, aesthetic, or outfit. Cute, functional, and great for concerts, storage, or display☺️ Each holder is carefully crafted from my original design and one of a kind💞",
      price: "$16.00", currency: "USD", category: "lightstick-holders",
      variations: [{"name":"Color","options":[{"name":"1","soldOut":false},{"name":"2","soldOut":false},{"name":"3","soldOut":false},{"name":"4","soldOut":false},{"name":"5","soldOut":false},{"name":"6","soldOut":false},{"name":"7","soldOut":false},{"name":"8","soldOut":false},{"name":"9","soldOut":false},{"name":"10","soldOut":false},{"name":"11","soldOut":false},{"name":"12","soldOut":false},{"name":"13","soldOut":false},{"name":"14","soldOut":false},{"name":"15","soldOut":false},{"name":"16","soldOut":false},{"name":"17","soldOut":false},{"name":"18","soldOut":false},{"name":"19","soldOut":false},{"name":"20","soldOut":false},{"name":"21","soldOut":false},{"name":"22","soldOut":false},{"name":"23","soldOut":false},{"name":"24","soldOut":false},{"name":"25","soldOut":false},{"name":"26","soldOut":false}]}],
      images: ["/images/products/kpop-lightstick-crochet-holder-01.jpg", "/images/products/kpop-lightstick-crochet-holder-02.jpg", "/images/products/kpop-lightstick-crochet-holder-03.jpg", "/images/products/kpop-lightstick-crochet-holder-04.jpg", "/images/products/kpop-lightstick-crochet-holder-05.jpg", "/images/products/kpop-lightstick-crochet-holder-06.jpg", "/images/products/kpop-lightstick-crochet-holder-07.jpg", "/images/products/kpop-lightstick-crochet-holder-08.jpg", "/images/products/kpop-lightstick-crochet-holder-09.jpg", "/images/products/kpop-lightstick-crochet-holder-10.jpg", "/images/products/kpop-lightstick-crochet-holder-11.jpg"],
      imageAlt: "Crochet holder for a K-pop lightstick",
      purchaseUrl: "https://www.etsy.com/listing/4454582834/kpop-lightstick-crochet-holder", purchaseLabel: "Choose a color on Etsy",
      featured: true, soldOut: false, badge: "Made to order", materials: [], dimensions: "", care: "",
      madeToOrderNote: "Choose the color on Etsy before ordering.",
    },
    {
      id: "p19", slug: "hanging-star-bag-keychain", name: "Hanging Star Bag Crochet Keychain",
      shortDescription: "Cute handmade crochet hanging star keychain ⭐ Perfect for adding a little charm to your keys, bags, backpacks, or purses! Each star is handmade with care, so every one is slightly unique ♡",
      description: "Cute handmade crochet hanging star keychain ⭐ Perfect for adding a little charm to your keys, bags, backpacks, or purses! Each star is handmade with care, so every one is slightly unique ♡",
      price: "$15.00", currency: "USD", category: "keychains",
      variations: [{"name":"Primary color","options":[{"name":"Yellow","soldOut":false},{"name":"Purple","soldOut":false},{"name":"Blue","soldOut":false},{"name":"Pink","soldOut":false}]}],
      images: ["/images/products/hanging-star-bag-keychain-01.jpg", "/images/products/hanging-star-bag-keychain-02.jpg", "/images/products/hanging-star-bag-keychain-03.jpg", "/images/products/hanging-star-bag-keychain-04.jpg", "/images/products/hanging-star-bag-keychain-05.jpg"],
      imageAlt: "Crochet hanging star keychain in several colors",
      purchaseUrl: "https://www.etsy.com/listing/4540469235/hanging-star-bag-crochet-keychain", purchaseLabel: "Choose a color on Etsy",
      featured: false, soldOut: false, badge: "", materials: [], dimensions: "", care: "",
      madeToOrderNote: "Choose a color on Etsy before ordering.",
    },
    {
      id: "p20", slug: "crochet-jellyfish-keychain", name: "Crochet Jellyfish Keychain",
      shortDescription: "These handmade jellyfish keychains are the perfect mix of cute and unique! Each one is carefully crocheted with soft yarn and decorated with beads for an extra touch of sparkle. Available in pink, purple, and blue, they make a fun ocean inspired accessory for your keys, backpack, or purse, and a thoughtful gift for any sea life lover.",
      description: "These handmade jellyfish keychains are the perfect mix of cute and unique! Each one is carefully crocheted with soft yarn and decorated with beads for an extra touch of sparkle. Available in pink, purple, and blue, they make a fun ocean inspired accessory for your keys, backpack, or purse, and a thoughtful gift for any sea life lover.",
      price: "$17.00", currency: "USD", category: "keychains",
      variations: [{"name":"Primary color","options":[{"name":"Pink","soldOut":false},{"name":"Purple","soldOut":false},{"name":"Blue","soldOut":false}]}],
      images: ["/images/products/crochet-jellyfish-keychain-01.jpg", "/images/products/crochet-jellyfish-keychain-02.jpg", "/images/products/crochet-jellyfish-keychain-03.jpg"],
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
