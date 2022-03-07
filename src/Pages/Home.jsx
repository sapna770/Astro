import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
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
                                                    <li className="active">
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
                                                    {/* Features */}
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


                                                    <li>
                                                        <Link to="/about" onClick={() => window.reload()} >Pages</Link>
                                                        <ul>


                                                            <li>
                                                                <Link to="/about" onClick={() => window.reload()}>About</Link>
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

                                                            {/* <!-- Team --> */}
                                                            <li>
                                                                <Link to="/team" onClick={() => window.reload()}>Team</Link>
                                                            </li>

                                                            {/* <!-- Faq --> */}

                                                            <li>
                                                                <Link to="/faq" onClick={() => window.reload()}>FAQ</Link>
                                                            </li>

                                                        </ul>
                                                    </li>
                                                    {/* <!-- eof pages --> */}

                                                    {/* <!-- gallery --> */}
                                                    <li>
                                                        <Link to="/gallery" onClick={() => window.reload()}>Gallery</Link>
                                                    </li>
                                                    {/* <!-- eof Gallery --> */}

                                                    {/* <!-- contacts --> */}
                                                    <li>
                                                        <Link to="/contact" onClick={() => window.reload()}>Contact</Link>
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

                    {/* <!--Section Top--> */}
                    <section className="ds section-home s-py-90 s-pb-lg-80 s-pt-xl-150 s-pb-xl-140">
                        <div className="container">
                            <div className="divider-50 divider-xl-65"></div>
                            <div className="row align-center">
                                <div className="col-lg-6 col-xl-5 order-lg-1 order-2 text-center text-md-left">
                                    <div className="divider-60 divider-lg-0"></div>
                                    <h5 className="special-heading bold mb-2 text-white">
                                        <span>Sun Signs</span>
                                    </h5>
                                    <p>
                                        There are 12 signs of the zodiac, each one taking up 30 degrees in your birth chart, manking a complete 360 degree circle
                                    </p>
                                    <div className="divider-35 divider-xl-55"></div>
                                    <div className="line line-left"></div>
                                    <div className="divider-40 divider-xl-60"></div>
                                    <h3 className="special-heading fw-500 mb-2 color-main2 big-size">
                                        <span>Ultimate Guide</span>
                                    </h3>
                                    <h3 className="special-heading fw-500 text-white fs-50">
                                        <span>To Astrology</span>
                                    </h3>
                                    <div className="divider-35 divider-xl-65"></div>
                                    <Link to="/about" onClick={() => window.reload()} className="btn btn-maincolor">Let’s Begin</Link>
                                </div>
                                <div className="col-lg-6 col-xl-7 order-lg-2 order-1 text-center text-lg-right">
                                    <img className="horoscope-image" src="images/horoscope.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--Section About--> */}
                    <section id="about" className="ds s-py-90 s-py-xl-150 c-gutter-50">
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
                                    <div className="divider-30 divider-xl-50"></div>
                                    <Link to="/pricing" onClick={() => window.reload()} className="btn btn-outline-maincolor btn-medium">Book Reading Now</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--Section Forecast--> */}
                    <section id="forecasts" className="ds section-forecast s-overlay s-pt-90 s-pb-30 s-pt-xl-150 s-pb-xl-90 c-gutter-60 c-mb-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center mb-0">
                                    <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                                        <span>Choose Your Zodiac Sign</span>
                                    </h3>
                                    <div className="line"></div>
                                    <p className="text-center fs-20 mt-4">
                                        <span>What’s Your Sign? Read Your Daily <br />Horoscope Today</span>
                                    </p>

                                    <div className="divider-40 divider-xl-60"></div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_aries"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Aries</a>
                                            </h5>
                                            <p>
                                                Mar 21 - Apr 19
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_taurus"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Taurus</a>
                                            </h5>
                                            <p>
                                                Apr 20 - May 20
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_gemini"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Gemini</a>
                                            </h5>
                                            <p>
                                                May 21 - Jun 20
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_cancer"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Cancer</a>
                                            </h5>
                                            <p>
                                                Jun 21 - Jul 22
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_leo"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Leo</a>
                                            </h5>
                                            <p>
                                                Jul 23 - Aug 22
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_virgo"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Virgo</a>
                                            </h5>
                                            <p>
                                                Aug 23 - Sep 22
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_libra"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Libra</a>
                                            </h5>
                                            <p>
                                                Sep 23 - Oct 22
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_scorpio"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Scorpio</a>
                                            </h5>
                                            <p>
                                                Oct 23 - Nov 21
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_sagittarius"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Sagittarius</a>
                                            </h5>
                                            <p>
                                                Nov 22 - Dec 21
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_capricornius"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Capricornius</a>
                                            </h5>
                                            <p>
                                                Dec 22 - Jan 19
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_aquarius"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Aquarius</a>
                                            </h5>
                                            <p>
                                                Jan 20 - Feb 18
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="vertical-item text-center  content-padding corner-box">
                                        <div className="item-content">
                                            <div className="icon-styled fs-50">
                                                <a href="forecast-page.html" className="color-darkgrey ico ico-icon_pisces"></a>
                                            </div>
                                            <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                                <a href="forecast-page.html">Pisces</a>
                                            </h5>
                                            <p>
                                                Feb 19 - Mar 20
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-* --> */}
                            </div>
                        </div>
                    </section>

                    {/* <!--Section Service--> */}
                    <section id="services" className="ds section-service s-overlay mobile-overlay s-py-90 s-py-xl-150 container-px-xl-0">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-5"></div>
                                <div className="col-xl-3 col-lg-6">
                                    <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                                        <span>Services</span>
                                    </p>
                                    <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                                        <span>Let’s Make <br />Some Magic</span>
                                    </h3>
                                </div>
                                <div className="col-xl-3 col-lg-6 text-center text-md-left">
                                    <p className="text-center text-md-left  mt-4 mt-lg-0">
                                        <span>They will provide the best free horoscope <br />astrology to you by analysing your sign.</span>
                                    </p>
                                    <div className="divider-35"></div>
                                    <Link to="/contact" onClick={() => window.reload()} className="btn btn-outline-maincolor btn-medium">Book Reading Now</Link>
                                </div>
                                <div className="col-xl-1"></div>
                                <div className="col-xl-3"></div>
                                <div className="col-xl-9">
                                    <div className="big-width">
                                        <div className="divider-55"></div>
                                        <div className="owl-carousel " data-responsive-lg="4" data-responsive-md="3" data-responsive-sm="2" data-responsive-xs="1" data-nav="false" data-margin="30" data-loop="true" data-autoplay="true">
                                            <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                                <div className="item-media">
                                                    <img src="images/services/img_8.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content overflow-hidden">
                                                    <div className="d-flex align-center flex-wrap">
                                                        <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                            <a href="service-single.html">Astrology </a>
                                                        </h5>
                                                        <a href="service-single.html" className="font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>

                                                    <p>
                                                        Integer sagittis nisi nec tortor fermentum aliquet.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                                <div className="item-media">
                                                    <img src="images/services/img_9.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content overflow-hidden">
                                                    <div className="d-flex align-center flex-wrap">
                                                        <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                            <a href="service-single.html">Zodiac</a>
                                                        </h5>
                                                        <a href="service-single.html" className="font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>

                                                    <p>
                                                        Integer sagittis nisi nec tortor fermentum aliquet.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                                <div className="item-media">
                                                    <img src="images/services/img_10.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content overflow-hidden">
                                                    <div className="d-flex align-center flex-wrap">
                                                        <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                            <a href="service-single.html">Numerology </a>
                                                        </h5>
                                                        <a href="service-single.html" className="font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>

                                                    <p>
                                                        Integer sagittis nisi nec tortor fermentum aliquet.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                                <div className="item-media">
                                                    <img src="images/services/img_11.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content overflow-hidden">
                                                    <div className="d-flex align-center flex-wrap">
                                                        <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                            <a href="service-single.html">Palmist </a>
                                                        </h5>
                                                        <a href="service-single.html" className="font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>

                                                    <p>
                                                        Integer sagittis nisi nec tortor fermentum aliquet.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                                <div className="item-media">
                                                    <img src="images/services/img_12.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content overflow-hidden">
                                                    <div className="d-flex align-center flex-wrap">
                                                        <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                            <a href="service-single.html">Vastu </a>
                                                        </h5>
                                                        <a href="service-single.html" className="font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>

                                                    <p>
                                                        Integer sagittis nisi nec tortor fermentum aliquet.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                                <div className="item-media">
                                                    <img src="images/services/img_13.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content overflow-hidden">
                                                    <div className="d-flex align-center flex-wrap">
                                                        <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                            <Link to="/yoga" onClick={() => window.reload()}>Yoga and meditation </Link>
                                                        </h5>
                                                        <Link to="/yoga" onClick={() => window.reload()} className="font-2"> Read Now <i className="fa fa-caret-right color-main ml-2"></i></Link>
                                                    </div>

                                                    <p>
                                                        Integer sagittis nisi nec tortor fermentum aliquet.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                                <div className="item-media">
                                                    <img src="images/services/img_10.jpg" alt="img" />
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content overflow-hidden">
                                                    <div className="d-flex align-center flex-wrap">
                                                        <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                            <a href="service-single.html">Healing </a>
                                                        </h5>
                                                        <a href="service-single.html" className="font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>

                                                    <p>
                                                        Integer sagittis nisi nec tortor fermentum aliquet.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider-35"></div>
                                        <div className="owl-custom-nav romb">
                                            <a href="#" className="owl-prev"><i className="ico ico-right-arrow"></i></a>
                                            <a href="#" className="owl-next"><i className="ico ico-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Section Shop --> */}
                    <section id="shop" className="ds section-shop s-pt-85 s-pb-60 s-pt-xl-145 s-pb-xl-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6">
                                    <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                                        <span>Shop</span>
                                    </p>
                                    <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                                        <span>Our Best <br />Products</span>
                                    </h3>
                                </div>
                                <div className="col-xl-7 col-lg-6 text-center text-md-left">
                                    <p className="mt-4 mt-lg-0">
                                        <span>As the leader of the pack, it is but hard to miss your charm, Leo and everything about you screams attention. </span>
                                    </p>
                                    <div className="divider-35"></div>
                                    <Link to='/shop' onClick={() => window.reload()} className="btn btn-outline-maincolor btn-medium">Book Shopping Now</Link>
                                </div>
                                <div className="col-12">
                                    <div className="divider-55"></div>
                                    <div className="owl-carousel products" data-responsive-lg="4" data-responsive-md="3" data-responsive-sm="2" data-responsive-xs="1" data-nav="false" data-margin="10" data-loop="true" data-autoplay="true">
                                        <div className="product">
                                            <div className="product-inner">
                                                <span className="onsale">Sale!</span>
                                                <a href="shop-product-right.html">
                                                    <img src="images/shop/34.jpg" alt="img" />
                                                </a>

                                                <div className="product-wrap">
                                                    <h2 className="woocommerce-loop-product__title">
                                                        <a href="shop-product-right.html">Treasure Yellow </a>
                                                    </h2>
                                                    <div className="product_meta">
                                                        <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Magic </a>, <a href="shop-right.html" rel="tag">Attributes</a></span>
                                                    </div>
                                                    {/* <div className="star-rating">
                                                      <span>Rated <strong className="rating">4.00</strong> out of 5</span>
                                                  </div> */}
                                                   
                                                    <div className="price-wrap">
                                                        <span className="price">
                                                            <span>
                                                                <span>$</span>58,99
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="shop-cart.html" className="button product_type_simple add_to_cart_button">Add to
                                                            cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="product-inner">

                                                <a href="shop-product-right.html">
                                                    <img src="images/shop/35.jpg" alt="img" />
                                                </a>

                                                <div className="product-wrap">
                                                    <h2 className="woocommerce-loop-product__title">
                                                        <a href="shop-product-right.html">Treasure Yellow </a>
                                                    </h2>
                                                    <div className="product_meta">
                                                        <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Magic </a>, <a href="shop-right.html" rel="tag">Attributes</a></span>
                                                    </div>
                                                    {/* <div className="star-rating">
                                                      <span>Rated <strong className="rating">4.00</strong> out of 5</span>
                                                  </div> */}
                                                    <div className="price-wrap">
                                                        <span className="price">
                                                            <span>
                                                                <span>$</span>58,99
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="shop-cart.html" className="button product_type_simple add_to_cart_button">Add to
                                                            cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="product-inner">

                                                <a href="shop-product-right.html">
                                                    <img src="images/shop/36.jpg" alt="img" />
                                                </a>

                                                <div className="product-wrap">
                                                    <h2 className="woocommerce-loop-product__title">
                                                        <a href="shop-product-right.html">Treasure Yellow </a>
                                                    </h2>
                                                    <div className="product_meta">
                                                        <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Magic </a>, <a href="shop-right.html" rel="tag">Attributes</a></span>
                                                    </div>
                                                    {/* <div className="star-rating">
                                                      <span >Rated <strong className="rating">4.00</strong> out of 5</span>
                                                  </div> */}
                                                    <div className="price-wrap">
                                                        <span className="price">
                                                            <span>
                                                                <span>$</span>58,99
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="shop-cart.html" className="button product_type_simple add_to_cart_button">Add to
                                                            cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product">
                                            <div className="product-inner">

                                                <a href="shop-product-right.html">
                                                    <img src="images/shop/37.jpg" alt="img" />
                                                </a>

                                                <div className="product-wrap">
                                                    <h2 className="woocommerce-loop-product__title">
                                                        <a href="shop-product-right.html">Treasure Yellow </a>
                                                    </h2>
                                                    <div className="product_meta">
                                                        <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Magic </a>, <a href="shop-right.html" rel="tag">Attributes</a></span>
                                                    </div>
                                                    {/* <div className="star-rating">
                                                      <span >Rated <strong className="rating">4.00</strong> out of 5</span>
                                                  </div> */}
                                                    <div className="price-wrap">
                                                        <span className="price">
                                                            <span>
                                                                <span>$</span>58,99
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="shop-cart.html" className="button product_type_simple add_to_cart_button">Add to
                                                            cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <li className="product">
                                          <div className="product-inner">

                                              <a href="shop-product-%40%40type.html">
                                                  <img src="images/shop/39.jpg" alt="img"/>
                                              </a>

                                              <div className="product-wrap">
                                                  <h2 className="woocommerce-loop-product__title">
                                                      <a href="shop-product-%40%40type.html">Treasure Yellow </a>
                                                  </h2>
                                                  <div className="product_meta">
                                                      <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Magic </a>, <a href="shop-right.html" rel="tag">Attributes</a></span>
                                                  </div>
                                                  {/* <div className="star-rating">
                                                      <span>Rated <strong className="rating">4.00</strong> out of 5</span>
                                                  </div> */}
                                                  <div className="price-wrap">
                                                      <span className="price">
                                                          <span>
                                                              <span>$</span>58,99
                                                          </span>
                                                      </span>
                                                      <a rel="nofollow" href="shop-cart.html" className="button product_type_simple add_to_cart_button">Add to
                                                          cart</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                      <li className="product">
                                          <div className="product-inner">

                                              <a href="shop-product-%40%40type.html">
                                                  <img src="images/shop/34.jpg" alt="img"/>
                                              </a>

                                              <div className="product-wrap">
                                                  <h2 className="woocommerce-loop-product__title">
                                                      <a href="shop-product-%40%40type.html">Treasure Yellow </a>
                                                  </h2>
                                                  <div className="product_meta">
                                                      <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Magic </a>, <a href="shop-right.html" rel="tag">Attributes</a></span>
                                                  </div>
                                                  {/* <div className="star-rating">
                                                      <span>Rated <strong className="rating">4.00</strong> out of 5</span>
                                                  </div> */}
                                                  <div className="price-wrap">
                                                      <span className="price">
                                                          <span>
                                                              <span>$</span>58,99
                                                          </span>
                                                      </span>
                                                        <Link rel="nofollow" to="/cart" onClick={() => window.reload()} className="button product_type_simple add_to_cart_button">Add to
                                                          cart</Link>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                      <li className="product">
                                          <div className="product-inner">

                                              <a href="shop-product-%40%40type.html">
                                                  <img src="images/shop/35.jpg" alt="img"/>
                                              </a>

                                              <div className="product-wrap">
                                                  <h2 className="woocommerce-loop-product__title">
                                                      <a href="shop-product-%40%40type.html">Treasure Yellow </a>
                                                  </h2>
                                                  <div className="product_meta">
                                                      <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Magic </a>, <a href="shop-right.html" rel="tag">Attributes</a></span>
                                                  </div>
                                                  {/* <div className="star-rating">
                                                        <span >Rated
                                                            <strong className="rating">
                                                                4.00
                                                            </strong>
                                                            out of 5
                                                            </span>
                                                  </div> */}
                                                  <div className="price-wrap">
                                                      <span className="price">
                                                          <span>
                                                              <span>$</span>58,99
                                                          </span>
                                                      </span>
                                                        <Link rel="nofollow" to="/cart" onClick={() => window.reload()} className="button product_type_simple add_to_cart_button">Add to
                                                          cart</Link>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Section Faqs --> */}
                    <section id="faq" className="ds s-py-90 s-pt-xl-145 s-pb-xl-130">
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

                    {/* <!-- Section Blog --> */}
                    <section id="blog" className="ds bs pattern s-py-90 s-py-xl-150">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6">
                                    <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                                        <span>Blog</span>
                                    </p>
                                    <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                                        <span>Last Materials In Blog</span>
                                    </h3>
                                </div>
                                <div className="col-xl-7 col-lg-6 text-center text-md-left">
                                    <p className="text-center text-md-left  mt-4 mt-lg-0">
                                        <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                    </p>
                                    <div className="divider-35"></div>
                                    <a href="blog-right.html" className="btn btn-outline-maincolor btn-medium">Book Reading Now</a>
                                </div>
                                <div className="col-12">
                                    <div className="divider-55"></div>
                                    <div className="shortcode-post-grid-tilled-1">
                                        <div className="special-img">
                                            <img src="images/gallery/22.jpg" alt="img" />
                                        </div>
                                        <article className="vertical-item text-center text-md-left post type-post status-publish format-standard has-post-thumbnail mt-0">
                                            <div className="item-content">
                                                <header className="entry-header">
                                                    <h4 className="entry-title mb-3 links-maincolor2">
                                                        <a className="fs-30" href="blog-single-right.html" rel="bookmark">
                                                            The Secret Revealed – Why Millennials Love Astrology
                                                        </a>
                                                    </h4>
                                                </header>
                                                {/* <!-- .entry-header --> */}

                                                <div className="entry-content mt-20">
                                                    <p>
                                                        Aged around 25, 26, 27, 28, 29, 30, 31, 32, 33, 34 - Millennials born 1986 through 1995, in their late twenties and early thirties, love
                                                    </p>
                                                </div>
                                                {/* <!-- .entry-content --> */}
                                                <div className="entry-footer flex-row mt-4">
                                                    <div className="entry-meta">
                                                        <span>
                                                            <a href="blog-single-right.html" rel="bookmark">
                                                                <time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">18 may 2020</time>
                                                            </a>
                                                        </span>
                                                    </div>
                                                    {/* <!-- .entry-meta --> */}
                                                    <div className="mt-0 ml-auto">
                                                        <a href="blog-single-right.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- .item-content --> */}
                                        </article>
                                        {/* <!-- #post-## --> */}
                                        <article className="vertical-item text-center text-md-left post type-post status-publish format-standard has-post-thumbnail mt-0">
                                            <div className="item-content">
                                                <header className="entry-header">
                                                    <h4 className="entry-title mb-3 links-maincolor2">
                                                        <a className="fs-30" href="blog-single-right.html" rel="bookmark">
                                                            Born 1990-1995? Your Astrology for 2020-2029 is Calling
                                                        </a>
                                                    </h4>
                                                </header>
                                                {/* <!-- .entry-header --> */}

                                                <div className="entry-content mt-20">
                                                    <p>
                                                        The boom in Millennial Astrology (for people born 1990 to 1995) means horoscopes are now known factors for anyone aged around
                                                    </p>
                                                </div>
                                                {/* <!-- .entry-content --> */}
                                                <div className="entry-footer flex-row mt-4">
                                                    <div className="entry-meta">
                                                        <span>
                                                            <a href="blog-single-right.html" rel="bookmark">
                                                                <time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">18 may 2020</time>
                                                            </a>
                                                        </span>
                                                    </div>
                                                    {/* <!-- .entry-meta --> */}
                                                    <div className="mt-0 ml-auto">
                                                        <a href="blog-single-right.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- .item-content --> */}
                                        </article>
                                        {/* <!-- #post-## --> */}
                                    </div>
                                    <div className="divider-60"></div>
                                    <div className="owl-carousel " data-responsive-lg="3" data-responsive-md="3" data-responsive-sm="2" data-responsive-xs="1" data-nav="false" data-margin="60" data-loop="true" data-autoplay="true">
                                        <article className="vertical-item bg-darkblue text-center text-lg-left box-shadow content-padding padding-big post type-post status-publish format-standard has-post-thumbnail">
                                            <div className="item-media post-thumbnail">
                                                <img src="images/gallery/08.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" href="blog-single-right.html"></a>
                                                </div>
                                            </div>
                                            {/* <!-- .post-thumbnail --> */}
                                            <div className="item-content">
                                                <header className="entry-header">
                                                    <h4 className="entry-title mb-3 links-maincolor2">
                                                        <a className="fs-30" href="blog-single-right.html" rel="bookmark">
                                                            Study Astrology and Tarot for Yourself –
                                                        </a>
                                                    </h4>
                                                </header>
                                                {/* <!-- .entry-header --> */}

                                                <div className="entry-content mt-20">
                                                    <p>
                                                        Jupiter is in Capricorn from Tuesday 3rd December 2019.
                                                    </p>
                                                </div>
                                                {/* <!-- .entry-content --> */}
                                                <div className="entry-footer flex-row mt-4">
                                                    <div className="entry-meta">
                                                        <span>
                                                            <a href="blog-single-right.html" rel="bookmark">
                                                                <time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">18 may 2020</time>
                                                            </a>
                                                        </span>
                                                    </div>
                                                    {/* <!-- .entry-meta --> */}
                                                    <div className="mt-0 ml-auto">
                                                        <a href="blog-single-right.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- .item-content --> */}
                                        </article>
                                        {/* <!-- #post-## --> */}
                                        <article className="vertical-item bg-darkblue text-center text-lg-left box-shadow content-padding padding-big post type-post status-publish format-standard has-post-thumbnail">
                                            <div className="item-media post-thumbnail">
                                                <img src="images/gallery/09.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" href="blog-single-right.html"></a>
                                                </div>
                                            </div>
                                            {/* <!-- .post-thumbnail --> */}
                                            <div className="item-content ">
                                                <header className="entry-header">
                                                    <h4 className="entry-title mb-3 links-maincolor2">
                                                        <a className="fs-30" href="blog-single-right.html" rel="bookmark">
                                                            Wrong Birth Time Horoscopes
                                                        </a>
                                                    </h4>
                                                </header>
                                                {/* <!-- .entry-header --> */}

                                                <div className="entry-content mt-20">
                                                    <p>
                                                        Jupiter is in Capricorn from Tuesday 3rd December 2019.
                                                    </p>
                                                </div>
                                                {/* <!-- .entry-content --> */}
                                                <div className="entry-footer flex-row mt-4">
                                                    <div className="entry-meta">
                                                        <span>
                                                            <a href="blog-single-right.html" rel="bookmark">
                                                                <time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">18 may 2020</time>
                                                            </a>
                                                        </span>
                                                    </div>
                                                    {/* <!-- .entry-meta --> */}
                                                    <div className="mt-0 ml-auto">
                                                        <a href="blog-single-right.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- .item-content --> */}
                                        </article>
                                        {/* <!-- #post-## --> */}
                                        <article className="vertical-item bg-darkblue text-center text-lg-left box-shadow content-padding padding-big post type-post status-publish format-standard has-post-thumbnail">
                                            <div className="item-media post-thumbnail">
                                                <img src="images/gallery/10.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" href="blog-single-right.html"></a>
                                                </div>
                                            </div>
                                            {/* <!-- .post-thumbnail --> */}
                                            <div className="item-content ">
                                                <header className="entry-header">
                                                    <h4 className="entry-title mb-3 links-maincolor2">
                                                        <a className="fs-30" href="blog-single-right.html" rel="bookmark">
                                                            200 Astrology Secrets for 2020
                                                        </a>
                                                    </h4>
                                                </header>
                                                {/* <!-- .entry-header --> */}

                                                <div className="entry-content mt-20">
                                                    <p>
                                                        Jupiter is in Capricorn from Tuesday 3rd December 2019.
                                                    </p>
                                                </div>
                                                {/* <!-- .entry-content --> */}
                                                <div className="entry-footer flex-row mt-4">
                                                    <div className="entry-meta">
                                                        <span>
                                                            <a href="blog-single-right.html" rel="bookmark">
                                                                <time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">18 may 2020</time>
                                                            </a>
                                                        </span>
                                                    </div>
                                                    {/* <!-- .entry-meta --> */}
                                                    <div className="mt-0 ml-auto">
                                                        <a href="blog-single-right.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- .item-content --> */}
                                        </article>
                                        {/* <!-- #post-## --> */}
                                        <article className="vertical-item bg-darkblue text-center text-lg-left box-shadow content-padding padding-big post type-post status-publish format-standard has-post-thumbnail">
                                            <div className="item-media post-thumbnail">
                                                <img src="images/gallery/11.jpg" alt="img" />
                                                <div className="media-links">
                                                    <a className="abs-link" href="blog-single-right.html"></a>
                                                </div>
                                            </div>
                                            {/* <!-- .post-thumbnail --> */}
                                            <div className="item-content">
                                                <header className="entry-header">
                                                    <h4 className="entry-title mb-3 links-maincolor2">
                                                        <a className="fs-30" href="blog-single-right.html" rel="bookmark">
                                                            Study Astrology and Tarot for Yourself –
                                                        </a>
                                                    </h4>
                                                </header>
                                                {/* <!-- .entry-header --> */}

                                                <div className="entry-content mt-20">
                                                    <p>
                                                        Jupiter is in Capricorn from Tuesday 3rd December 2019.
                                                    </p>
                                                </div>
                                                {/* <!-- .entry-content --> */}
                                                <div className="entry-footer flex-row mt-4">
                                                    <div className="entry-meta">
                                                        <span>
                                                            <a href="blog-single-right.html" rel="bookmark">
                                                                <time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">18 may 2020</time>
                                                            </a>
                                                        </span>
                                                    </div>
                                                    {/* <!-- .entry-meta --> */}
                                                    <div className="mt-0 ml-auto">
                                                        <a href="blog-single-right.html" className="mt-30 font-2">Read Now <i className="fa fa-caret-right color-main ml-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- .item-content --> */}
                                        </article>
                                        {/* <!-- #post-## --> */}
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <div className="divider-55 divider-xl-115"></div>
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
                                            <Link to="/pricing" className="btn btn-medium btn-shop">Purchase</Link>
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
                                            <Link to="/pricing" className="btn btn-medium btn-shop">Purchase</Link>
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
                                            <Link to="/pricing" className="btn btn-medium btn-shop">Purchase</Link>
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
                                                <Link to="/contact" onClick={() => window.reload()}>Contact US</Link>
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
            {/* <!-- eof #canvas --> */}
        </div>
    )
}

export default Home