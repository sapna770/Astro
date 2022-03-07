import React from 'react'
import {Link} from 'react-router-dom'

const Pricing = () => {
  return (
      <div>
            <div className="preloader">
                <div className="preloader_image pulse"></div>
            </div>

          <div id="canvas">
              <div id="box_wrapper">
                  <div className="header_absolute ">
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

                      <header className="page_header ds ms s-overlay justify-nav-start">
                          <div className="container">
                              <div className="row align-items-center">
                                  <div className="col-xl-9 col-1 order-2 order-xl-1">
                                      <div className="nav-wrap">

                                          <nav className="top-nav">
                                              <ul className="nav sf-menu">
                                                  <li className="active">
                                                      <Link to ="/"onClick={() => window.reload()}>Home</Link>
                                                  </li>
                                                  {/* <!-- Blog--> */}
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
                                                  {/* <!-- Features--> */}
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
                                                  </li>
                                                  {/* !-- Pages --> */}
                                                  <li>
                                                      <Link to="/" onClick={() => window.reload()} >Pages</Link>
                                                      <ul>
                                                          {/* !--About --> */}
                                                          <li>
                                                              <Link to="/about" onClick={() => window.reload()}>About</Link>
                                                          </li>
                                                          {/* !-- Services --> */}
                                                          <li>
                                                              <Link to="/services" onClick={() => window.reload()} >Services</Link>
                                                          </li>
                                                          {/* !-- Forecast --> */}
                                                          <li>
                                                              <Link to="/forecast" onClick={() => window.reload()}>Forecasts</Link>
                                                          </li>
                                                          {/* !-- Pricing --> */}
                                                          <li>
                                                              <Link to="/pricing" onClick={() => window.reload()}>Pricing</Link>
                                                          </li>
                                                          {/* !-- Shop --> */}
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
                                                                      <a href="shop-cart.html">Cart</a>
                                                                  </li>
                                                                  <li>
                                                                      <Link to="/checkout" onClick={() => window.reload()}>Checkout</Link>
                                                                  </li>
                                                                  <li>
                                                                      <Link to="/orderreceived" onClick={() => window.reload()}>Order Received</Link>
                                                                  </li>

                                                              </ul>
                                                          </li>

                                                          {/* !-- Events --> */}
                                                          <li>
                                                              <Link to="/events" onClick={() => window.reload()}>Events</Link>
                                                          </li>
                                                        
                                                          {/* !-- Team --> */}
                                                          <li>
                                                              <Link to="/team" onClick={() => window.reload()}>Team</Link>
                                                          </li>
                                                          {/* !-- faq --> */}
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
                                                    <Link to ='/contact'onClick={() => window.reload()}>Contact</Link>
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
                                  <h1>Pricing</h1>
                                  <ol className="breadcrumb">
                                      <li className="breadcrumb-item">
                                       <Link to ='/'onClick={()=>window.reload()}>Home</Link>
                                      </li>
                                      <li className="breadcrumb-item">
                                          <a href="#">Pages</a>
                                      </li>
                                      <li className="breadcrumb-item active">
                                          Pricing
                                      </li>
                                  </ol>
                              </div>

                          </div>
                      </div>
                  </section>


                  <section className="ds s-pt-90 s-pb-30 s-pt-xl-150 s-pb-xl-90 c-mb-60 c-gutter-60">
                      <div className="container">

                          <div className="row">

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
                                          <span className="plan-decimals text-left">Per <br/>Month</span>
                                      </div>
                                      <div className="plan-button">
                                          <Link to="/contact"  onClick={() => window.reload()} className="btn btn-medium btn-shop">Purchase</Link>
                                      </div>
                                  </div>
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
                                          <span className="plan-decimals text-left">Per <br/>Month</span>
                                      </div>
                                      <div className="plan-button">
                                          <Link to="/contact"onClick={() => window.reload()} className="btn btn-medium btn-shop">Purchase</Link>
                                      </div>
                                  </div>
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
                                          <span className="plan-decimals text-left">Per <br/>Month</span>
                                      </div>
                                      <div className="plan-button">
                                          <Link to="/contact" onClick={() => window.reload()} className="btn btn-medium btn-shop">Purchase</Link>
                                      </div>
                                  </div>
                              </div>

                          </div>

                      </div>

                  </section>

                  <section className="ds bs s-pb-90 s-pt-85 s-pb-xl-150 s-pt-xl-145 c-gutter-30">
                      <div className="container">
                          <div className="row">
                              <div className="col-12 text-center">

                                  <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                                      <span>Purchase Monthly Plan</span>
                                  </h3>
                                  <div className="line"></div>
                                  <p className="text-center fs-20 mt-4">
                                      <span>What’s Your Sign? Read Your Daily <br/>Horoscope Today</span>
                                  </p>

                                  <div className="divider-60"></div>
                              </div>
                              <div className="col-lg-6">
                                  <div id="accordion02" role="tablist">
                                      <div className="card">
                                          <div className="card-header" role="tab" id="collapse09_header">
                                              <h5>
                                                  <a data-toggle="collapse" href="#collapse09" aria-expanded="false" aria-controls="collapse09">
                                                      How do I start learning astrology?
                                                  </a>
                                              </h5>
                                          </div>
                                          <div id="collapse09" className="collapse show" role="tabpanel" aria-labelledby="collapse09_header" data-parent="#accordion02">
                                              <div className="card-body">
                                                  <p>
                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                  </p>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="card">
                                          <div className="card-header" role="tab" id="collapse08_header">
                                              <h5>
                                                  <a className="collapsed" data-toggle="collapse" href="#collapse08" aria-expanded="true" aria-controls="collapse08">
                                                      Do you need to be psychic to be an astrologer?
                                                  </a>
                                              </h5>
                                          </div>

                                          <div id="collapse08" className="collapse" role="tabpanel" aria-labelledby="collapse08_header" data-parent="#accordion02">
                                              <div className="card-body">
                                                  <p>
                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                  </p>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="card">
                                          <div className="card-header" role="tab" id="collapse10_header">
                                              <h5>
                                                  <a className="collapsed" data-toggle="collapse" href="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                                      Do you need to be psychic to be an astrologer?
                                                  </a>
                                              </h5>
                                          </div>
                                          <div id="collapse10" className="collapse" role="tabpanel" aria-labelledby="collapse10_header" data-parent="#accordion02">
                                              <div className="card-body">
                                                  <p>
                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="divider-60 divider-lg-0"></div>
                              </div>
                              <div className="col-lg-6">
                                  <div id="accordion01" role="tablist">
                                      <div className="card">
                                          <div className="card-header" role="tab" id="collapse01_header">
                                              <h5>
                                                  <a className="collapsed" data-toggle="collapse" href="#collapse01" aria-expanded="true" aria-controls="collapse01">
                                                      How do I start learning astrology?
                                                  </a>
                                              </h5>
                                          </div>

                                          <div id="collapse01" className="collapse" role="tabpanel" aria-labelledby="collapse01_header" data-parent="#accordion01">
                                              <div className="card-body">
                                                  <p>
                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                  </p>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="card">
                                          <div className="card-header" role="tab" id="collapse02_header">
                                              <h5>
                                                  <a className="collapsed" data-toggle="collapse" href="#collapse02" aria-expanded="false" aria-controls="collapse02">
                                                      Do you need to be psychic to be an astrologer?
                                                  </a>
                                              </h5>
                                          </div>
                                          <div id="collapse02" className="collapse" role="tabpanel" aria-labelledby="collapse02_header" data-parent="#accordion01">
                                              <div className="card-body">
                                                  <p>
                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                  </p>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="card">
                                          <div className="card-header" role="tab" id="collapse04_header">
                                              <h5>
                                                  <a className="collapsed" data-toggle="collapse" href="#collapse04" aria-expanded="false" aria-controls="collapse04">
                                                      Why aren't astrologers all rich?
                                                  </a>
                                              </h5>
                                          </div>
                                          <div id="collapse04" className="collapse" role="tabpanel" aria-labelledby="collapse04_header" data-parent="#accordion01">
                                              <div className="card-body">
                                                  <p>
                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                  </p>
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
                                              <Link to="/contact" onClick={() => window.reload()}>Contact us</Link>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="divider-60 divider-lg-0"></div>
                              </div>
                              <div className="col-xl-3 col-lg-3 align-self-start text-center text-lg-left animate" data-animation="fadeInUp">
                                  <div className="widget widget_text">
                                      <h3>Contact Info</h3>
                                      <p>
                                          477 Jehovah Drive <br/>
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

export default Pricing