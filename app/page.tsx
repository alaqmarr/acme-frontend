import { fetchBrands, fetchCategories, fetchProducts } from '@/utils/api';
import Home from '@/components/Home';

export default async function Page() {
  const products = await fetchProducts();
  const brands = await fetchBrands();
  const categories = await fetchCategories();


  return (
    <>
    <Home brands={brands} categories={categories} products={products} />
    </>
  );
}