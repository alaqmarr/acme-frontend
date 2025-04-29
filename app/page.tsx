import HeroSection from '@/components/HeroSection';  // Changed to default import
import { fetchBrands, fetchProducts } from '@/utils/api';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import BrandsSlider from '@/components/BrandSlider';

export default async function Home() {
  const products = await fetchProducts();
  const brands = await fetchBrands();

  return (
    <>
      <HeroSection />
      <BrandsSlider brands={brands} />
      <FeaturedProducts products={products} />
      <AboutSection />
      <Testimonials />
      <Newsletter />
    </>
  );
}