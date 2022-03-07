import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
      <div>
          <div class="preloader">
              <div class="preloader_image pulse"></div>
          </div>
          <div id="canvas">
              <div id="box_wrapper">

                  {/* <!-- template sections --> */}


                  <div class="header_absolute ">

                      {/* <!--topline section visible only on small screens|--> */}
                      <section class="page_topline ds s-py-30 ">
                          <div class="container">
                              <div class="row align-items-center">
                                  <div class="col-xl-6 col-lg-4 col-md-4 text-lg-left text-center">
                                      <Link to="/" onClick={() => window.reload()} className="logo" >
                                          <img src="images/logo.png" alt="img" />
                                          <span className="logo-text color-darkgrey">Astro</span>
                                      </Link>
                                  </div>
                                  <div class="col-xl-6 col-lg-8 col-md-8 some-links text-center text-lg-right d-flex justify-content-center justify-content-md-end align-items-center mt-2 mt-md-0">
                                      <a class="fs-24 links-maincolor-hover font-2" href="tel:+88003532455"><mark>8 800</mark> 353-24-55</a>
                                      <Link to='/about' onClick={() => window.reload()} className="btn btn-outline-maincolor btn-medium  d-none d-md-block">
                                          Book Reading Now
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      {/* <!--eof topline--> */}

                      {/* <!-- header with two Bootstrap columns - left for logo and right for navigation and includes (search, social icons, additional links and buttons etc --> */}
                      <header class="page_header ds ms s-overlay justify-nav-start">
                          <div class="container">
                              <div class="row align-items-center">
                                  <div class="col-xl-9 col-1 order-2 order-xl-1">
                                      <div class="nav-wrap">

                                          {/* <!-- main nav start --> */}
                                          <nav class="top-nav">
                                              <ul class="nav sf-menu">
                                                  <li class="active">
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

                                                  <li>
                                                      <a href="#">Features</a>
                                                      <div class="mega-menu">
                                                          <ul class="mega-menu-row">
                                                              <li class="mega-menu-col">
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
                                                              <li class="mega-menu-col">
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
                                                              <li class="mega-menu-col">
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
                                                              <li class="mega-menu-col">
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
                                                              <li class="mega-menu-col">
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
                                                      <Link to="/about" onClick={() => window.reload()}>Pages</Link>
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
                                                          <li>
                                                              <Link to="/events" onClick={() => window.reload()}>Events</Link>
                                                          </li>

                                                          <li>
                                                              <Link to="/team" onClick={() => window.reload()}>Team</Link>
                                                          </li>

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
                                  <div class="col-xl-3 col-9 order-1 order-xl-2 text-xl-right text-left">
                                      <span class="social-icons">

                                          <a href="https://www.facebook.com/" class="fa fa-facebook " title="facebook"></a>
                                          <a href="https://twitter.com/" class="fa fa-twitter " title="twitter"></a>
                                          <a href="https://www.linkedin.com/" class="fa fa-linkedin " title="linkedin"></a>
                                          <a href="https://www.instagram.com/" class="fa fa-instagram " title="instagram"></a>
                                          <a href="https://www.youtube.com/" class="fa fa-youtube-play " title="youtube"></a>

                                      </span>
                                  </div>
                              </div>
                          </div>
                          {/* <!-- header toggler --> */}
                          <span class="toggle_menu"><span></span></span>
                      </header>

                  </div>

                  <section class="page_title ds s-overlay s-parallax s-pt-130 s-pt-xl-150 s-pb-65">
                      <div class="container">
                          <div class="row">

                              <div class="col-md-12">
                                  <h1>Gallery</h1>
                                  <ol class="breadcrumb">
                                      <li class="breadcrumb-item">
                                          <Link to="/" onClick={() => window.reload()}>Home</Link>
                                      </li>
                                      <li class="breadcrumb-item">
                                          <a href="#">Pages</a>
                                      </li>
                                      <li class="breadcrumb-item active">
                                          Gallery
                                      </li>
                                  </ol>
                              </div>

                          </div>
                      </div>
                  </section>

                  <section class="ds s-pt-90 s-pt-xl-155 s-pb-30 s-pb-xl-85">
                      <div class="container">
                          <div class="row">
                              <div class="col-lg-12">
                                  <div class="row justify-content-center">
                                      <div class="col-md-10 col-xl-8">
                                          <div class="filters gallery-filters text-lg-right">
                                              <a href="#" data-filter="*" class="active selected">All</a>
                                              <a href="#" data-filter=".astrology">Astrology</a>
                                              <a href="#" data-filter=".magic">Magic</a>
                                              <a href="#" data-filter=".taro">Taro</a>
                                              <a href="#" data-filter=".horoscope">Horoscope</a>
                                              <a href="#" data-filter=".stone">Stone</a>
                                          </div>
                                      </div>
                                  </div>


                                  <div class="row isotope-wrapper masonry-layout c-mb-60" data-filters=".gallery-filters">

                                      <div class="col-xl-4 col-md-6 magic stone">

                                          <div class="vertical-item box-shadow bs ds bordered content-padding">
                                              <div class="item-media">
                                                  <img src="images/gallery/08.jpg" alt="img"/>
                                                      <div class="media-links">
                                                          <div class="links-wrap">
                                                              <a class="link-anchor" title="" href="gallery-single.html"></a>
                                                          </div>
                                                      </div>
                                              </div>
                                              <div class="item-content">
                                                  <p class="cat-links">
                                                      <a href="#">Magic</a>,
                                                      <a href="#">Stone</a>
                                                  </p>
                                                  <h6 class="mb-1 mt-0">
                                                      <a href="gallery-single.html">Lorem ipsum dolor sit</a>
                                                  </h6>
                                              </div>
                                          </div>

                                      </div>

                                      <div class="col-xl-4 col-md-6 horoscope astrology">
                                          <div class="vertical-item box-shadow bs ds bordered content-padding">
                                              <div class="item-media">
                                                  <img src="images/gallery/09.jpg" alt="img"/>
                                                      <div class="media-links">
                                                          <div class="links-wrap">
                                                              <a class="link-anchor" title="" href="gallery-single.html"></a>
                                                          </div>
                                                      </div>
                                              </div>
                                              <div class="item-content">
                                                  <p class="cat-links">
                                                      <a href="#">Astrology</a>
                                                      <a href="#">Horoscope</a>
                                                  </p>
                                                  <h6 class="mb-1 mt-0">
                                                      <a href="gallery-single.html">Amet consetetur sadipscing</a>
                                                  </h6>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="col-xl-4 col-md-6 taro stone horoscope">
                                          <div class="vertical-item box-shadow bs ds bordered content-padding">
                                              <div class="item-media">
                                                  <img src="images/gallery/10.jpg" alt="img"/>
                                                      <div class="media-links">
                                                          <div class="links-wrap">
                                                              <a class="link-anchor" title="" href="gallery-single.html"></a>
                                                          </div>
                                                      </div>
                                              </div>
                                              <div class="item-content">
                                                  <p class="cat-links">
                                                      <a href="#">Taro</a>
                                                      <a href="#">Stone</a>
                                                      <a href="#">Horoscope</a>
                                                  </p>
                                                  <h6 class="mb-1 mt-0">
                                                      <a href="gallery-single.html">Elitr sed diam nonumy</a>
                                                  </h6>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="col-xl-4 col-md-6 magic taro">
                                          <div class="vertical-item box-shadow bs ds bordered content-padding">
                                              <div class="item-media">
                                                  <img src="images/gallery/11.jpg" alt="img"/>
                                                      <div class="media-links">
                                                          <div class="links-wrap">
                                                              <a class="link-anchor" title="" href="gallery-single.html"></a>
                                                          </div>
                                                      </div>
                                              </div>
                                              <div class="item-content">
                                                  <p class="cat-links">
                                                      <a href="#">Taro</a>
                                                      <a href="#">Magic</a>
                                                  </p>
                                                  <h6 class="mb-1 mt-0">
                                                      <a href="gallery-single.html">Tempor invidunt ut</a>
                                                  </h6>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="col-xl-4 col-md-6 horoscope astrology">
                                          <div class="vertical-item box-shadow bs ds bordered content-padding">
                                              <div class="item-media">
                                                  <img src="images/gallery/12.jpg" alt="img"/>
                                                      <div class="media-links">
                                                          <div class="links-wrap">
                                                              <a class="link-anchor" title="" href="gallery-single.html"></a>
                                                          </div>
                                                      </div>
                                              </div>
                                              <div class="item-content">
                                                  <p class="cat-links">
                                                      <a href="#">Horoscope</a>
                                                      <a href="#">Astrology</a>
                                                  </p>
                                                  <h6 class="mb-1 mt-0">
                                                      <a href="gallery-single.html">Labore et dolore magna</a>
                                                  </h6>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="col-xl-4 col-md-6 taro stone astrology">
                                          <div class="vertical-item box-shadow bs ds bordered content-padding">
                                              <div class="item-media">
                                                  <img src="images/gallery/13.jpg" alt="img"/>
                                                      <div class="media-links">
                                                          <div class="links-wrap">
                                                              <a class="link-anchor" title="" href="gallery-single.html"></a>
                                                          </div>
                                                      </div>
                                              </div>
                                              <div class="item-content">
                                                  <p class="cat-links">
                                                      <a href="#">Taro</a>
                                                      <a href="#">Stone</a>
                                                      <a href="#">Astrology</a>
                                                  </p>
                                                  <h6 class="mb-1 mt-0">
                                                      <a href="gallery-single.html">Aliquyam erat sed diam</a>
                                                  </h6>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="col-xl-4 col-md-6 magic stone horoscope">
                                          <div class="vertical-item box-shadow bs ds bordered content-padding">
                                              <div class="item-media">
                                                  <img src="images/gallery/14.jpg" alt="img"/>
                                                      <div class="media-links">
                                                          <div class="links-wrap">
                                                              <a class="link-anchor" title="" href="gallery-single.html"></a>
                                                          </div>
                                                      </div>
                                              </div>
                                              <div class="item-content">
                                                  <p class="cat-links">
                                                      <a href="#">Horoscope</a>
                                                      <a href="#">Stone</a>
                                                      <a href="#">Magic</a>
                                                  </p>
                                                  <h6 class="mb-1 mt-0">
                                                      <a href="gallery-single.html">Voluptua vero</a>
                                                  </h6>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="col-xl-4 col-md-6 magic taro astrology">
                                          <div class="vertical-item box-shadow bs ds bordered content-padding">
                                              <div class="item-media">
                                                  <img src="images/gallery/15.jpg" alt="img"/>
                                                      <div class="media-links">
                                                          <div class="links-wrap">
                                                              <a class="link-anchor" title="" href="gallery-single.html"></a>
                                                          </div>
                                                      </div>
                                              </div>
                                              <div class="item-content">
                                                  <p class="cat-links">
                                                      <a href="#">Astrology</a>
                                                      <a href="#">Taro</a>
                                                      <a href="#">Magic</a>
                                                  </p>
                                                  <h6 class="mb-1 mt-0">
                                                      <a href="gallery-single.html">Eos et accusam justo duo</a>
                                                  </h6>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                                  {/* <!-- .isotope-wrapper--> */}

                              </div>

                          </div>

                      </div>
                  </section>

                  <footer class="page_footer ds ms s-py-90 s-pb-lg-60 s-pt-xl-150 s-pb-xl-120">
                      <div class="container">
                          <div class="row align-center">
                              <div class="col-xl-5 col-lg-5 text-center text-lg-left animate" data-animation="fadeInUp">
                                  <Link to="/" onClick={() => window.reload()} className="logo" >
                                      <img src="images/logo.png" alt="img" />
                                      <span className="logo-text color-darkgrey">Astro</span>
                                  </Link>
                                  <div class="divider-60 divider-lg-0"></div>
                              </div>
                              <div class="col-xl-2 col-lg-2 align-self-start text-center text-lg-left animate" data-animation="fadeInUp">
                                  <div class="widget widget_nav_menu">
                                      <h3>Services</h3>
                                      <ul class="menu">
                                          <li class="menu-item">
                                              <Link to="/shop" onClick={() => window.reload()}>Shop</Link>
                                          </li>
                                          <li class="menu-item">
                                              <Link to="/services" onClick={() => window.reload()} >Services</Link>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="divider-60 divider-lg-0"></div>
                              </div>
                              <div class="col-xl-2 col-lg-2 align-self-start text-center text-lg-left animate" data-animation="fadeInUp">
                                  <div class="widget widget_nav_menu">
                                      <h3>About Me</h3>
                                      <ul class="menu">
                                          <li class="menu-item">
                                              <a href="index_blocks.html">Homeblocks</a>
                                          </li>
                                          <li class="menu-item">
                                              <Link to="/about" onClick={() => window.reload()} >About</Link>
                                          </li>
                                          <li class="menu-item">
                                              <Link to="/contact" onClick={() => window.reload()} >Contact</Link>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="divider-60 divider-lg-0"></div>
                              </div>
                              <div class="col-xl-3 col-lg-3 align-self-start text-center text-lg-left animate" data-animation="fadeInUp">
                                  <div class="widget widget_text">
                                      <h3>Contact Info</h3>
                                      <p>
                                          477 Jehovah Drive <br/>
                                              Lexington, VA 24450
                                      </p>
                                      <p class="social-icons">
                                          <a href="https://www.facebook.com/" class="fa fa-facebook" title="facebook"></a>
                                          <a href="https://twitter.com/" class="fa fa-twitter" title="twitter"></a>
                                          <a href="https://www.instagram.com/" class="fa fa-instagram" title="instagram"></a>
                                          <a href="https://www.linkedin.com/" class="fa fa-linkedin" title="linkedin"></a>
                                          <a href="https://www.youtube.com/" class="fa fa-youtube-play" title="youtube"></a>
                                      </p>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </footer>

                  <section class="page_copyright ds ms s-py-25 s-bordertop-container">
                      <div class="container">
                          <div class="row align-items-center">
                              <div class="col-md-12 text-center">
                                  <p>&copy; Copyright <span class="copyright_year">2020</span> All Rights Reserved</p>
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

export default Gallery