import React from 'react'

const page = () => {
  const html = `
  <main>

            <!-- breadcrumb start -->
            <section class="breadcrumb bg_img" data-bg-color="#E7E9EE" data-background="assets/img/bg/page_title.png">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="breadcrumb__content">
                                <h2 class="breadcrumb__title">Contact</h2>
                                <ul class="breadcrumb__list clearfix">
                                    <li class="breadcrumb-item"><a href="/">home</a></li>
                                    <li class="breadcrumb-item">Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb end -->

            <!-- contact info start -->
            <section class="contact-info pt-150 pb-140">
                <div class="container">
                    <div class="row justify-content-md-center mt-none-30">
                        <div class="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div class="xb-contact-info text-center">
                                <div class="xb-item--icon">
                                    <img src="assets/img/icon/location-2.svg" alt="">
                                </div>
                                <h3 class="xb-item--title">Location</h3>
                                <div class="xb-item--content">
                                    Shop No, 4-2-260,<br> Mahankali St, Old Bhoiguda, <br> Rani Gunj, Secunderabad, <br>Telangana 500003
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div class="xb-contact-info text-center">
                                <div class="xb-item--icon">
                                    <img src="assets/img/icon/telephone1.svg" alt="">
                                </div>
                                <h3 class="xb-item--title">Contact</h3>
                                <div class="xb-item--content">
                                    +91 99080 82672
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div class="xb-contact-info text-center">
                                <div class="xb-item--icon">
                                    <img src="assets/img/icon/email1.svg" alt="">
                                </div>
                                <h3 class="xb-item--title">Email</h3>
                                <div class="xb-item--content">
                                    acme.salesdept@gmail.com
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div class="xb-contact-info text-center">
                                <div class="xb-item--icon">
                                    <img src="assets/img/icon/timetable1.svg" alt="">
                                </div>
                                <h3 class="xb-item--title">Visit Between</h3>
                                <div class="xb-item--content">
                                    Mon - Sat : 10.00-7.00 <br> Sunday : Closed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- contact info end -->

            <!-- contact start -->
            <!-- contact end -->

            <!-- google map start -->
            <div class="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5267323567655!2d78.4912294!3d17.434485599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1c6dde2609%3A0xd2dc31518ea779f7!2sACME%20%7C%20Industrial%20Equipments%20Company!5e0!3m2!1sen!2sin!4v1756449767390!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!-- google map end -->

        </main>
  `
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}>
      
    </div>
  )
}

export default page
