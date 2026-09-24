import imgTurmeric from '../assets/products/Turmeric .jpg';
import imgKumkum from '../assets/products/Kumkam .jpg';
import imgOil from '../assets/products/Pooja oil .jpg';
import imgSambrani from '../assets/products/Cub Sambrani.jpg';
import imgAgarbathi from '../assets/products/Agarabath.jpg';

export const initialProducts = [
  {
    id: '1',
    name: 'ISHA Turmeric Powder',
    category: 'Turmeric',
    short_description: 'Pure and authentic turmeric powder for daily pooja.',
    description: 'Sourced from the finest farms, our ISHA Turmeric Powder ensures purity and vibrancy for all your sacred rituals. Perfect for daily offerings and auspicious ceremonies.',
    pack_size: '100g',
    price: null,
    image_url: imgTurmeric,
    featured: true,
  },
  {
    id: '2',
    name: 'ISHA Kumkum',
    category: 'Kumkum',
    short_description: 'Vibrant maroon kumkum made from pure turmeric.',
    description: 'Crafted following traditional methods, our ISHA Kumkum offers a deep, rich color and pure composition, completely safe for skin and essential for every pooja.',
    pack_size: '50g',
    price: null,
    image_url: imgKumkum,
    featured: true,
  },
  {
    id: '3',
    name: 'Premium Pooja Oil',
    category: 'Pooja Oil',
    short_description: 'Special blend of 5 sacred oils for deepam.',
    description: 'A divine blend of sesame, coconut, castor, mahua, and neem oils. Creates a long-lasting, steady flame that purifies the atmosphere and brings positivity.',
    pack_size: '500ml',
    price: null,
    image_url: imgOil,
    featured: true,
  },
  {
    id: '4',
    name: 'Herbal Cup Sambrani',
    category: 'Sambrani',
    short_description: 'Natural resin sambrani cups for a divine ambiance.',
    description: 'Experience the traditional temple fragrance at home. These natural resin cups emit a pure, uplifting aroma that clears negative energy.',
    pack_size: '12 Cups',
    price: null,
    image_url: imgSambrani,
    featured: false,
  },
  {
    id: '5',
    name: 'Chandan Agarbathi',
    category: 'Agarbathi',
    short_description: 'Premium sandalwood incense sticks.',
    description: 'Hand-rolled incense sticks infused with pure sandalwood oil. Creates a calming environment perfect for meditation and daily prayers.',
    pack_size: '100 Sticks',
    price: null,
    image_url: imgAgarbathi,
    featured: false,
  },
];
