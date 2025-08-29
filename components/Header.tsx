'use client'
import React from 'react'

const Header = ({ categories, products }: { categories: any, products: any }) => {
    // categories with products inside
    const filteredCategories = categories.filter((category: any) => {
        return products.some((product: any) => product.categoryId === category.id);
    });
    const html = `
        <header id="xb-header-area" class="site-header header-marketing is-sticky">
        <div class="xb-header__top">
            <div class="container m-auto ul_li_between">
                <div class="xb-social ul_li">
                    <span>Follow us :</span>
                    <ul class="ul_li">
                        <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#!"><i class="fab fa-pinterest-p"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="xb-header__wrap xb-header-has-arrow xb-header">
            <div class="container">
                <div class="ul_li_between">
                    <div class="xb-header__logo">
                        <a href="/"><img src="/logo.png" alt="" width="120"></a>
                    </div>
                    <div class="main-menu__wrap ul_li navbar navbar-expand-lg">
                        <nav class="main-menu collapse navbar-collapse">
                            <ul>
                                <li><a href="/"><span>Home</span></a></li>
                                ${
                                    filteredCategories.map((category: any) => `
                                        <li class="menu-item-has-children">
                                    <a href="/products?categoryId=${category.id}"><span>${category.name}</span></a>
                                    <ul class="submenu">
                                        ${products.filter((product: any) => product.categoryId === category.id).map((product: any) => `
                                            <li><a href="/products/${product.id}"><span>${product.name}</span></a></li>
                                        `).join('')}
                                    </ul>
                                </li>
                                    `).join('')
                                }
                                <!--
                                <li class="menu-item-has-children">
                                    <a href="shop.html"><span>Shop</span></a>
                                    <ul class="submenu">
                                        <li><a href="shop.html"><span>Shop</span></a></li>
                                        <li><a href="shop-single.html"><span>Shop Details</span></a></li>
                                        <li><a href="cart.html"><span>Shop Cart</span></a></li>
                                        <li><a href="checkout.html"><span>Checkout</span></a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children">
                                    <a href="blog.html"><span>Blog</span></a>
                                    <ul class="submenu">
                                        <li><a href="blog.html"><span>Blog</span></a></li>
                                        <li><a href="blog-single.html"><span>Blog Details</span></a></li>
                                    </ul>
                                </li>
                                -->
                                <li><a href="/contact"><span>Contact</span></a></li>
                            </ul>
                        </nav>
                        <div class="xb-header-wrap style-black">
                            <div class="xb-header-menu">
                                <div class="xb-header-menu-scroll">
                                    <div class="xb-menu-close xb-hide-xl xb-close"></div>
                                    <nav class="xb-header-nav">
                                        <ul class="xb-menu-primary clearfix">
                                            <li class="menu-item"><a href="/"><span>Home</span></a></li>
                                            ${
                                                filteredCategories.map((category:any) => (
                                                    `
                                                    <li class="menu-item menu-item-has-children" id="category-${category.id}">
                                                        <a href="/products?categoryId=${category.id}"><span>${category.name}</span></a>
                                                        <ul class="sub-menu">
                                                            ${products.filter((product:any) => product.categoryId === category.id).map((product:any) => `
                                                                <li class="menu-item"><a href="/products/${product.id}"><span>${product.name}</span></a></li>
                                                            `).join('')}
                                                        </ul>
                                                    </li>
                                                    `
                                                )).join('')}
                                            <li class="menu-item"><a href="/contact"><span>Contact</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="xb-header-menu-backdrop"></div>
                        </div>
                    </div>
                    <div class="xb-header__right ul_li">
                        <div class="d-none d-lg-block">
                            <a class="xb-header-bar offcanvas-sidebar-btn ml-30" href="javascript:void(0);">
                                <div class="xb-header-bar__icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                        
                        <div class="header-bar d-lg-none">
                            <a class="xb-header-bar xb-nav-mobile ml-30" href="javascript:void(0);">
                                <div class="xb-header-bar__icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

        <!-- header end -->


    <!-- sidebar-info start -->
    <div class="offcanvas-sidebar">
        <div class="sidebar-menu-close">
            <a class="xb-close" href="javascript:void(0);"></a>
        </div>
        <div class="sidebar-top mb-65">
            <div class="sidebar-logo mb-40">
                <a href="/">
                    <img src="/logo.png" alt="logo">
                </a>
            </div>
            <div class="sidebar-content">
                Fulfilling all <br> industrial needs
            </div>
        </div>
    
        <div class="sidebar-contact-info mb-65">
            <h4 class="sidebar-heading">Contact Information</h4>
            <ul class="sidebar-info-list list-unstyled">
                <li><span><img src="assets/img/icon/star-2.svg" alt=""></span><a href="https://www.google.com/maps/place/ACME+%7C+Industrial+Equipments+Company/data=!4m2!3m1!1s0x0:0xd2dc31518ea779f7?sa=X&ved=1t:2428&ictx=111">Shop No, 4-2-260, Mahankali St, Old Bhoiguda, Rani Gunj, Secunderabad, Telangana 500003</a></li>
                <li><a href="#!"><span><img src="assets/img/icon/star-2.svg" alt=""></span>+91 99080 82672</a></li>
                <li><a href="#!"><span><img src="assets/img/icon/star-2.svg" alt=""></span>acme.salesdept@gmail.com</a></li>
            </ul>
        </div>
        <div class="sidebar-social mr-footer-info mt-65">
            <h4 class="sidebar-heading">follwo us</h4>
            <ul class="xb-item--social ul_li">
                <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#!"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M10.7124 7.62177L17.4133 0H15.8254L10.0071 6.61788L5.35992 0H0L7.02738 10.0074L0 18H1.58799L7.73237 11.0113L12.6401 18H18L10.7121 7.62177H10.7124ZM8.53747 10.0956L7.82546 9.09906L2.16017 1.16971H4.59922L9.17118 7.56895L9.8832 8.56546L15.8262 16.8835H13.3871L8.53747 10.096V10.0956Z" fill="white"/>
                  </svg></a></li>
            </ul>
        </div>
    </div>
    <div class="body-overlay"></div>    
    `
    return (
        <div
            dangerouslySetInnerHTML={{ __html: html }}
        >

        </div>
    )
}

export default Header
