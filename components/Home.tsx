'use client'
import React from 'react'

const Home = ({brands, categories} : {brands: any, categories: any}) => {
    const html = `
        <main>
        <!-- hero start -->
       <section class="hero-marketing mr-bg pos-rel d-flex align-items-center" data-background="/assets/img/bg/mr_hero_bg.jpg">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="mr-hero-content">
                        <span class="xb-item--subtitle" data-aos="fade-up" data-aos-duration="500"><span><img src="/assets/img/icon/hr_icon.png" alt=""></span> Welcome to </span>
                        <h2 class="xb-item--title" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">ACME <span class="icon"><img src="/assets/img/icon/m_star.png" alt=""></span> Industrial Equipments Company <img id="reload" src="/assets/img/icon/decor2.png" alt=""></h2>
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
                        <img data-aos="fade-left" data-aos-duration="500" data-aos-delay="300" src="/assets/img/hero/mr_img.png" alt="">
                        <div class="mr-hero-img-inner">
                            <div class="chart chart--1">
                                <img data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500" src="/assets/img/hero/chat1.png" alt="">
                            </div>
                            <div class="chart chart--2">
                                <img data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600" src="/assets/img/hero/chat2.png" alt="">
                            </div>
                            <div class="chart chart--3">
                                <img data-aos="zoom-in" data-aos-duration="600" data-aos-delay="700" src="/assets/img/hero/chat3.png" alt="">
                            </div>
                            <div class="chart chart--4">
                                <img data-aos="zoom-in" data-aos-duration="600" data-aos-delay="800" src="/assets/img/hero/chart.png" alt="">
                            </div>
                        </div>
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
            <section class="feature pos-rel pt-135 pb-130">
                <div class="container">
                    <div class="sec-title sec-title--marketing text-center mb-60" data-aos="fade-up" data-aos-duration="600">
                        <span class="subtitle">what we do</span>
                        <h2 class="title">We Solve digital Challenges</h2>
                    </div>
                    <div class="row mt-none-30 row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 justify-content-center">
                        <div class="col mt-30">
                            <div class="mr-feature" data-aos="fade-up" data-aos-duration="600" data-aos-delay="150">
                                <div class="xb-item--inner">
                                    <div class="xb-item--icon">
                                        <img src="/assets/img/icon/rm_feat1.png" alt="">
                                    </div>
                                    <h3 class="xb-item--title">Quick <br> Replies</h3>
                                    <div class="xb-item--shape">
                                        <img src="/assets/img/icon/rm_feat_shape.png" alt="">
                                    </div>
                                    <div class="xb-item--bg">
                                        <img src="/assets/img/shape/rm_feat_bg.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-30">
                            <div class="mr-feature" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                <div class="xb-item--inner">
                                    <div class="xb-item--icon">
                                        <img src="/assets/img/icon/rm_feat2.png" alt="">
                                    </div>
                                    <h3 class="xb-item--title">Better <br> Products</h3>
                                    <div class="xb-item--shape">
                                        <img src="/assets/img/icon/rm_feat_shape.png" alt="">
                                    </div>
                                    <div class="xb-item--bg">
                                        <img src="/assets/img/shape/rm_feat_bg.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-30">
                            <div class="mr-feature" data-aos="fade-up" data-aos-duration="600" data-aos-delay="450">
                                <div class="xb-item--inner">
                                    <div class="xb-item--icon">
                                        <img src="/assets/img/icon/rm_feat3.png" alt="">
                                    </div>
                                    <h3 class="xb-item--title">Better <br> Outcomes</h3>
                                    <div class="xb-item--shape">
                                        <img src="/assets/img/icon/rm_feat_shape.png" alt="">
                                    </div>
                                    <div class="xb-item--bg">
                                        <img src="/assets/img/shape/rm_feat_bg.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-30">
                            <div class="mr-feature" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                <div class="xb-item--inner">
                                    <div class="xb-item--icon">
                                        <img src="/assets/img/icon/rm_feat4.png" alt="">
                                    </div>
                                    <h3 class="xb-item--title">Customer <br> 
                                        Satisfaction</h3>
                                    <div class="xb-item--shape">
                                        <img src="/assets/img/icon/rm_feat_shape.png" alt="">
                                    </div>
                                    <div class="xb-item--bg">
                                        <img src="/assets/img/shape/rm_feat_bg.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-30">
                            <div class="mr-feature" data-aos="fade-up" data-aos-duration="600" data-aos-delay="750">
                                <div class="xb-item--inner">
                                    <div class="xb-item--icon">
                                        <img src="/assets/img/icon/rm_feat5.png" alt="">
                                    </div>
                                    <h3 class="xb-item--title">Best <br> Price</h3>
                                    <div class="xb-item--shape">
                                        <img src="/assets/img/icon/rm_feat_shape.png" alt="">
                                    </div>
                                    <div class="xb-item--bg">
                                        <img src="/assets/img/shape/rm_feat_bg.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mr-feature-shape" data-parallax='{"y": "-90"}'>
                    <img src="/assets/img/shape/mr_shape1.png" alt="">
                </div>
            </section>
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
                                <img class="slide-up-down" src="/assets/img/shape/rm_abt1.png" alt="">
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
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_01.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_02.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_03.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_04.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_05.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_06.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_07.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_01.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_02.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_03.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_04.png" alt="">
                </div>
            </div>
            <div class="client-section__inner style-2 d-flex" data-parallax='{"x": "180"}'>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_08.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_09.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_10.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_11.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_12.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_13.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_14.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_08.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_09.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_10.png" alt="">
                </div>
                <div class="client-section__item">
                    <img src="/assets/img/brand/rm_brand_11.png" alt="">
                </div>
            </div>
        </section>
        <!-- client section end -->

        <!-- service start -->
        <section class="service bg_img pt-135 pb-135" data-background="/assets/img/bg/mr_bg_2.jpg">
            <div class="container">
                <div class="ul_li_between align-items-end mb-35">
                    <div class="sec-title sec-title--marketing mb-20">
                        <span class="subtitle">services</span>
                        <h2 class="title">Expertise & Services</h2>
                    </div>
                    <a class="mr-all-link mb-20" href="services.html">view all services<span><img src="/assets/img/icon/mr_arrow_right.svg" alt=""></span></a>
                </div>
                <div class="row mt-none-30">
                    <div class="col-lg-7 col-md-6 mt-30">
                        <ul class="mr-service nav nav-tabs accordion_box clearfix" id="myTab" role="tablist">
                            <li class="nav-link accordion block active-block active" id="mr-srv-tab-1" data-bs-toggle="tab"
                                    data-bs-target="#mr-srv-1" role="tab" aria-controls="mr-srv-1" aria-selected="true">
                                <div class="acc-btn">
                                    Search Engine Optimization
                                    <span class="arrow"></span>
                                </div>
                                <div class="acc_body current">
                                    <div class="content">
                                        <p>Search Engine Optimization, often abbreviated as SEO, is a <br> critical digital marketing strategy that aims.</p>
                                        <div class="mr-service-btn">
                                            <a href="service-single.html">See Details<span><img src="/assets/img/icon/mr_arrow_right.svg" alt=""></span></a>
                                        </div>
                                    </div>
                                </div>
                                <span class="number">01</span>
                            </li>
                            <li class="nav-link accordion block" id="mr-srv-tab-2" data-bs-toggle="tab" data-bs-target="#mr-srv-2"
                                    role="tab" aria-controls="mr-srv-2" aria-selected="false">
                                <div class="acc-btn">
                                    Pay-Per-Click Advertising
                                    <span class="arrow"></span>
                                </div>
                                <div class="acc_body">
                                    <div class="content">
                                        <p>Instant Traffic, Maximum Impact! Drive targeted visitors to <br> your site and boost sales. Start your campaign today</p>
                                        <div class="mr-service-btn">
                                            <a href="service-single.html">See Details<span><img src="/assets/img/icon/mr_arrow_right.svg" alt=""></span></a>
                                        </div>
                                    </div>
                                </div>
                                <span class="number">02</span>
                            </li>
                            <li class="nav-link accordion block" id="mr-srv-tab-3" data-bs-toggle="tab" data-bs-target="#mr-srv-3"
                                    role="tab" aria-controls="mr-srv-3" aria-selected="false">
                                <div class="acc-btn">
                                    Social Media Marketing
                                    <span class="arrow"></span>
                                </div>
                                <div class="acc_body">
                                    <div class="content">
                                        <p>Elevate Your Brand Presence Online. Engage, Connect and <br> Convert with Expert Strategies. Boost Your Business</p>
                                        <div class="mr-service-btn">
                                            <a href="service-single.html">See Details<span><img src="/assets/img/icon/mr_arrow_right.svg" alt=""></span></a>
                                        </div>
                                    </div>
                                </div>
                                <span class="number">03</span>
                            </li>
                            <li class="nav-link accordion block" id="mr-srv-tab-4" data-bs-toggle="tab" data-bs-target="#mr-srv-4"
                                    role="tab" aria-controls="mr-srv-4" aria-selected="false">
                                <div class="acc-btn">
                                    Email Marketing
                                    <span class="arrow"></span>
                                </div>
                                <div class="acc_body">
                                    <div class="content">
                                        <p>Drive Sales, Build Relationships! Personalized Campaigns for <br> Lasting Customer Engagement.</p>
                                        <div class="mr-service-btn">
                                            <a href="service-single.html">See Details<span><img src="/assets/img/icon/mr_arrow_right.svg" alt=""></span></a>
                                        </div>
                                    </div>
                                </div>
                                <span class="number">04</span>
                            </li>
                            <li class="nav-link accordion block" id="mr-srv-tab-5" data-bs-toggle="tab" data-bs-target="#mr-srv-5"
                                    role="tab" aria-controls="mr-srv-5" aria-selected="false">
                                <div class="acc-btn">
                                    Content Marketing
                                    <span class="arrow"></span>
                                </div>
                                <div class="acc_body">
                                    <div class="content">
                                        <p> Captivate Audiences, Boost Business! Craft Compelling Stories Informative Blogs, and Engaging Videos</p>
                                        <div class="mr-service-btn">
                                            <a href="service-single.html">See Details<span><img src="/assets/img/icon/mr_arrow_right.svg" alt=""></span></a>
                                        </div>
                                    </div>
                                </div>
                                <span class="number">05</span>
                            </li>
                            <li class="nav-link accordion block" id="mr-srv-tab-6" data-bs-toggle="tab" data-bs-target="#mr-srv-6"
                                    role="tab" aria-controls="mr-srv-6" aria-selected="false">
                                <div class="acc-btn">
                                    Website Development
                                    <span class="arrow"></span>
                                </div>
                                <div class="acc_body">
                                    <div class="content">
                                        <p>Your Online Presence, Perfected. Expert Designs, Seamless Navigation Enhanced User Experience.</p>
                                        <div class="mr-service-btn">
                                            <a href="service-single.html">See Details<span><img src="/assets/img/icon/mr_arrow_right.svg" alt=""></span></a>
                                        </div>
                                    </div>
                                </div>
                                <span class="number">06</span>
                            </li>
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
                        <span class="subtitle">projects</span>
                        <h2 class="title">Our Latest Projects</h2>
                    </div>
                    <h3 class="all-project-title mb-20">450+ Projects</h3>
                </div>
                <div class="mr-project sticky-coloum-wrap">
                    <div class="mr-project__btn sticky-coloum-item">
                        <a class="xb-btn xb-btn--marketing" href="portfolio.html">
                            <div class="btn-anim-wrap">
                                <span class="button-text">all projects</span>
                                <span class="button-text">all projects</span>
                            </div>
                        </a>
                    </div>
                    <div class="mr-project__lists sticky-coloum-item">
                        <div class="xb-item--item">
                            <div class="xb-item--holder">
                                <h3 class="xb-item--title">SEO Visibility..</h3>
                                <div class="xb-item--content">
                                    Ensure that the website is technically sound, with fast loading times, mobile optimization,
                                    and proper sitemaps.
                                </div>
                                <span class="xb-item--date">December, 13,2023</span>
                                <span class="xb-item--icon"><img src="/assets/img/icon/mr_arrow.svg" alt=""></span>
                            </div>
                            <div class="xb-item--img">
                                <div class="xb-item--img-inner">
                                    <img src="/assets/img/project/mr_01.png" alt="">

                                </div>
                            </div>
                            <a class="xb-overlay" href="portfolio-single.html"></a>
                        </div>
                        <div class="xb-item--item">
                            <div class="xb-item--holder">
                                <h3 class="xb-item--title">E-Commerce Growth..</h3>
                                <div class="xb-item--content">
                                    This project aims to drive more traffic, increase conversions, and boost revenue for the
                                    e-commerce business.
                                </div>
                                <span class="xb-item--date">September, 13,2023</span>
                                <span class="xb-item--icon"><img src="/assets/img/icon/mr_arrow.svg" alt=""></span>
                            </div>
                            <div class="xb-item--img">
                                <div class="xb-item--img-inner">
                                    <img src="/assets/img/project/mr_02.png" alt="">
                                </div>
                            </div>
                            <a class="xb-overlay" href="portfolio-single.html"></a>
                        </div>
                        <div class="xb-item--item">
                            <div class="xb-item--holder">
                                <h3 class="xb-item--title">CRO for Sales..</h3>
                                <div class="xb-item--content">
                                    CRO for Sales" refers to a digital marketing project focused on Conversion Optimization
                                    (CRO) the specific.
                                </div>
                                <span class="xb-item--date">December, 08,2023</span>
                                <span class="xb-item--icon"><img src="/assets/img/icon/mr_arrow.svg" alt=""></span>
                            </div>
                            <div class="xb-item--img">
                                <div class="xb-item--img-inner">
                                    <img src="/assets/img/project/mr_03.png" alt="">
                                </div>
                            </div>
                            <a class="xb-overlay" href="portfolio-single.html"></a>
                        </div>
                    </div>
                </div>
                <div class="mr-project__btn-bottom d-lg-none text-center mt-40" >
                    <a class="xb-btn xb-btn--marketing" href="portfolio.html">
                        <div class="btn-anim-wrap">
                            <span class="button-text">all projects</span>
                            <span class="button-text">all projects</span>
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

        <div class="bg_img" data-background="/assets/img/bg/mr_bg_2.jpg">
            <!-- process start -->
            <section class="process pos-rel pt-140 pb-130">
                <div class="container">
                    <div class="sec-title sec-title--marketing text-center mb-90" data-aos="fade-up" data-aos-duration="600">
                        <span class="subtitle">Our Process</span>
                        <h2 class="title">How We Work</h2>
                    </div>
                    <div class="mr-process ul_li_between mt-none-50" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                        <div class="mr-process__item mt-50">
                            <div class="xb-item--icon pos-rel">
                                <img src="/assets/img/icon/mr_feat_01.png" alt="">
                                <span class="xb-item--icon-bg"><img src="/assets/img/shape/mr_prc_bg.png" alt=""></span>
                            </div>
                            <span class="xb-item--check"><img src="/assets/img/icon/mr_check.svg" alt=""></span>
                            <h2 class="xb-item--title">Discovery & Analysis</h2>
                            <p class="xb-item--content">Discovery refers to the act of uncovering something that was previously.</p>
                            <span class="xb-item--number">01</span>
                        </div>
                        <div class="mr-process__item mt-50">
                            <div class="xb-item--icon style-2 pos-rel">
                                <img src="/assets/img/icon/mr_prc_02.png" alt="">
                                <span class="xb-item--icon-bg"><img src="/assets/img/shape/mr_prc_bg.png" alt=""></span>
                            </div>
                            <span class="xb-item--check"><img src="/assets/img/icon/mr_check.svg" alt=""></span>
                            <h2 class="xb-item--title">Strategy Development</h2>
                            <p class="xb-item--content">Clearly defined and measurable goals are the foundation of any strategy these.</p>
                            <span class="xb-item--number">02</span>
                        </div>
                        <div class="mr-process__item mt-50">
                            <div class="xb-item--icon pos-rel">
                                <img src="/assets/img/icon/mr_prc_03.png" alt="">
                                <span class="xb-item--icon-bg"><img src="/assets/img/shape/mr_prc_bg.png" alt=""></span>
                            </div>
                            <span class="xb-item--check"><img src="/assets/img/icon/mr_check.svg" alt=""></span>
                            <h2 class="xb-item--title">Launch & Execution</h2>
                            <p class="xb-item--content">The launch phase marks the point at which a product, service, project.</p>
                            <span class="xb-item--number">03</span>
                        </div>
                    </div>
                </div>
                <div class="mr-process-shape" data-parallax='{"y": "-90"}'>
                    <img src="/assets/img/shape/mr_shape1.png" alt="">
                </div>
            </section>
            <!-- process end -->

            <!-- team start -->
            <section class="team pos-rel pb-140">
                <div class="container">
                    <div class="sec-title sec-title--marketing text-center mb-60" data-aos="fade-up" data-aos-duration="600">
                        <span class="subtitle">out team</span>
                        <h2 class="title">Our Leaders</h2>
                    </div>
                    <div class="row mt-none-50">
                        <div class="col-xl-3 col-lg-6 col-md-6 mt-50">
                            <div class="mr-team" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0ms">
                                <div class="xb-item--inner text-center">
                                    <div class="xb-item--avatar">
                                        <img src="/assets/img/team/mr_01.png" alt="">
                                    </div>
                                    <div class="xb-item--holder">
                                        <h3 class="xb-item--title"><a href="team-single.html">Louis Saville</a></h3>
                                        <span class="xb-item--desig">SEO Specialist</span>
                                        <ul class="xb-item--social ul_li_center">
                                            <li><a href="#!"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                <path d="M9.4893 6.77491L15.3176 0H13.9365L8.87577 5.88256L4.8338 0H0.171875L6.28412 8.89547L0.171875 16H1.55307L6.8973 9.78782L11.1659 16H15.8278L9.48896 6.77491H9.4893ZM7.59756 8.97384L6.97826 8.08805L2.05073 1.03974H4.17217L8.14874 6.72795L8.76804 7.61374L13.9371 15.0075H11.8157L7.59756 8.97418V8.97384Z" fill="black"/>
                                                </g>
                                                <defs>
                                                <clipPath>
                                                <rect width="16" height="16" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg></a></li>
                                            <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="xb-item--bg"><img src="/assets/img/bg/mr_team_bg.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 mt-50">
                            <div class="mr-team" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                <div class="xb-item--inner text-center">
                                    <div class="xb-item--avatar">
                                        <img src="/assets/img/team/mr_02.png" alt="">
                                    </div>
                                    <div class="xb-item--holder">
                                        <h3 class="xb-item--title"><a href="team-single.html">Dave Gerhardt</a></h3>
                                        <span class="xb-item--desig">Data Analyst</span>
                                        <ul class="xb-item--social ul_li_center">
                                            <li><a href="#!"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                <path d="M9.4893 6.77491L15.3176 0H13.9365L8.87577 5.88256L4.8338 0H0.171875L6.28412 8.89547L0.171875 16H1.55307L6.8973 9.78782L11.1659 16H15.8278L9.48896 6.77491H9.4893ZM7.59756 8.97384L6.97826 8.08805L2.05073 1.03974H4.17217L8.14874 6.72795L8.76804 7.61374L13.9371 15.0075H11.8157L7.59756 8.97418V8.97384Z" fill="black"/>
                                                </g>
                                                <defs>
                                                <clipPath>
                                                <rect width="16" height="16" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg></a></li>
                                            <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="xb-item--bg"><img src="/assets/img/bg/mr_team_bg.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 mt-50">
                            <div class="mr-team" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                <div class="xb-item--inner text-center">
                                    <div class="xb-item--avatar">
                                        <img src="/assets/img/team/mr_03.png" alt="">
                                    </div>
                                    <div class="xb-item--holder">
                                        <h3 class="xb-item--title"><a href="team-single.html">Carlo Castillo</a></h3>
                                        <span class="xb-item--desig">Creative Director</span>
                                        <ul class="xb-item--social ul_li_center">
                                            <li><a href="#!"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                <path d="M9.4893 6.77491L15.3176 0H13.9365L8.87577 5.88256L4.8338 0H0.171875L6.28412 8.89547L0.171875 16H1.55307L6.8973 9.78782L11.1659 16H15.8278L9.48896 6.77491H9.4893ZM7.59756 8.97384L6.97826 8.08805L2.05073 1.03974H4.17217L8.14874 6.72795L8.76804 7.61374L13.9371 15.0075H11.8157L7.59756 8.97418V8.97384Z" fill="black"/>
                                                </g>
                                                <defs>
                                                <clipPath>
                                                <rect width="16" height="16" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg></a></li>
                                            <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="xb-item--bg"><img src="/assets/img/bg/mr_team_bg.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 mt-50">
                            <div class="mr-team" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                <div class="xb-item--inner text-center">
                                    <div class="xb-item--avatar">
                                        <img src="/assets/img/team/mr_04.png" alt="">
                                    </div>
                                    <div class="xb-item--holder">
                                        <h3 class="xb-item--title"><a href="team-single.html">Leslyn Felder</a></h3>
                                        <span class="xb-item--desig">Copywriter</span>
                                        <ul class="xb-item--social ul_li_center">
                                            <li><a href="#!"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                <path d="M9.4893 6.77491L15.3176 0H13.9365L8.87577 5.88256L4.8338 0H0.171875L6.28412 8.89547L0.171875 16H1.55307L6.8973 9.78782L11.1659 16H15.8278L9.48896 6.77491H9.4893ZM7.59756 8.97384L6.97826 8.08805L2.05073 1.03974H4.17217L8.14874 6.72795L8.76804 7.61374L13.9371 15.0075H11.8157L7.59756 8.97418V8.97384Z" fill="black"/>
                                                </g>
                                                <defs>
                                                <clipPath>
                                                <rect width="16" height="16" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg></a></li>
                                            <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="xb-item--bg"><img src="/assets/img/bg/mr_team_bg.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mr-team-shape">
                    <img data-parallax='{"x":50,"y":80}' src="/assets/img/shape/prj_01.png" alt="">
                </div>
            </section>
            <!-- team end -->
        </div>

        <!-- testimonial start -->
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
        <!-- testimonial end -->

        <!-- blog start -->
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
