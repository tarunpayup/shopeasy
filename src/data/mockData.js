// src/data/mockData.js
// Fake data so the app works without a server.
// Emoji are used as pictures so students need no image files or internet.

export const CATEGORIES = [
  { id: 'electronics', name: 'Electronics', emoji: '🎧' },
  { id: 'fashion', name: 'Fashion', emoji: '👗' },
  { id: 'home', name: 'Home', emoji: '🛋️' },
  { id: 'beauty', name: 'Beauty', emoji: '💄' },
  { id: 'sports', name: 'Sports', emoji: '⚽' },
  { id: 'books', name: 'Books', emoji: '📚' },
];

export const PRODUCTS = [
  // ---------- Electronics ----------
  {
    id: 'p1', categoryId: 'electronics', name: 'Wireless Headphones', emoji: '🎧',
    price: 2499, oldPrice: 3499, rating: 4.6, reviews: 1280, featured: true,
    description: 'Over-ear Bluetooth headphones with deep bass, active noise reduction and a 30-hour battery. Folds flat for easy carrying.',
  },
  {
    id: 'p2', categoryId: 'electronics', name: 'Smart Watch Series 5', emoji: '⌚',
    price: 3999, oldPrice: 5499, rating: 4.4, reviews: 860, featured: true,
    description: 'Track steps, heart rate and sleep. AMOLED display, 7-day battery and water resistance up to 50 metres.',
  },
  {
    id: 'p3', categoryId: 'electronics', name: 'Bluetooth Speaker', emoji: '🔊',
    price: 1799, oldPrice: 2299, rating: 4.3, reviews: 540, featured: false,
    description: 'Portable 20W speaker with 360° sound, splash-proof body and 12 hours of playtime.',
  },
  // ---------- Fashion ----------
  {
    id: 'p4', categoryId: 'fashion', name: 'Classic White Sneakers', emoji: '👟',
    price: 2199, oldPrice: 2999, rating: 4.5, reviews: 970, featured: true,
    description: 'Lightweight everyday sneakers with a cushioned sole and breathable lining. Goes with every outfit.',
  },
  {
    id: 'p5', categoryId: 'fashion', name: 'Denim Jacket', emoji: '🧥',
    price: 2899, oldPrice: 3799, rating: 4.2, reviews: 410, featured: false,
    description: 'Mid-wash denim jacket with a relaxed fit, metal buttons and two chest pockets.',
  },
  {
    id: 'p6', categoryId: 'fashion', name: 'Leather Handbag', emoji: '👜',
    price: 3499, oldPrice: 4499, rating: 4.7, reviews: 320, featured: true,
    description: 'Spacious faux-leather handbag with a zip closure, inner pockets and a detachable shoulder strap.',
  },
  // ---------- Home ----------
  {
    id: 'p7', categoryId: 'home', name: 'Table Lamp', emoji: '💡',
    price: 899, oldPrice: 1199, rating: 4.1, reviews: 260, featured: false,
    description: 'Warm-light bedside lamp with a fabric shade and touch dimmer.',
  },
  {
    id: 'p8', categoryId: 'home', name: 'Cushion Cover Set', emoji: '🛋️',
    price: 1299, oldPrice: 1799, rating: 4.4, reviews: 690, featured: false,
    description: 'Set of 5 soft velvet cushion covers in matching maroon and cream tones.',
  },
  {
    id: 'p9', categoryId: 'home', name: 'Ceramic Vase', emoji: '🏺',
    price: 649, oldPrice: 899, rating: 4.0, reviews: 150, featured: false,
    description: 'Hand-finished ceramic vase that suits fresh and dried flowers alike.',
  },
  // ---------- Beauty ----------
  {
    id: 'p10', categoryId: 'beauty', name: 'Matte Lipstick', emoji: '💄',
    price: 499, oldPrice: 699, rating: 4.5, reviews: 1500, featured: true,
    description: 'Long-lasting matte lipstick in a rich berry shade. Smooth, non-drying finish.',
  },
  {
    id: 'p11', categoryId: 'beauty', name: 'Eau de Parfum', emoji: '🧴',
    price: 1999, oldPrice: 2599, rating: 4.6, reviews: 730, featured: false,
    description: 'A warm floral fragrance with notes of rose and amber. 50 ml bottle.',
  },
  {
    id: 'p12', categoryId: 'beauty', name: 'Skincare Kit', emoji: '🧼',
    price: 1499, oldPrice: 1999, rating: 4.3, reviews: 480, featured: false,
    description: 'Cleanser, toner and moisturiser in travel sizes. Suitable for all skin types.',
  },
  // ---------- Sports ----------
  {
    id: 'p13', categoryId: 'sports', name: 'Football (Size 5)', emoji: '⚽',
    price: 799, oldPrice: 999, rating: 4.4, reviews: 390, featured: false,
    description: 'Machine-stitched match football with a durable cover and excellent bounce.',
  },
  {
    id: 'p14', categoryId: 'sports', name: 'Yoga Mat', emoji: '🧘',
    price: 999, oldPrice: 1399, rating: 4.5, reviews: 820, featured: true,
    description: '6 mm anti-slip yoga mat with carrying strap. Easy to clean and lightweight.',
  },
  {
    id: 'p15', categoryId: 'sports', name: 'Dumbbell Set (10 kg)', emoji: '🏋️',
    price: 2499, oldPrice: 2999, rating: 4.2, reviews: 270, featured: false,
    description: 'Pair of adjustable dumbbells with rubber-coated plates and a secure grip.',
  },
  // ---------- Books ----------
  {
    id: 'p16', categoryId: 'books', name: 'Bestseller Novel Bundle', emoji: '📚',
    price: 699, oldPrice: 999, rating: 4.7, reviews: 1100, featured: false,
    description: 'A bundle of three award-winning novels. Perfect for weekend reading.',
  },
  {
    id: 'p17', categoryId: 'books', name: 'Daily Planner', emoji: '📓',
    price: 349, oldPrice: 499, rating: 4.3, reviews: 640, featured: false,
    description: 'Undated hard-cover planner with weekly goals, habit tracker and notes pages.',
  },
  {
    id: 'p18', categoryId: 'books', name: 'Fountain Pen', emoji: '🖋️',
    price: 1299, oldPrice: 1699, rating: 4.6, reviews: 210, featured: false,
    description: 'Smooth-writing fountain pen with a steel nib, gift box and two ink cartridges.',
  },
];