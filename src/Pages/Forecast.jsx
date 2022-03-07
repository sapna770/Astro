import React from 'react'
import { Link } from 'react-router-dom'

const Forecast = () => {
    return (
        <div>
            <div className="preloader">
                <div className="preloader_image pulse"></div>
            </div>

            {/* <!-- wrappers for visual page editor and boxed version of template --> */}
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
                                                        <Link to="/">Home</Link>
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
                                                        <Link to="/">Pages</Link>
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
                                                                <Link to="/shop" onClick={() => window.reload()} >Shop</Link>
                                                                {/* <a href="shop-right.html">Shop</a> */}
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

                                                            {/* <!-- Teams --> */}
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

                    <section className="page_title ds s-overlay s-parallax s-pt-130 s-pt-xl-150 s-pb-65">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-12">
                                    <h1>Forecast</h1>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/" onClick={() => window.reload()}>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Pages</a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            Forecast
                                        </li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="ds s-pt-90 s-pb-30 s-pt-xl-150 s-pb-xl-90 c-gutter-60 c-mb-60">
                        <div className="container">
                            <div className="row">
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
                                {/* 0415<!-- .col-* --> */}
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

                    <section className="ds bs section-form c-gutter-0 container-px-0 s-overlay mobile-overlay">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 ml-auto section-special">
                                    <div className="z-index-2 text-center text-md-left">
                                        <div>
                                            <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                                                <span>Form</span>
                                            </p>
                                            <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                                                <span>Your Free Personal <br />Horoscope</span>
                                            </h3>
                                            <p className="text-center text-md-left  mt-4">
                                                <span>We have the World Famous Astrologers on the Best Astrology <br />Website in India, practising both Indian Astrology and Western <br />Astrology for astrology today. </span>
                                            </p>

                                            <div className="divider-40"></div>
                                            <h5 className="special-heading text-center text-md-left color-main2">
                                                <span>Contact Us</span>
                                            </h5>
                                            <div className="divider-30"></div>
                                            <form className="contact-form c-mb-10 c-gutter-10" method="post" action="https://html.modernwebtemplates.com/">

                                                <div className="row c-gutter-10">

                                                    <div className="col-xl-4">
                                                        <div className="form-group has-placeholder">
                                                            <label htmlfor="name">Full Name <span className="required">*</span></label>
                                                            <input type="text" aria-required="true" size="30" value="" name="name" id="name" className="form-control" placeholder="Name" />
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-4">
                                                        <div className="form-group has-placeholder">
                                                            <label htmlfor="email">Email address<span className="required">*</span></label>
                                                            <input type="email" aria-required="true" size="30" value="" name="email" id="email" className="form-control" placeholder="Email" />
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-4">
                                                        <div className="form-group">
                                                            <select name="cat" id="cat" className="postform">
                                                                <option value="-1">Gender</option>
                                                                <option className="level-0" value="1">Male</option>
                                                                <option className="level-0" value="2">Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row c-gutter-10">

                                                    <div className="col-xl-3">
                                                        <div className="form-group has-placeholder">
                                                            <label htmlfor="born">Born Place<span className="required">*</span></label>
                                                            <input type="text" aria-required="true" size="30" value="" name="phone" id="born" className="form-control" placeholder="Born Place" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="form-group has-placeholder">
                                                            <label htmlfor="month">Month<span className="required">*</span></label>
                                                            <input type="text" aria-required="true" size="30" value="" name="subject" id="month" className="form-control" placeholder="Month" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="form-group has-placeholder">
                                                            <label htmlfor="day">Day<span className="required">*</span></label>
                                                            <input type="text" aria-required="true" size="30" value="" name="subject" id="day" className="form-control" placeholder="Day" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="form-group has-placeholder">
                                                            <label htmlfor="year">Year<span className="required">*</span></label>
                                                            <input type="text" aria-required="true" size="30" value="" name="subject" id="year" className="form-control" placeholder="Year" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">

                                                    <div className="col-sm-12 mt-xl-50 mt-30">
                                                        <div className="form-group">
                                                            <button type="submit" id="contact_form_submit" name="contact_submit" className="btn btn-maincolor btn-medium">Send
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
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
            </div>
        </div>
    )
}

export default Forecast