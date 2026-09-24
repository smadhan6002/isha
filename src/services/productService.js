import { initialProducts } from '../data/products';

const STORAGE_KEY = 'isha_products';

export const productService = {
  // Initialize with sample data if empty
  init: () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts));
    }
  },

  getProducts: () => {
    productService.init();
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return initialProducts;
    }
  },

  getProductById: (id) => {
    const products = productService.getProducts();
    return products.find(p => p.id === id);
  },

  addProduct: (product) => {
    const products = productService.getProducts();
    const newProduct = {
      ...product,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([newProduct, ...products]));
    return newProduct;
  },

  updateProduct: (id, updatedFields) => {
    const products = productService.getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedFields, updated_at: new Date().toISOString() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
      return products[index];
    }
    return null;
  },

  deleteProduct: (id) => {
    const products = productService.getProducts();
    const filteredProducts = products.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredProducts));
    return true;
  }
};
