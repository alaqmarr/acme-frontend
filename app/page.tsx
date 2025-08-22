import HeroSection from '@/components/HeroSection';  // Changed to default import
import { fetchBrands, fetchCategories, fetchProducts } from '@/utils/api';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import BrandsSlider from '@/components/BrandSlider';
import Home from '@/components/Home';

export default async function Page() {
  const products = await fetchProducts();
  const brands = await fetchBrands();
  const categories = await fetchCategories();


  return (
    <>
    <Home brands={brands} categories={categories} />
    </>
  );
}