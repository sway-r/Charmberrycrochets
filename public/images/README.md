# Images

Drop real photos in here using the filenames below (referenced from
`src/data/siteConfig.ts`). Nothing breaks if a file is missing — the site
shows a small placeholder box instead — so you can add these gradually.

Recommended: JPG, ideally 2000px on the long edge, portrait/4:5-ish crops
for product & hero shots work best with the current layout.

| File | Used for |
|---|---|
| `hero.jpg` | Homepage hero |
| `about.jpg` | About page portrait |
| `craftsmanship.jpg` | Homepage craftsmanship detail |
| `studio-01.jpg` … `studio-04.jpg` | Editorial story + "From the studio" gallery |
| `og.jpg` | Social share preview image (1200×630) |
| `categories/lightstick-holders.jpg`, `bags.jpg`, `hats.jpg`, `amigurumi.jpg`, `keychains.jpg` | Shop-by-category tiles |
| `products/*.jpg` | Product photos — filenames and slugs are set per product in `siteConfig.ts` |

To add a real product photo, either match the filename already referenced
for that product in `siteConfig.ts`, or add your own filename and update
the `images: [...]` array for that product.
