import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="preloader">
                <div className="preloader_image pulse"></div>
            </div>
            <div id="canvas">
                <div id="box_wrapper">

                    {/* <!-- template sections --> */}


                    <div className="header_absolute ">

                        {/* <!--topline section visible only on small screens|--> */}
                        <section className="page_topline ds s-py-30 ">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-4 col-md-4 text-lg-left text-center">
                                        <Link to="/" onClick={() => window.reload()} className="logo" >
                                            <img src="images/logo.png" alt="img" />
                                            <span className="logo-text color-darkgrey">Astro</span>
                                        </Link>
                                    </div>
                                    <div className="col-xl-6 col-lg-8 col-md-8 some-links text-center text-lg-right d-flex justify-content-center justify-content-md-end align-items-center mt-2 mt-md-0">
                                        <a className="fs-24 links-maincolor-hover font-2" href="tel:+88003532455"><mark>8 800</mark> 353-24-55</a>
                                        <Link to='/about' onClick={() => window.reload()} className="btn btn-outline-maincolor btn-medium  d-none d-md-block">
                                            Book Reading Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!--eof topline--> */}

                        {/* <!-- header with two Bootstrap columns - left for logo and right for navigation and includes (search, social icons, additional links and buttons etc --> */}
                        <header className="page_header ds ms s-overlay justify-nav-start">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-9 col-1 order-2 order-xl-1">
                                        <div className="nav-wrap">

                                            {/* <!-- main nav start --> */}
                                            <nav className="top-nav">
                                                <ul className="nav sf-menu">
                                                    <li>
                                                        <Link to="/" onClick={() => window.reload()}>Home</Link>
                                                    </li>

                                                    {/* <!-- blog --> */}
                                                    <li>
                                                        <a href="blog-right.html">Blog</a>
                                                        <ul>

                                                            <li>
                                                                <a href="blog-right.html">Right Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-left.html">Left Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-full.html">No Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-grid.html">Blog Grid</a>
                                                            </li>

                                                            <li>
                                                                <a href="blog-single-right.html">Post</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="blog-single-right.html">Right Sidebar</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="blog-single-left.html">Left Sidebar</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="blog-single-full.html">No Sidebar</a>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                            <li>
                                                                <a href="blog-single-video-right.html">Video Post</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="blog-single-video-right.html">Right Sidebar</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="blog-single-video-left.html">Left Sidebar</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="blog-single-video-full.html">No Sidebar</a>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                        </ul>
                                                    </li>
                                                    {/* <!-- eof blog --> */}

                                                    {/* <!-- features --> */}
                                                    <li>
                                                        <a href="#">Features</a>
                                                        <div className="mega-menu">
                                                            <ul className="mega-menu-row">
                                                                <li className="mega-menu-col">
                                                                    <a href="#">Headers</a>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="header1.html">Header Type 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header2.html">Header Type 2</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header3.html">Header Type 3</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header4.html">Header Type 4</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header5.html">Header Type 5</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header6.html">Header Type 6</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col">
                                                                    <a href="#">Side Menus</a>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="header-side.html">Push Left</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header-side-right.html">Push Right</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header-side-slide.html">Slide Left</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header-side-slide-right.html">Slide Right</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header-side-sticked.html">Sticked Left</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header-side-sticked-right.html">Sticked Right</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col">
                                                                    <a href="title1.html">Title Sections</a>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="title1.html">Title section 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="title2.html">Title section 2</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="title3.html">Title section 3</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="title4.html">Title section 4</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="title5.html">Title section 5</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="title6.html">Title section 6</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col">
                                                                    <a href="footer1.html#footer">Footers</a>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="footer1.html#footer">Footer Type 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="footer2.html#footer">Footer Type 2</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="footer3.html#footer">Footer Type 3</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="footer4.html#footer">Footer Type 4</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="footer5.html#footer">Footer Type 5</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="footer6.html#footer">Footer Type 6</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col">
                                                                    <a href="copyright1.html#copyright">Copyright</a>

                                                                    <ul>
                                                                        <li>
                                                                            <a href="copyright1.html#copyright">Copyright 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="copyright2.html#copyright">Copyright 2</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="copyright3.html#copyright">Copyright 3</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="copyright4.html#copyright">Copyright 4</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="copyright5.html#copyright">Copyright 5</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="copyright6.html#copyright">Copyright 6</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        {/* <!-- eof mega menu --> */}
                                                    </li>
                                                    {/* <!-- eof features --> */}

                                                    {/* <!-- pages --> */}

                                                    <li>
                                                        <Link to="/about" onClick={() => window.reload()}>Pages</Link>
                                                        <ul>
                                                            <li>
                                                                <Link to="/" onClick={() => window.reload()}>About</Link>
                                                            </li>

                                                            <li>
                                                                <Link to="/services" onClick={() => window.reload()}>Services</Link>
                                                            </li>

                                                            <li>
                                                                <Link to="/forecast" onClick={() => window.reload()}>Forecasts</Link>
                                                            </li>

                                                            <li>
                                                                <Link to="/pricing" onClick={() => window.reload()}>Pricing</Link>
                                                            </li>

                                                            {/* <!-- shop --> */}
                                                            <li>
                                                                <Link to="/shop" onClick={() => window.reload()}>Shop</Link>
                                                                <ul>
                                                                    <li>
                                                                        <a href="shop-account-dashboard.html">Account</a>
                                                                        <ul>

                                                                            <li>
                                                                                <Link to="/accountdetail" onClick={() => window.reload()}>Account Detail</Link>
                                                                            </li>
                                                                          
                                                                            <li>
                                                                                <a href="shop-account-orders.html">Orders</a>
                                                                            </li>
                                                                            
                                                                            <li>
                                                                                <Link to="/reset_password" onClick={() => window.reload()}>Password Reset</Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link to="/loginlogout" onClick={() => window.reload()}>Login/Logout</Link>
                                                                            </li>

                                                                        </ul>
                                                                    </li>


                                                                    <li>
                                                                        <Link to="/product_detail" onClick={() => window.reload()}>Product Detail</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/cart" onClick={() => window.reload()}>Cart</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/checkout" onClick={() => window.reload()}>Checkout</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/orderreceived" onClick={() => window.reload()}>Order Received</Link>
                                                                    </li>

                                                                </ul>
                                                            </li>
                                                            {/* <!-- eof shop --> */}

                                                            {/* <!-- features --> */}


                                                            {/* <!-- events --> */}
                                                            <li>
                                                                <Link to="/events" onClick={() => window.reload()}>Events</Link>
                                                            </li>
                                                            {/* <!-- eof events --> */}

                                                            {/* <!-- team --> */}
                                                            <li>
                                                                <Link to="/team" onClick={() => window.reload()}>Team</Link>
                                                            </li>
                                                            {/* <!-- faq --> */}
                                                            <li>
                                                                <Link to="/faq" onClick={() => window.reload()}>FAQ</Link>
                                                            </li>

                                                        </ul>
                                                    </li>
                                                    {/* <!-- eof pages --> */}

                                                    {/* <!-- gallery --> */}
                                                    <li>
                                                        <a href="gallery-image.html">Gallery</a>
                                                    </li>
                                                    {/* <!-- eof Gallery --> */}

                                                    {/* <!-- contacts --> */}
                                                    <li>
                                                        <Link to="/contact">Contact</Link>
                                                    </li>
                                                    {/* <!-- eof contacts --> */}
                                                </ul>
                                            </nav>
                                            {/* <!-- eof main nav --> */}

                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-9 order-1 order-xl-2 text-xl-right text-left">
                                        <span className="social-icons">

                                            <a href="https://www.facebook.com/" className="fa fa-facebook " title="facebook"></a>
                                            <a href="https://twitter.com/" className="fa fa-twitter " title="twitter"></a>
                                            <a href="https://www.linkedin.com/" className="fa fa-linkedin " title="linkedin"></a>
                                            <a href="https://www.instagram.com/" className="fa fa-instagram " title="instagram"></a>
                                            <a href="https://www.youtube.com/" className="fa fa-youtube-play " title="youtube"></a>

                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- header toggler --> */}
                            <span className="toggle_menu"><span></span></span>
                        </header>
                    </div>

                    <section className="page_title ds s-overlay s-parallax s-pt-130 s-pt-xl-150 s-pb-65">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-12">
                                    <h1>About Us</h1>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/" onClick={() => window.reload()}>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Pages</a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            About Us
                                        </li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* <!--Section About--> */}
                    <section className="ds s-pt-90 s-pt-xl-150 c-gutter-50">
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-lg-6">
                                    <img src="images/about-img.png" alt="img" />
                                </div>
                                <div className="col-lg-6 text-center text-md-left">
                                    <div className="divider-60 divider-lg-0 "></div>
                                    <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                                        <span>About Us</span>
                                    </p>
                                    <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                                        <span>We Are Welcome</span>
                                    </h3>
                                    <div className="divider-35"></div>
                                    <p>
                                        We have the World Famous Astrologers on the Best Astrology Website in India, practising both Indian Astrology and Western Astrology for astrology today.
                                    </p>
                                    <p>
                                        They will provide the best free horoscope astrology to you by analysing your birth chart and your astrology sign.
                                    </p>
                                    <div className="shortcode-simple-counter counter-layout-2">
                                        <div className="counter_wrap justify-content-md-start">
                                            <div className="counter-wrap">
                                                <h2 className="counter counter-size" data-from="0" data-to="25" data-speed="1000">25</h2>
                                            </div>
                                            <p className="counter-text ">
                                                <span className="counter-add">Years Of<br /><span className="color-dark fw-500">Experience</span></span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="divider-30 divider-lg-30"></div>
                                    <Link to="/pricing" onClick={() => window.reload()} className="btn btn-outline-maincolor btn-medium">Book Reading Now</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--Section Gallery--> */}
                    <section className="ds s-pt-85 s-pt-xl-145 container-px-xl-40">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 text-center">

                                    <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                                        <span>Our Gallery</span>
                                    </h3>
                                    <div className="line"></div>
                                    <p className="text-center fs-20 mt-4">
                                        <span>When something appears out of nothing <br />or something disappears.</span>
                                    </p>

                                    <div className="divider-40 divider-xl-60"></div>

                                    <div className=" grid-container gap-5 gallery-layout-2" data-filters=".gallery-filters">

                                        <div className="grid-box astrology">
                                            <div className="vertical-item item-gallery ">
                                                <div className="item-media">
                                                    <img src="images/gallery/quote_2.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <div className="links-wrap">
                                                            <a className="link-anchor" title="" href="gallery-single.html"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid-box taro horoscope">
                                            <div className="vertical-item item-gallery ">
                                                <div className="item-media">
                                                    <img src="images/gallery/14.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <div className="links-wrap">
                                                            <a className="link-anchor" title="" href="gallery-single.html"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid-box stone magic">
                                            <div className="vertical-item item-gallery ">
                                                <div className="item-media">
                                                    <img src="images/gallery/19.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <div className="links-wrap">
                                                            <a className="link-anchor" title="" href="gallery-single.html"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid-box horoscope stone">
                                            <div className="vertical-item item-gallery ">
                                                <div className="item-media">
                                                    <img src="images/gallery/12.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <div className="links-wrap">
                                                            <a className="link-anchor" title="" href="gallery-single.html"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid-box astrology horoscope">
                                            <div className="vertical-item item-gallery">
                                                <div className="item-media">
                                                    <img src="images/gallery/21.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <div className="links-wrap">
                                                            <a className="link-anchor" title="" href="gallery-single.html"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid-box magic horoscope">
                                            <div className="vertical-item item-gallery">
                                                <div className="item-media">
                                                    <img src="images/gallery/20.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <div className="links-wrap">
                                                            <a className="link-anchor" title="" href="gallery-single.html"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <!-- .isotope-wrapper--> */}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Section Service --> */}
                    <section className="ds s-pt-90 s-pb-60 s-pt-xl-150 s-pb-xl-120 container-px-xl-0 c-gutter-0">
                        <div className="container-fluid">
                            <div className="row align-center">
                                <div className="col-lg-6 col-xl-5 text-center text-md-left section-special-2 left small-section">
                                    <div className="z-index-2">
                                        <div>
                                            <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                                                <span>Services</span>
                                            </p>
                                            <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                                                <span>Our Best <br />Services</span>
                                            </h3>
                                            <p className="text-center text-md-left  mt-4">
                                                <span>They will provide the best free horoscope <br />astrology to you by analysing your sign.</span>
                                            </p>
                                            <div className="divider-35"></div>
                                            <div className="owl-custom-nav">
                                                <a href="#" className="owl-prev"><i className="ico ico-right-arrow"></i></a>
                                                <a href="#" className="owl-next"><i className="ico ico-right-arrow"></i></a>
                                            </div>
                                            <div className="fw-divider-space divider-40 divider-lg-0"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-7">
                                    <div className="owl-carousel owl-three-opacity" data-responsive-lg="3" data-responsive-md="1" data-responsive-sm="2" data-responsive-xs="1" data-nav="false" data-margin="10" data-loop="true">
                                        <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                                            <div className="item-media">
                                                <img src="images/services/img_1.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" title="" href="service-single.html"></a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mt-0 links-maincolor2">
                                                    <a href="service-single.html">Astrology </a>
                                                </h5>
                                                <p>
                                                    Integer sagittis nisi nec tortor fermentum aliquet.
                                                </p>
                                                <a href="service-single.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                                            <div className="item-media">
                                                <img src="images/services/img_2.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" title="" href="service-single.html"></a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mt-0 links-maincolor2">
                                                    <a href="service-single.html">Zodiac</a>
                                                </h5>
                                                <p>
                                                    Integer sagittis nisi nec tortor fermentum aliquet.
                                                </p>
                                                <a href="service-single.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                                            <div className="item-media">
                                                <img src="images/services/img_3.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" title="" href="service-single.html"></a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mt-0 links-maincolor2">
                                                    <a href="service-single.html">Numerology </a>
                                                </h5>
                                                <p>
                                                    Integer sagittis nisi nec tortor fermentum aliquet.
                                                </p>
                                                <a href="service-single.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                                            <div className="item-media">
                                                <img src="images/services/img_4.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" title="" href="service-single.html"></a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mt-0 links-maincolor2">
                                                    <a href="service-single.html">Palmist </a>
                                                </h5>
                                                <p>
                                                    Integer sagittis nisi nec tortor fermentum aliquet.
                                                </p>
                                                <a href="service-single.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                                            <div className="item-media">
                                                <img src="images/services/img_5.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" title="" href="service-single.html"></a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mt-0 links-maincolor2">
                                                    <a href="service-single.html">Vastu </a>
                                                </h5>
                                                <p>
                                                    Integer sagittis nisi nec tortor fermentum aliquet.
                                                </p>
                                                <a href="service-single.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                                            <div className="item-media">
                                                <img src="images/services/img_6.jpg" alt="img" />
                                                <div className="media-links">
                                                   
                                                    <Link to="/yoga" className="abs-link" title=""  onClick={() => window.reload()}></Link>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mt-0 links-maincolor2">
                                                    <Link to="/yoga" onClick={() => window.reload()}>Yoga and meditation </Link>
                                                </h5>
                                                <p>
                                                    Integer sagittis nisi nec tortor fermentum aliquet.
                                                </p>
                                                <Link to="/yoga" onClick={() => window.reload()} className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></Link>
                                            </div>
                                        </div>
                                        <div className="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
                                            <div className="item-media">
                                                <img src="images/services/img_7.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" title="" href="service-single.html"></a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mt-0 links-maincolor2">
                                                    <a href="service-single.html">Healing</a>
                                                </h5>
                                                <p>
                                                    Integer sagittis nisi nec tortor fermentum aliquet.
                                                </p>
                                                <a href="service-single.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Section features --> */}
                    <section className="ds bs features-section s-overlay s-overlay-half-left s-py-90 s-py-xl-150 container-px-xl-30">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-6 col-xl-5 text-center text-lg-left left section-special-2">
                                    <div className="z-index-2">
                                        <div>
                                            <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                                                <span>Advantages</span>
                                            </p>
                                            <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                                                <span>Benefits of <br />Learning Magic</span>
                                            </h3>
                                            <p className="text-center text-md-left  mt-4">
                                                <span>They will provide the best free horoscope <br />astrology to you by analysing your sign.</span>
                                            </p>
                                            <div className="divider-60 divider-lg-0"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 section-special-3">
                                    <div className="z-index-2 ds opacity">
                                        <div>
                                            <div className="media">
                                                <div className="fs-50">
                                                    <i className="ico ico-moon"></i>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mt-1 mb-2 color-main2">
                                                        Acts as a Financial Planner
                                                    </h6>
                                                    <p>
                                                        The planet in the 1st house of your horoscope and its lord influence the skills and talent in a person.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divider-40 divider-xl-60"></div>
                                            <div className="media">
                                                <div className="fs-50">
                                                    <i className="ico ico-tarot"></i>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mt-1 mb-2 color-main2">
                                                        Makes You Confident and Optimistic
                                                    </h6>
                                                    <p>
                                                        If you hone the skills you are naturally good at and use it to your benefit, you will not just save your time
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divider-40 divider-xl-60"></div>
                                            <div className="media">
                                                <div className="fs-50">
                                                    <i className="ico ico-gem"></i>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mt-1 mb-2 color-main2">
                                                        Helps in Decision Making
                                                    </h6>
                                                    <p>
                                                        A person with Ascendant lord Venus will be inclined towards creative, artistic and innovative fields.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divider-40 divider-xl-60"></div>
                                            <div className="media">
                                                <div className="fs-50">
                                                    <i className="ico ico-diamond"></i>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mt-1 mb-2 color-main2">
                                                        Tells if Your Partner Is Rich and Attractive
                                                    </h6>
                                                    <p>
                                                        Horoscope not just informs you about your skills but also tells you a specific career which will benefit you the most.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Section Team --> */}
                    <section className="ds s-pb-90 s-pt-85 s-pb-xl-150 s-pt-xl-145">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">

                                    <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                                        <span>My Colleagues</span>
                                    </h3>
                                    <div className="line"></div>
                                    <p className="text-center fs-20 mt-4">
                                        <span>What’s Your Sign? Read Your Daily <br />Horoscope Today</span>
                                    </p>

                                    <div className="divider-40 divider-xl-60"></div>

                                    <div className="owl-carousel" data-responsive-lg="3" data-responsive-md="2" data-responsive-sm="1" data-responsive-xs="1" data-nav="false" data-margin="60" data-loop="true">
                                        <div className="vertical-item bg-darkgrey text-center team-layout box-shadow content-padding">
                                            <div className="item-media">
                                                <img src="images/team/02.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" title="" href="team-single.html"></a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mb-0 links-maincolor2">
                                                    <a href="team-single.html">Jeffrey M. Kaufman</a>
                                                </h5>

                                                <p className="team-position mb-30">
                                                    Astrologer
                                                </p>
                                                <p className="social-icons">
                                                    <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                                                    <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                                                    <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                                                </p>

                                            </div>
                                        </div>
                                        <div className="vertical-item bg-darkgrey text-center team-layout box-shadow content-padding">
                                            <div className="item-media">
                                                <img src="images/team/03.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" title="" href="team-single.html"></a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mb-0 links-maincolor2">
                                                    <a href="team-single.html">Hazel E. Mills</a>
                                                </h5>

                                                <p className="team-position mb-30">
                                                    Astrologer
                                                </p>
                                                <p className="social-icons">
                                                    <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                                                    <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                                                    <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                                                </p>

                                            </div>
                                        </div>
                                        <div className="vertical-item bg-darkgrey text-center team-layout box-shadow content-padding">
                                            <div className="item-media">
                                                <img src="images/team/04.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" title="" href="team-single.html"></a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mb-0 links-maincolor2">
                                                    <a href="team-single.html">Saul B. Schank</a>
                                                </h5>

                                                <p className="team-position mb-30">
                                                    Astrologer
                                                </p>
                                                <p className="social-icons">
                                                    <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                                                    <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                                                    <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                                                </p>

                                            </div>
                                        </div>
                                        <div className="vertical-item bg-darkgrey text-center team-layout box-shadow content-padding">
                                            <div className="item-media">
                                                <img src="images/team/05.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" title="" href="team-single.html"></a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mb-0 links-maincolor2">
                                                    <a href="team-single.html">Tammy M. Smith</a>
                                                </h5>

                                                <p className="team-position mb-30">
                                                    Astrologer
                                                </p>
                                                <p className="social-icons">
                                                    <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                                                    <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                                                    <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                                                </p>

                                            </div>
                                        </div>
                                        <div className="vertical-item bg-darkgrey text-center team-layout box-shadow content-padding">
                                            <div className="item-media">
                                                <img src="images/team/06.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" title="" href="team-single.html"></a>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <h5 className="mb-0 links-maincolor2">
                                                    <a href="team-single.html">Ethel A. Johnson</a>
                                                </h5>

                                                <p className="team-position mb-30">
                                                    Astrologer
                                                </p>
                                                <p className="social-icons">
                                                    <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                                                    <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                                                    <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Section Pricing --> */}
                    <section className="ds pattern s-parallax bs s-pb-90 s-pt-85 s-pb-xl-150 s-pt-xl-145">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">

                                    <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                                        <span>Purchase Monthly Plan</span>
                                    </h3>
                                    <div className="line"></div>
                                    <p className="text-center fs-20 mt-4">
                                        <span>What’s Your Sign? Read Your Daily <br />Horoscope Today</span>
                                    </p>

                                    <div className="divider-40 divider-xl-60"></div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="pricing-plan price-layout-1 bg-darkgrey">
                                        <div className="icon-styled fs-50">
                                            <i className="color-darkgrey ico ico-diamond"></i>
                                        </div>
                                        <div className="plan-name">
                                            <div className="divider-25"></div>
                                            <h3 className="mt-0">
                                                Starter
                                            </h3>
                                            <div className="plan-description">
                                                Starting Business
                                            </div>
                                        </div>
                                        <div className="plan-features text-center">
                                            <ul className="list-bordered">
                                                <li>Ask One Question</li>
                                                <li>Half-Hour Reading</li>
                                                <li>Newborn / Child Reading</li>
                                                <li>Relationship Reading</li>
                                            </ul>
                                        </div>
                                        <div className="price-wrap">
                                            <div className="wrapper">
                                                <span className="plan-sign">$</span>
                                                <span className="plan-price">25</span>
                                            </div>
                                            <span className="plan-decimals text-left">Per <br />Month</span>
                                        </div>
                                        <div className="plan-button">
                                            <Link to="/pricing" onClick={() => window.reload()} className="btn btn-medium btn-shop">Purchase</Link>
                                        </div>
                                    </div>
                                    <div className="divider-60 divider-lg-0"></div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="pricing-plan price-layout-1 cs plan-featured">
                                        <div className="icon-styled fs-50">
                                            <i className="text-white ico ico-gem"></i>
                                        </div>
                                        <div className="plan-name">
                                            <div className="divider-25"></div>
                                            <h3 className="mt-0">
                                                Pro
                                            </h3>
                                            <div className="plan-description">
                                                Starting Business
                                            </div>
                                        </div>
                                        <div className="plan-features text-center">
                                            <ul className="list-bordered">
                                                <li>Ask One Question</li>
                                                <li>Half-Hour Reading</li>
                                                <li>Newborn / Child Reading</li>
                                                <li>Relationship Reading</li>
                                            </ul>
                                        </div>
                                        <div className="price-wrap">
                                            <div className="wrapper">
                                                <span className="plan-sign">$</span>
                                                <span className="plan-price">73</span>
                                            </div>
                                            <span className="plan-decimals text-left">Per <br />Month</span>
                                        </div>
                                        <div className="plan-button">
                                            <Link to="/pricing" onClick={() => window.reload()} className="btn btn-medium btn-shop">Purchase</Link>
                                        </div>
                                    </div>
                                    <div className="divider-60 divider-lg-0"></div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="pricing-plan price-layout-1 bg-darkgrey">
                                        <div className="icon-styled fs-50">
                                            <i className="color-darkgrey ico ico-gems"></i>
                                        </div>
                                        <div className="plan-name">
                                            <div className="divider-25"></div>
                                            <h3 className="mt-0">
                                                Business
                                            </h3>
                                            <div className="plan-description">
                                                Starting Business
                                            </div>
                                        </div>
                                        <div className="plan-features text-center">
                                            <ul className="list-bordered">
                                                <li>Ask One Question</li>
                                                <li>Half-Hour Reading</li>
                                                <li>Newborn / Child Reading</li>
                                                <li>Relationship Reading</li>
                                            </ul>
                                        </div>
                                        <div className="price-wrap">
                                            <div className="wrapper">
                                                <span className="plan-sign">$</span>
                                                <span className="plan-price">109</span>
                                            </div>
                                            <span className="plan-decimals text-left">Per <br />Month</span>
                                        </div>
                                        <div className="plan-button">
                                            <Link to="/pricing" onClick={() => window.reload()} className="btn btn-medium btn-shop">Purchase</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Section Faqs --> */}
                    <section className="ds s-py-90 s-pt-xl-145 s-pb-xl-130">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                                        <span>What Clients Are Saying</span>
                                    </h3>
                                    <div className="line"></div>
                                    <p className="text-center fs-20 mt-4">
                                        <span>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod.</span>
                                    </p>

                                    <div className="divider-40 divider-xl-60"></div>

                                    <div className="owl-carousel quote-carousel owl-navigation" data-responsive-lg="3" data-responsive-md="3" data-responsive-sm="1" data-responsive-xs="1" data-nav="false" data-margin="50" data-loop="true" data-dots="false" data-autoplay="true" data-center="true">
                                        <div className="quote-item vertical quote-layout-2">
                                            <div className="wrap-img">
                                                <img src="images/gallery/quote_1.jpg" alt="img" />
                                            </div>
                                            <div className="wrap-content">
                                                <div className="quote-image">
                                                    <img src="images/team/comment5.png" alt="img" />
                                                </div>
                                                <div className="quote-title">
                                                    <h5 className="mb-0 color-main2 bold">Sonny V. Love</h5>
                                                    <p className="mb-0 text-white">Happy Customer</p>
                                                </div>
                                                <div className="quote-content">
                                                    <blockquote>
                                                        <p>
                                                            Writing case studies was a daunting task for us. We didn’t know where to begin or what questions to ask.
                                                        </p>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quote-item vertical quote-layout-2">
                                            <div className="wrap-img">
                                                <img src="images/gallery/quote_2.jpg" alt="img" />
                                            </div>
                                            <div className="wrap-content">
                                                <div className="quote-image">
                                                    <img src="images/team/comment6.png" alt="img" />
                                                </div>
                                                <div className="quote-title">
                                                    <h5 className="mb-0 color-main2 bold">Stephie J. Bellamy</h5>
                                                    <p className="mb-0 text-white">Happy Customer</p>
                                                </div>
                                                <div className="quote-content">
                                                    <blockquote>
                                                        <p>
                                                            Writing case studies was a daunting task for us. We didn’t know where to begin or what questions to ask.
                                                        </p>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quote-item vertical quote-layout-2">
                                            <div className="wrap-img">
                                                <img src="images/gallery/quote_3.jpg" alt="img" />
                                            </div>
                                            <div className="wrap-content">
                                                <div className="quote-image">
                                                    <img src="images/team/comment7.png" alt="img" />
                                                </div>
                                                <div className="quote-title">
                                                    <h5 className="mb-0 color-main2 bold">Karen J. Hogan</h5>
                                                    <p className="mb-0 text-white">Happy Customer</p>
                                                </div>
                                                <div className="quote-content">
                                                    <blockquote>
                                                        <p>
                                                            Writing case studies was a daunting task for us. We didn’t know where to begin or what questions to ask.
                                                        </p>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="page_footer ds ms s-py-90 s-pb-lg-60 s-pt-xl-150 s-pb-xl-120">
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-xl-5 col-lg-5 text-center text-lg-left animate" data-animation="fadeInUp">
                                    <Link to="/" onClick={() => window.reload()} className="logo" >
                                        <img src="images/logo.png" alt="img" />
                                        <span className="logo-text color-darkgrey">Astro</span>
                                    </Link>
                                    <div className="divider-60 divider-lg-0"></div>
                                </div>
                                <div className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left animate" data-animation="fadeInUp">
                                    <div className="widget widget_nav_menu">
                                        <h3>Services</h3>
                                        <ul className="menu">
                                            <li className="menu-item">
                                                <Link to="/shop" onClick={() => window.reload()}>Shop</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/services" onClick={() => window.reload()}>Services</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="divider-60 divider-lg-0"></div>
                                </div>
                                <div className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left animate" data-animation="fadeInUp">
                                    <div className="widget widget_nav_menu">
                                        <h3>About Me</h3>
                                        <ul className="menu">
                                            <li className="menu-item">
                                                <a href="index_blocks.html">Homeblocks</a>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/about" onClick={() => window.reload()}>About</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/contact" onClick={() => window.reload()}>Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="divider-60 divider-lg-0"></div>
                                </div>
                                <div className="col-xl-3 col-lg-3 align-self-start text-center text-lg-left animate" data-animation="fadeInUp">
                                    <div className="widget widget_text">
                                        <h3>Contact Info</h3>
                                        <p>
                                            477 Jehovah Drive <br />
                                            Lexington, VA 24450
                                        </p>
                                        <p className="social-icons">
                                            <a href="https://www.facebook.com/" className="fa fa-facebook" title="facebook"></a>
                                            <a href="https://twitter.com/" className="fa fa-twitter" title="twitter"></a>
                                            <a href="https://www.instagram.com/" className="fa fa-instagram" title="instagram"></a>
                                            <a href="https://www.linkedin.com/" className="fa fa-linkedin" title="linkedin"></a>
                                            <a href="https://www.youtube.com/" className="fa fa-youtube-play" title="youtube"></a>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </footer>

                    <section className="page_copyright ds ms s-py-25 s-bordertop-container">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 text-center">
                                    <p>&copy; Copyright <span className="copyright_year">2020</span> All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
                {/* <!-- eof #box_wrapper --> */}
            </div>
        </div>
    )
}

export default About