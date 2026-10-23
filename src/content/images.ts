export type ImageTreatment = 'editorial' | 'product' | 'portrait'

export type ImageSlot = {
  id: string
  /** Served from /images/<id>.webp — overwrite that file to replace. */
  src: string
  alt: string
  aspect: `${number}/${number}`
  treatment: ImageTreatment
  /** What photo the founder should put here. */
  brief: string
}

const slot = (
  id: string,
  aspect: ImageSlot['aspect'],
  treatment: ImageTreatment,
  brief: string,
  alt = brief,
): ImageSlot => ({ id, src: `/images/${id}.webp`, aspect, treatment, brief, alt })

export const imageSlots: Record<string, ImageSlot> = {
  'hero-photo-1': slot('hero-photo-1', '4/5', 'product', 'Product photo: a bag', 'A structured leather bag product shot.'),
  'hero-photo-2': slot('hero-photo-2', '4/5', 'product', 'Product photo: sneakers', 'A pair of sneakers on a plain background.'),
  'hero-photo-3': slot('hero-photo-3', '4/5', 'product', 'Product photo: skincare', 'A skincare bottle product shot.'),
  'hero-seller': slot('hero-seller', '4/5', 'editorial', 'Seller packing or posting from a phone'),
  'step-1': slot('step-1', '4/3', 'editorial', 'Publishing a catalogue at a desk'),
  'step-2': slot('step-2', '4/3', 'editorial', 'Browsing and forking on a phone'),
  'step-3': slot('step-3', '4/3', 'editorial', 'Sharing a store link, phone in hand'),
  'step-4': slot('step-4', '4/3', 'editorial', 'A parcel being shipped'),
  'seller-section': slot('seller-section', '4/5', 'editorial', 'Seller with phone and boxes'),
  'wholesaler-section': slot('wholesaler-section', '4/5', 'editorial', 'Warehouse shelves or a stock check'),
  'storefront-1': slot('storefront-1', '1/1', 'product', 'Product shot inside storefront mockup', 'Storefront product photo.'),
  'storefront-2': slot('storefront-2', '1/1', 'product', 'Second product shot for storefront mockup', 'Storefront product photo.'),
  'usecase-social': slot('usecase-social', '4/5', 'editorial', 'A social seller filming or posting'),
  'usecase-shop': slot('usecase-shop', '4/5', 'editorial', 'A small shop owner at the counter'),
  'usecase-creator': slot('usecase-creator', '4/5', 'editorial', 'A creator or community lead at work'),
  'usecase-dropship': slot('usecase-dropship', '4/5', 'editorial', 'A dropshipper managing several catalogues'),
  'usecase-brand': slot('usecase-brand', '4/5', 'editorial', 'A brand founder among finished goods'),
  'category-fashion': slot('category-fashion', '1/1', 'editorial', 'Fashion category tile'),
  'category-beauty': slot('category-beauty', '1/1', 'editorial', 'Beauty category tile'),
  'category-electronics': slot('category-electronics', '1/1', 'editorial', 'Electronics category tile'),
  'category-home': slot('category-home', '1/1', 'editorial', 'Home goods category tile'),
  'category-food': slot('category-food', '1/1', 'editorial', 'Food and drink category tile'),
  'category-accessories': slot('category-accessories', '1/1', 'editorial', 'Accessories category tile'),
  'portrait-01': slot('portrait-01', '1/1', 'portrait', 'Portrait: testimonial subject'),
  'portrait-02': slot('portrait-02', '1/1', 'portrait', 'Portrait: testimonial subject'),
  'portrait-03': slot('portrait-03', '1/1', 'portrait', 'Portrait: team member'),
  'portrait-04': slot('portrait-04', '1/1', 'portrait', 'Portrait: team member'),
  'about-wide': slot('about-wide', '16/9', 'editorial', 'The team or workspace'),
  'blog-01': slot('blog-01', '16/9', 'editorial', 'Article cover'),
  'blog-02': slot('blog-02', '16/9', 'editorial', 'Article cover'),
  'blog-03': slot('blog-03', '16/9', 'editorial', 'Article cover'),
  'blog-04': slot('blog-04', '16/9', 'editorial', 'Article cover'),
  'blog-05': slot('blog-05', '16/9', 'editorial', 'Article cover'),
  'blog-06': slot('blog-06', '16/9', 'editorial', 'Article cover'),
}

// Twelve generic product shots for repo, fork and cart mockups (colour).
for (let i = 1; i <= 12; i += 1) {
  const id = `product-${String(i).padStart(2, '0')}`
  imageSlots[id] = slot(id, '1/1', 'product', 'Product shot on light grey', 'Catalogue product photo.')
}

export function getSlot(id: string): ImageSlot {
  const found = imageSlots[id]
  if (!found) throw new Error(`Unknown image slot: ${id}`)
  return found
}
