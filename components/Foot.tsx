'use client'
import React from 'react'

const Foot = ({categories}: {categories: any}) => {
    const html = `
        <!-- footer start -->
    <footer class="xb-footer sticky footer-marketing mr-noise-bg pt-115 pb-45">
        <div class="container">
            <div class="mr-footer-cta ul_li_between">
                <div class="mr-footer-holder mb-30">
                    <div class="ul_li mb-25">
                        <div class="xb-item--logo">
                            <img src="/acmelogo.png" alt="" width="120">
                        </div>
                        <h2>Let's Connect</h2>
                    </div>
                    <div class="ul_li">
                        <a class="xb-btn xb-btn--marketing" href="tel:+919908082672">
                            <div class="btn-anim-wrap">
                                <span class="button-text">contact us</span>
                                <span class="button-text">contact us</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="mr-footer-info mb-30">
                    <h3 class="xb-item--title">Get in touch</h3>
                    <p class="xb-item--info">+919908082672<br>
                        acmeequipmentscompany@gmail.com <br>
                        Ranigunj, Secunderabad 500003</p>
                    <ul class="xb-item--social ul_li">
                        <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-main mb-60">
                <div class="row mt-none-40">
                    <div class="col-lg-3 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">Newsletter</h3>
                            <p>Sign up to seargin weekly newsletter <br> to get the latest updates.</p>
                            <form action="#" class="mr-footer-newsletter mt-35">
                                <span class="icon"><img src="assets/img/icon/mr-sms-tracking.svg" alt=""></span>
                                <input type="text" placeholder="Your Email Address">
                                <button><img src="assets/img/icon/mr_arrow_up.svg" alt=""></button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">Categories</h3>
                            <ul class="footer-links list-unstyled">
                                ${
                                    categories.map((category: any) => `
                                        <li><a href="/products?category=${category.id}">${category.name}</a></li>
                                    `).join('')
                                }
                            </ul>
                        </div>
                    </div>
                    <!--
                    <div class="col-lg-3 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">Information</h3>
                            <ul class="footer-links list-unstyled">
                                <li><a href="#!">About</a></li>
                                <li><a href="#!">Latest Articles</a></li>
                                <li><a href="#!">Contact Us</a></li>
                                <li><a href="#!">How it works</a></li>
                                <li><a href="#!">FAQ’S</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 footer-col mt-40">
                        <div class="footer-widget">
                            <h3 class="widget-title">Resources</h3>
                            <ul class="footer-links list-unstyled">
                                <li><a href="#!">Help center</a></li>
                                <li><a href="#!">Support</a></li>
                                <li><a href="#!">Careers</a></li>
                                <li><a href="#!">Pricing</a></li>
                                <li><a href="#!">Products</a></li>
                            </ul>
                        </div>
                    </div>
                    -->
                </div>
            </div>
            <div class="mr-footer-copyright ul_li_between">
                <p class="mt-15">Copyright © 2025 ACME. All rights reserved. Designed and Developed by THE WEB SENSEI</p>
                <ul class="mr-footer-nav ul_li mt-15">
                    <li><a href="#!">Terms & Conditions</a></li>
                    <li><a href="#!">Privacy Policy</a></li>
                    <li><a href="#!">Cookie Policy</a></li>
                    <li><a href="#!">Data Preferences</a></li>
                </ul>
            </div>
        </div>
    </footer>
    `
  return (
    <div
    dangerouslySetInnerHTML={{ __html: html }}
    >
      
    </div>
  )
}

export default Foot
