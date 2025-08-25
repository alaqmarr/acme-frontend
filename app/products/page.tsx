import { fetchProducts, fetchCategories, fetchCategoryBySlug } from '@/utils/api';
import { Metadata } from 'next';
export const metadata: Metadata = {
title: 'ACME - PRODUCTS',
description: 'Discover high-quality products at unbeatable prices',
};
export default async function ProductsPage({searchParams} : {searchParams : Promise<{categoryId: string}>}) {
  const { categoryId } = await searchParams;


  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);

  const filteredProducts = categoryId ? products.filter((product: any) => product.categoryId === categoryId) : products;
  const html = `
  <main>

            <!-- breadcrumb start -->
            <section class="breadcrumb bg_img" data-bg-color="#E7E9EE">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="breadcrumb__content">
                                <h2 class="breadcrumb__title">Products</h2>
                                <ul class="breadcrumb__list clearfix">
                                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                                        <li class="breadcrumb-item">Products</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb end -->

            <!-- shop start -->
            <section class="shop pt-150 pb-180">
                <div class="container">
                    <div class="row mt-none-60">
                        <div class="col-lg-9 mt-60">
                            <div class="woocommerce-content-wrap">
                                <div class="woocommerce-content-inner">
                                    <div class="products">
                                        <div class="row">
                                            ${
                                              filteredProducts.map((product: any) => `
                                              <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                <div class="product">
                                                    <div class="product--img">
                                                        <a href="/products/${product.id}"><img src="${product.images[0].url}"
                                                                alt=""></a>
                                                        <div class="product--btn">
                                                            <a class="xb-btn" href=${`https://wa.me/+919908082672?text=${encodeURIComponent("I want to enquire about " + product.name)}`}><i
                                                                    class="far fa-shopping-bag"></i>Enquire</a>
                                                        </div>
                                                    </div>
                                                    <div class="product--holder">
                                                        <h3 class="product--title"><a href="/products/${product.id}">${product.name}</a></h3>
                                                        <span class="product--price"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            `)
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 mt-60">
                            <div class="shop-sidebar sidebar-area mt-none-40">
                                <div class="widget mt-40">
                                    <h2 class="widget__title">
                                        <span>Product Categories</span>
                                    </h2>
                                    <div class="widget__inner">
                                        <ul class="widget__category list-unstyled">
                                            ${categories.map((category: any) => `
                                                <li><a href="/products?categoryId=${category.id}">${category.name} <span>(${category.products.length})</span></a></li>
                                            `).join('')}
                                       </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- shop end -->

        </main>
  `

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}