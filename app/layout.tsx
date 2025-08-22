import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { fetchCategories, fetchProducts } from '@/utils/api';
import Header from '@/components/Header';
import Scripts from '@/components/Scripts';
import Foot from '@/components/Foot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ACME Store - Premium Products for Everyone',
  description: 'Discover high-quality products at unbeatable prices',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return (
    <html lang="en">
      <head>
            <link rel="shortcut icon" href="/assets/img/favicon.png" type="images/x-icon"/>

    <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/assets/css/fontawesome.css"/>
    <link rel="stylesheet" href="/assets/css/animate.css"/>
    <link rel="stylesheet" href="/assets/css/swiper.min.css"/>
    <link rel="stylesheet" href="/assets/css/odometer.css"/>
    <link rel="stylesheet" href="/assets/css/nice-select.css"/>
    <link rel="stylesheet" href="/assets/css/aos.css"/>
    <link rel="stylesheet" href="/assets/css/jquery-ui.min.css"/>
    <link rel="stylesheet" href="/assets/css/magnific-popup.css"/>
    <link rel="stylesheet" href="/assets/css/rs6.css"/>
    <link rel="stylesheet" href="/assets/css/main.css"/>
      </head>
      <body className={inter.className + 'demo_digital_marketing"'}>
        <div className="body_wrap">
          <Header categories={categories} products={products} />
          <main className="flex-1">{children}</main>
          <Foot />
          <Scripts/>
        </div>
      </body>
    </html>
  );
}