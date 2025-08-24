import { fetchProductBySlug } from '@/utils/api';
import { NotFound } from '@/components/not-found';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = await fetchProductBySlug(slug);
    if (!product) {
        return {
            title: 'Product Not Found - ACME INDUSTRIAL EQUIPMENTS COMPANY',
            description: 'The product you are looking for does not exist.',
        };
    }
    return {
        title: `${product.name} - ACME INDUSTRIAL EQUIPMENTS COMPANY`,
        description: product.description || 'Discover high-quality products at unbeatable prices',
        openGraph: {
            title: `${product.name} - ACME INDUSTRIAL EQUIPMENTS COMPANY`,
            description: product.description || 'Discover high-quality products at unbeatable prices',
            images: product.images?.length ? product.images.map((img: any) => ({ url: img.url })) : undefined,
        },
    };
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const product = await fetchProductBySlug(slug);
    if (!product) return (
        <NotFound title='Product not found' message='The product you are looking for does not exist.' />
    )

    const html = `
            <main>

            <!-- breadcrumb start -->
            <section class="breadcrumb bg_img" data-bg-color="#E7E9EE" data-background="assets/img/bg/page_title.png">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="breadcrumb__content">
                                <h2 class="breadcrumb__title">${product.name}</h2>
                                <ul class="breadcrumb__list clearfix">
                                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                                    <li class="breadcrumb-item">${product.name} Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb end -->

            <!-- shop single start -->
            <section class="shop-single-section pt-150 pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="product-single-wrap mb-30">
                                <div class="product_details_img ">
                                    <div class="tab-content" id="myTabContent">
                                        ${product.images.map((image: any, index: number) => `
                                            <div class="tab-pane ${index === 0 ? 'show active' : ''}" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div class="pl_thumb">
                                                    <img src="${image.url}" alt="">
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                <div class="shop_thumb_tab">
                                    <ul class="nav" id="myTab2" role="tablist">
                                        ${product.images.map((image: any, index: number) => `
                                            <li class="nav-item">
                                                <button class="nav-link ${index === 0 ? 'active' : ''}" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="${index === 0}"><img src="${image.url}" alt=""> </button>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 product-details-col">
                            <div class="product-details mb-30">
                                <h2>${product.name}</h2>
                                <p>
                                ${product.description}
                                </p>

                                <div class="product-option">
                                    <form class="form">
                                        <div class="product-row">
                                            <div class="add-to-cart-btn">
                                                <a
                                                href=${`https://wa.me/+919908082672?text=${encodeURIComponent("I want to enquire about " + product.name)}`}
                                                >
                                                <button class="xb-btn"><i class="far fa-shopping-bag"></i>ENQUIRE</button>
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div> 

                                <div class="thb-product-meta-after mt-20">
                                    <div class="product_meta">
                                        <span class="posted_in">Categories: <a href="/products?categoryId=${product.category.id}">${product.category.name}</a></span>
                                    </div>
                                </div>
                                
                                
                            </div> 
                        </div> <!-- end col -->
                    </div> <!-- end row -->

                    <div class="row">
                        <div class="col col-xs-12">
                            <div class="single-product-info">
                                <!-- Nav tabs -->
                                <div class="tablist">
                                    <ul class="nav nav-tabs" id="pills-tab" role="tablist">
                                        <li><button  class="active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#tb-01">Information</button></li>
                                    </ul>
                                </div>
                            
                                <!-- Tab panes -->
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="tb-01">
                                        ${product.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!-- end row -->
                    
                </div> <!-- end of container -->
            </section>
            <!-- shop single start -->

        </main>
        `

    return (
        <div dangerouslySetInnerHTML={{ __html: html }}>

        </div>
    );
}