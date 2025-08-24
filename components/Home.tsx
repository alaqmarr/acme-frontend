'use client'
import React from 'react'

const Home = ({ brands, categories, products }: { brands: any, categories: any, products: any }) => {
    // get only 5 products
    const featuredProducts = products.slice(0, 5);
    const html = `
        <main>
        <!-- hero start -->
       <section class="hero-marketing mr-bg pos-rel d-flex align-items-center" data-background="/assets/img/bg/mr_hero_bg.jpg">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="mr-hero-content">
                        <span class="xb-item--subtitle" data-aos="fade-up" data-aos-duration="500"><span><img src="/assets/img/icon/hr_icon.png" alt=""></span> Welcome to </span>
                        <h2 class="xb-item--title" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" style="color:white;">ACME <span class="icon"><img src="/assets/img/icon/m_star.png" alt=""></span> Industrial Equipments Company <img id="reload" src="/assets/img/icon/decor2.png" alt=""></h2>
                        <p class="xb-item--content mb-50" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400"></p>
                        <div class="xb-item--btn" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                            <a class="xb-btn xb-btn--marketing" href="">
                                <div class="btn-anim-wrap">
                                    <span class="button-text">Our Products</span>
                                    <span class="button-text">Our Products</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="mr-hero-img pos-rel">
                        <img data-aos="fade-left" data-aos-duration="500" data-aos-delay="300" src="/logo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="mr-hero-shape">
            <img src="/assets/img/shape/mr_shape.png" alt="">
        </div>
       </section>
        <!-- hero end -->

        <!-- marquee start -->
        <section class="marquee" data-bg-color="#131313">
            <div class="mr-marquee marquee-left">
                ${brands.map((brand: any) => `
                    <div class="mr-marquee__item"><span><img src="${brand.image}" alt="" width="100" style="mix-blend-mode:normal;"></span>${brand.name}</div>
                `).join('')}
            </div>
        </section>
        <!-- marquee end -->

        <div class="bg_img" data-background="/assets/img/bg/mr_bg_2.jpg">
            <!-- feature start -->
            
            <!-- feature end -->

            <!-- about start -->
            <section class="about pb-115">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <div class="sec-title sec-title--marketing" data-aos="fade-right" data-aos-duration="600">
                                <span class="subtitle">Who we are?</span>
                                <h2 class="title mb-45">At ACME Industrial equipments company, <br> we deal in
                                    <span class="xb-title--typewriter">
                                        ${categories.map((category: any) => `<span class="xb-item--text highlight">${category.name}</span>`)}
                                    </span>
                                </h2>
                                <p>Acme Industrial Equipments Company, headquartered in Rani Gunj, Secunderabad (Telangana), is a trusted supplier and manufacturer of a wide range of industrial valves and equipment. Operating with a customer-first approach, the company has built a reputation for reliability and swift service.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="rm-about-img text-center text-lg-end" data-aos="fade-left" data-aos-duration="600" data-aos-delay="200">
                                <img class="slide-up-down" src="/acmelogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- about end -->
        </div>

        <!-- client section start -->
        <section class="client-section mr-noise-bg">
            <div class="client-section__inner has-bg d-flex" data-parallax='{"x": "-170"}'>
                ${brands.map((brand: any) => `
                    <div class="client-section__item">
                    <img src="${brand.image}" alt="${brand.name}">
                </div>
                `).join('')}
            </div>
            <div class="client-section__inner style-2 d-flex" data-parallax='{"x": "180"}'>
                ${brands.map((brand: any) => `
                    <div class="client-section__item">
                    <img src="${brand.image}" alt="${brand.name}">
                </div>
                `).join('')}
            </div>
        </section>
        <!-- client section end -->

        <!-- service start -->
        <section class="service bg_img pt-135 pb-135" data-background="/assets/img/bg/mr_bg_2.jpg">
            <div class="container">
                <div class="ul_li_between align-items-end mb-35">
                    <div class="sec-title sec-title--marketing mb-20">
                        <span class="subtitle">categories</span>
                        <h2 class="title">What we deal in</h2>
                    </div>
                </div>
                <div class="row mt-none-30">
                    <div class="col-lg-7 col-md-6 mt-30">
                        <ul class="mr-service nav nav-tabs accordion_box clearfix" id="myTab" role="tablist">
                            ${categories.map((category: any, index: number) => `
                                <li class="nav-link accordion block active-block active" id="mr-srv-tab-1" data-bs-toggle="tab"
                                    data-bs-target="#mr-srv-1" role="tab" aria-controls="mr-srv-1" aria-selected="true">
                                <div class="acc-btn">
                                    ${category.name}
                                    <span class="arrow"></span>
                                </div>
                                <div class="acc_body current">
                                    <div class="content">
                                        <p>${category.description}</p>
                                        <div class="mr-service-btn">
                                            <a href="/products?categoryId=${category.id}">See Products<span><img src="/logo.png" alt=""></span></a>
                                        </div>
                                    </div>
                                </div>
                                <span class="number">${index + 1}</span>
                            </li>
                            `)
        }
                            
                        </ul>
                    </div>
                    <div class="col-lg-5 col-md-6 mt-30">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane animated fadeInRight show active" id="mr-srv-1" role="tabpanel" aria-labelledby="mr-srv-tab-1">
                                <div class="mr-service__img text-end">
                                    <img src="/assets/img/service/mr_srv_01.png" alt="">
                                </div>
                            </div>
                            <div class="tab-pane animated fadeInRight" id="mr-srv-2" role="tabpanel" aria-labelledby="mr-srv-tab-2">
                                <div class="mr-service__img text-end">
                                    <img src="/assets/img/service/mr_srv_02.png" alt="">
                                </div>
                            </div>
                            <div class="tab-pane animated fadeInRight" id="mr-srv-3" role="tabpanel" aria-labelledby="mr-srv-tab-3">
                                <div class="mr-service__img text-end">
                                    <img src="/assets/img/service/mr_srv_03.png" alt="">
                                </div>
                            </div>
                            <div class="tab-pane animated fadeInRight" id="mr-srv-4" role="tabpanel" aria-labelledby="mr-srv-tab-4">
                                <div class="mr-service__img text-end">
                                    <img src="/assets/img/service/mr_srv_01.png" alt="">
                                </div>
                            </div>
                            <div class="tab-pane animated fadeInRight" id="mr-srv-5" role="tabpanel" aria-labelledby="mr-srv-tab-5">
                                <div class="mr-service__img text-end">
                                    <img src="/assets/img/service/mr_srv_02.png" alt="">
                                </div>
                            </div>
                            <div class="tab-pane animated fadeInRight" id="mr-srv-6" role="tabpanel" aria-labelledby="mr-srv-tab-6">
                                <div class="mr-service__img text-end">
                                    <img src="/assets/img/service/mr_srv_03.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- service end -->
        
        <!-- project start -->
        <section class="project mr-noise-bg pos-rel pt-140 pb-140">
            <div class="container">
                <div class="ul_li_between align-items-end mb-35">
                    <div class="sec-title sec-title--marketing mb-20">
                        <span class="subtitle">products</span>
                        <h2 class="title">Our Products</h2>
                    </div>
                    <h3 class="all-project-title mb-20">Products</h3>
                </div>
                <div class="mr-project sticky-coloum-wrap">
                    <div class="mr-project__btn sticky-coloum-item">
                        <a class="xb-btn xb-btn--marketing" href="/products">
                            <div class="btn-anim-wrap">
                                <span class="button-text">All Products</span>
                                <span class="button-text">All Products</span>
                            </div>
                        </a>
                    </div>
                    <div class="mr-project__lists sticky-coloum-item">
                        ${featuredProducts.map((product: any) => `
                                <div class="xb-item--item">
                            <div class="xb-item--holder">
                                <h3 class="xb-item--title">${product.name}</h3>
                                <span class="xb-item--date">${product.category}</span>
                                <span class="xb-item--icon"><img src="/assets/img/icon/mr_arrow.svg" alt=""></span>
                            </div>
                            <div class="xb-item--img">
                                <div class="xb-item--img-inner">
                                    <img src="${product.images[0].url}" alt="">

                                </div>
                            </div>
                            <a class="xb-overlay" href="/product/${product.id}"></a>
                        </div>
                            `).join('')
        }
                    </div>
                </div>
                <div class="mr-project__btn-bottom d-lg-none text-center mt-40" >
                    <a class="xb-btn xb-btn--marketing" href="/products">
                        <div class="btn-anim-wrap">
                            <span class="button-text">All Products</span>
                            <span class="button-text">All Products</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="mr-project-shape">
                <div class="shape shape--1">
                    <img data-parallax='{"x":-50,"y":-80}' src="/assets/img/shape/prj_01.png" alt="">
                </div>
                <div class="shape shape--2">
                    <img data-parallax='{"x":50,"y":80}' src="/assets/img/shape/prj_02.png" alt="">
                </div>
            </div>
        </section>
        <!-- project end -->



        <!-- testimonial start -->
        <!--
        <section class="testimonial mr-noise-bg pt-140 pb-140">
            <div class="sec-title sec-title--marketing text-center mb-60">
                <span class="subtitle">testimonial</span>
                <h2 class="title">Real Client’s Results</h2>
            </div>
            <div class="mr-testimonial-slider swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide mr-testimonial">
                        <div class="xb-item--inner">
                            <div class="xb-item--quote">
                                <img src="/assets/img/icon/mr-quote.png" alt="">
                            </div>
                            <div class="xb-item--content mb-90">
                                "As a startup founder, I sought a digital marketing partner to establish our online brand. Seargin crafted a powerful strategy and offered invaluable guidance, driving our success through dedication and creativity."
                            </div>
                            <div class="xb-item--author ul_li">
                                <div class="xb-item--avatar">
                                    <img src="/assets/img/avatar/mr_tm_01.png" alt="">
                                </div>
                                <div class="xb-item--author-info">
                                    <h3 class="xb-item--name">Jose Herrera</h3>
                                    <span class="xb-item--desig">CEO, Kinshasa Startup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide mr-testimonial">
                        <div class="xb-item--inner">
                            <div class="xb-item--quote">
                                <img src="/assets/img/icon/mr-quote.png" alt="">
                            </div>
                            <div class="xb-item--content mb-90">
                                "Partnering with Seargin transformed my e-commerce business. Their online advertising and SEO expertise boosted traffic and conversions, resulting in a revenue increase. I'm thrilled with the results!"
                            </div>
                            <div class="xb-item--author ul_li">
                                <div class="xb-item--avatar">
                                    <img src="/assets/img/avatar/mr_tm_02.png" alt="">
                                </div>
                                <div class="xb-item--author-info">
                                    <h3 class="xb-item--name">Jordan Eugenio</h3>
                                    <span class="xb-item--desig">CEO, Healthcare</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide mr-testimonial">
                        <div class="xb-item--inner">
                            <div class="xb-item--quote">
                                <img src="/assets/img/icon/mr-quote.png" alt="">
                            </div>
                            <div class="xb-item--content mb-90">
                                "Skeptical at first, I'm now a firm believer in digital marketing thanks to Seargin. Their expertise built our online presence, increasing social media engagement and bringing in a steady flow of new customers."
                            </div>
                            <div class="xb-item--author ul_li">
                                <div class="xb-item--avatar">
                                    <img src="/assets/img/avatar/mr_tm_03.png" alt="">
                                </div>
                                <div class="xb-item--author-info">
                                    <h3 class="xb-item--name">Denys Kapush</h3>
                                    <span class="xb-item--desig">Founder of Cambly</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide mr-testimonial">
                        <div class="xb-item--inner">
                            <div class="xb-item--quote">
                                <img src="/assets/img/icon/mr-quote.png" alt="">
                            </div>
                            <div class="xb-item--content mb-90">
                                "As a startup founder, I sought a digital marketing partner to establish our online brand. Seargin crafted a powerful strategy and offered invaluable guidance, driving our success through dedication and creativity."
                            </div>
                            <div class="xb-item--author ul_li">
                                <div class="xb-item--avatar">
                                    <img src="/assets/img/avatar/mr_tm_01.png" alt="">
                                </div>
                                <div class="xb-item--author-info">
                                    <h3 class="xb-item--name">Jose Herrera</h3>
                                    <span class="xb-item--desig">CEO, Kinshasa Startup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide mr-testimonial">
                        <div class="xb-item--inner">
                            <div class="xb-item--quote">
                                <img src="/assets/img/icon/mr-quote.png" alt="">
                            </div>
                            <div class="xb-item--content mb-90">
                                "Partnering with Seargin transformed my e-commerce business. Their online advertising and SEO expertise boosted traffic and conversions, resulting in a revenue increase. I'm thrilled with the results!"
                            </div>
                            <div class="xb-item--author ul_li">
                                <div class="xb-item--avatar">
                                    <img src="/assets/img/avatar/mr_tm_02.png" alt="">
                                </div>
                                <div class="xb-item--author-info">
                                    <h3 class="xb-item--name">Jordan Eugenio</h3>
                                    <span class="xb-item--desig">CEO, Healthcare</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        -->
        <!-- testimonial end -->

        <!-- blog start -->
        <!--
        <section class="blog bg_img pt-140 pb-140" data-background="/assets/img/bg/mr_bg_2.jpg">
            <div class="container">
                <div class="ul_li_between align-items-end mb-35">
                    <div class="sec-title sec-title--marketing mb-20">
                        <span class="subtitle">our latest news</span>
                        <h2 class="title">Our Insights & News</h2>
                    </div>
                    <a class="mr-all-link mb-20" href="blog.html">more news<span><img src="/assets/img/icon/mr_arrow_right.svg" alt=""></span></a>
                </div>
                <div class="mr-blog xb-mouseenter active">
                    <div class="xb-item--inner ul_li_between">
                        <div class="xb-item--holder d-flex">
                            <span class="xb-item--cat"><span><img src="/assets/img/icon/cat_01.svg" alt=""> marketing</span></span>
                            <h2 class="xb-item--title">Navigating the Ever-Changing of Online Strategies..</h2>
                        </div>
                        <span class="xb-item--date">Aug 22, 2023</span>
                        <span class="xb-item--read">10 min read</span>
                        <div class="xb-item--img" data-background="/assets/img/blog/mr_blog_01.jpg"></div>
                        <a class="xb-overlay" href="blog-single.html"></a>
                    </div>
                </div>
                <div class="mr-blog xb-mouseenter">
                    <div class="xb-item--inner ul_li_between">
                        <div class="xb-item--holder d-flex align-items-center">
                            <span class="xb-item--cat"><span><img src="/assets/img/icon/cat_01.svg" alt="">digital</span></span>
                            <h2 class="xb-item--title">The Future of Digital Marketing Emerging Trends..</h2>
                        </div>
                        <span class="xb-item--date">Aug 22, 2023</span>
                        <span class="xb-item--read">10 min read</span>
                        <div class="xb-item--img" data-background="/assets/img/blog/mr_blog_02.jpg"></div>
                        <a class="xb-overlay" href="blog-single.html"></a>
                    </div>
                </div>
                <div class="mr-blog xb-mouseenter">
                    <div class="xb-item--inner ul_li_between">
                        <div class="xb-item--holder d-flex align-items-center">
                            <span class="xb-item--cat"><span><img src="/assets/img/icon/cat_03.svg" alt="">tips</span></span>
                            <h2 class="xb-item--title">Unpacking the World of Digital Campaigns..</h2>
                        </div>
                        <span class="xb-item--date">Aug 22, 2023</span>
                        <span class="xb-item--read">10 min read</span>
                        <div class="xb-item--img" data-background="/assets/img/blog/mr_blog_03.jpg"></div>
                        <a class="xb-overlay" href="blog-single.html"></a>
                    </div>
                </div>
            </div>
        </section>
        -->
        <!-- blog end -->
        
    </main>
    `
    return (
        <div
            dangerouslySetInnerHTML={{ __html: html }}
        >

        </div>
    )
}

export default Home
