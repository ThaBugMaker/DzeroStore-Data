// index.js — main entrypoint for DzeroStore-Data
// Exports all core data for the app and provides helper to resolve image URLs

import products from "./data/products.json";
import categories from "./data/categories.json";
import store from "./config/store.json";
import seo from "./config/seo.json";

// TODO: Implement theme.js later
// import theme from './config/theme.js'

// TODO: Implement offers.json later
// import offers from './data/offers.json'

/**
 * Helper: automatically prepend repoUrl from store.json to all product image paths
 * Returns full data object ready to use in the app
 */
export function withRepoBase() {
  const baseUrl = store.repoUrl || "";

  const productsWithFullPaths = products.map((p) => ({
    ...p,
    variants: p.variants.map((v) => ({
      ...v,
      image: baseUrl + v.image,
    })),
  }));

  return {
    products: productsWithFullPaths,
    categories,
    store,
    seo,
    // theme, // TODO
    // offers // TODO
  };
}

/**
 * Default export: raw data without modifying image paths
 * App can still call withRepoBase() to resolve URLs
 */
export default {
  products,
  categories,
  store,
  seo,
  // theme, // TODO
  // offers // TODO
};

console.log(withRepoBase().products);
