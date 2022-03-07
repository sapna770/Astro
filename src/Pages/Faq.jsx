import React from 'react'
import {Link} from 'react-router-dom'

const Faq = () => {
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

                                                          {/* <!-- events --> */}
                                                          <li>
                                                              <Link to="/events" onClick={() => window.reload()}>Events</Link>
                                                          </li>
                                                          {/* <!-- eof events --> */}

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
                                  <h1>Frequently Asked Questions</h1>
                                  <ol className="breadcrumb">
                                      <li className="breadcrumb-item">
                                          <Link to="/" onClick={() => window.reload()}>Home</Link>
                                      </li>
                                      <li className="breadcrumb-item">
                                          <a href="#">Pages</a>
                                      </li>
                                      <li className="breadcrumb-item active">
                                          Frequently Asked Questions
                                      </li>
                                  </ol>
                              </div>

                          </div>
                      </div>
                  </section>

                  <section className="ds s-py-90 s-py-xl-150">
                      <div className="container">
                          <div className="row">
                              <div className="col-12 col-xl-10 offset-xl-1 c-gutter-60">
                                  <div className="row">
                                      <div className="col-12 col-md-5 col-lg-4">
                                          <div className="ds bs box-shadow bordered p-40">
                                              <h5>Categories</h5>
                                              <div className="divider-15"></div>
                                              <ul className="nav nav-tabs vertical-tabs" role="tablist">
                                                  <li className="nav-item">
                                                      <a className="nav-link active" id="tab01" data-toggle="tab" href="#tab01_pane" role="tab" aria-controls="tab01_pane" aria-expanded="true">Astrology</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" id="tab02" data-toggle="tab" href="#tab02_pane" role="tab" aria-controls="tab02_pane">Zodiac </a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" id="tab03" data-toggle="tab" href="#tab03_pane" role="tab" aria-controls="tab03_pane"> Numerology </a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" id="tab04" data-toggle="tab" href="#tab04_pane" role="tab" aria-controls="tab04_pane">Palmist </a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" id="tab05" data-toggle="tab" href="#tab05_pane" role="tab" aria-controls="tab05_pane">Vastu </a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" id="tab06" data-toggle="tab" href="#tab06_pane" role="tab" aria-controls="tab06_pane">Yoga and meditation</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" id="tab06" data-toggle="tab" href="#tab06_pane" role="tab" aria-controls="tab06_pane">Healing</a>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="col-12 col-md-7 col-lg-8">
                                          <div className="divider-60 divider-lg-0"></div>
                                          <div className="tab-content vertical-tabs-content shadow-none border-none p-0 mb--10">

                                              <div className="tab-pane fade show active" id="tab01_pane" role="tabpanel" aria-labelledby="tab01">
                                                  <div id="accordion01" role="tablist">
                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse01_header">
                                                              <h5>
                                                                  <a data-toggle="collapse" href="#collapse01" aria-expanded="true" aria-controls="collapse01">
                                                                      How do I start learning astrology?
                                                                  </a>
                                                              </h5>
                                                          </div>

                                                          <div id="collapse01" className="collapse show" role="tabpanel" aria-labelledby="collapse01_header" data-parent="#accordion01">
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

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse05_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse05" aria-expanded="false" aria-controls="collapse05">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse05" className="collapse" role="tabpanel" aria-labelledby="collapse05_header" data-parent="#accordion01">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse06_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse06" aria-expanded="false" aria-controls="collapse06">
                                                                      Do you need to be psychic to be an astrologer?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse06" className="collapse" role="tabpanel" aria-labelledby="collapse06_header" data-parent="#accordion01">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse07_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse07" aria-expanded="false" aria-controls="collapse07">
                                                                      Why aren't astrologers all rich?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse07" className="collapse" role="tabpanel" aria-labelledby="collapse07_header" data-parent="#accordion01">
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
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse08" aria-expanded="false" aria-controls="collapse08">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse08" className="collapse" role="tabpanel" aria-labelledby="collapse08_header" data-parent="#accordion01">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>

                                              </div>

                                              <div className="tab-pane fade" id="tab02_pane" role="tabpanel" aria-labelledby="tab02">

                                                  <div id="accordion02" role="tablist">
                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse09_header">
                                                              <h5>
                                                                  <a data-toggle="collapse" href="#collapse09" aria-expanded="true" aria-controls="collapse09">
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

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse11_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                                                      Why aren't astrologers all rich?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse11" className="collapse" role="tabpanel" aria-labelledby="collapse11_header" data-parent="#accordion02">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse12_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse12" className="collapse" role="tabpanel" aria-labelledby="collapse12_header" data-parent="#accordion02">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse13_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                                                      Do you need to be psychic to be an astrologer?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse13" className="collapse" role="tabpanel" aria-labelledby="collapse13_header" data-parent="#accordion02">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse14_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                                                      Why aren't astrologers all rich?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse14" className="collapse" role="tabpanel" aria-labelledby="collapse14_header" data-parent="#accordion02">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse15_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse15" className="collapse" role="tabpanel" aria-labelledby="collapse15_header" data-parent="#accordion02">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>

                                              </div>

                                              <div className="tab-pane fade" id="tab03_pane" role="tabpanel" aria-labelledby="tab03">

                                                  <div id="accordion03" role="tablist">
                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse16_header">
                                                              <h5>
                                                                  <a data-toggle="collapse" href="#collapse16" aria-expanded="true" aria-controls="collapse16">
                                                                      How do I start learning astrology?
                                                                  </a>
                                                              </h5>
                                                          </div>

                                                          <div id="collapse16" className="collapse show" role="tabpanel" aria-labelledby="collapse16_header" data-parent="#accordion03">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse17_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                                                      Do you need to be psychic to be an astrologer?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse17" className="collapse" role="tabpanel" aria-labelledby="collapse17_header" data-parent="#accordion03">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse18_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                                                      Why aren't astrologers all rich?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse18" className="collapse" role="tabpanel" aria-labelledby="collapse18_header" data-parent="#accordion03">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse19_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse19" className="collapse" role="tabpanel" aria-labelledby="collapse19_header" data-parent="#accordion03">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse20_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse20" aria-expanded="false" aria-controls="collapse20">
                                                                      Do you need to be psychic to be an astrologer?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse20" className="collapse" role="tabpanel" aria-labelledby="collapse20_header" data-parent="#accordion03">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse21_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse21" aria-expanded="false" aria-controls="collapse21">
                                                                      Why aren't astrologers all rich?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse21" className="collapse" role="tabpanel" aria-labelledby="collapse21_header" data-parent="#accordion03">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse22_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse22" aria-expanded="false" aria-controls="collapse22">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse22" className="collapse" role="tabpanel" aria-labelledby="collapse22_header" data-parent="#accordion03">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>

                                              </div>

                                              <div className="tab-pane fade" id="tab04_pane" role="tabpanel" aria-labelledby="tab04">

                                                  <div id="accordion04" role="tablist">
                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse23_header">
                                                              <h5>
                                                                  <a data-toggle="collapse" href="#collapse23" aria-expanded="true" aria-controls="collapse23">
                                                                      How do I start learning astrology?
                                                                  </a>
                                                              </h5>
                                                          </div>

                                                          <div id="collapse23" className="collapse show" role="tabpanel" aria-labelledby="collapse23_header" data-parent="#accordion04">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse24_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse24" aria-expanded="false" aria-controls="collapse24">
                                                                      Do you need to be psychic to be an astrologer?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse24" className="collapse" role="tabpanel" aria-labelledby="collapse24_header" data-parent="#accordion04">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse25_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse25" aria-expanded="false" aria-controls="collapse25">
                                                                      Why aren't astrologers all rich?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse25" className="collapse" role="tabpanel" aria-labelledby="collapse25_header" data-parent="#accordion04">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse26_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse26" aria-expanded="false" aria-controls="collapse26">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse26" className="collapse" role="tabpanel" aria-labelledby="collapse26_header" data-parent="#accordion04">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse27_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse27" aria-expanded="false" aria-controls="collapse27">
                                                                      Do you need to be psychic to be an astrologer?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse27" className="collapse" role="tabpanel" aria-labelledby="collapse27_header" data-parent="#accordion04">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse28_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse28" aria-expanded="false" aria-controls="collapse28">
                                                                      Why aren't astrologers all rich?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse28" className="collapse" role="tabpanel" aria-labelledby="collapse28_header" data-parent="#accordion04">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse29_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse29" aria-expanded="false" aria-controls="collapse29">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse29" className="collapse" role="tabpanel" aria-labelledby="collapse29_header" data-parent="#accordion04">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>

                                              </div>

                                              <div className="tab-pane fade" id="tab05_pane" role="tabpanel" aria-labelledby="tab05">

                                                  <div id="accordion05" role="tablist">
                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse30_header">
                                                              <h5>
                                                                  <a data-toggle="collapse" href="#collapse30" aria-expanded="true" aria-controls="collapse30">
                                                                      How do I start learning astrology?
                                                                  </a>
                                                              </h5>
                                                          </div>

                                                          <div id="collapse30" className="collapse show" role="tabpanel" aria-labelledby="collapse30_header" data-parent="#accordion05">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse31_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse31" aria-expanded="false" aria-controls="collapse31">
                                                                      Do you need to be psychic to be an astrologer?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse31" className="collapse" role="tabpanel" aria-labelledby="collapse31_header" data-parent="#accordion05">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse32_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse32" aria-expanded="false" aria-controls="collapse32">
                                                                      Why aren't astrologers all rich?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse32" className="collapse" role="tabpanel" aria-labelledby="collapse32_header" data-parent="#accordion05">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse33_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse33" aria-expanded="false" aria-controls="collapse33">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse33" className="collapse" role="tabpanel" aria-labelledby="collapse33_header" data-parent="#accordion05">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse34_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse34" aria-expanded="false" aria-controls="collapse34">
                                                                      Do you need to be psychic to be an astrologer?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse34" className="collapse" role="tabpanel" aria-labelledby="collapse34_header" data-parent="#accordion05">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse35_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse35" aria-expanded="false" aria-controls="collapse35">
                                                                      Why aren't astrologers all rich?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse35" className="collapse" role="tabpanel" aria-labelledby="collapse35_header" data-parent="#accordion05">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse36_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse36" aria-expanded="false" aria-controls="collapse36">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse36" className="collapse" role="tabpanel" aria-labelledby="collapse36_header" data-parent="#accordion05">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>

                                              </div>

                                              <div className="tab-pane fade" id="tab06_pane" role="tabpanel" aria-labelledby="tab06">

                                                  <div id="accordion06" role="tablist">
                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse37_header">
                                                              <h5>
                                                                  <a data-toggle="collapse" href="#collapse37" aria-expanded="true" aria-controls="collapse37">
                                                                      How do I start learning astrology?
                                                                  </a>
                                                              </h5>
                                                          </div>

                                                          <div id="collapse37" className="collapse show" role="tabpanel" aria-labelledby="collapse37_header" data-parent="#accordion06">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse38_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse38" aria-expanded="false" aria-controls="collapse38">
                                                                      Do you need to be psychic to be an astrologer?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse38" className="collapse" role="tabpanel" aria-labelledby="collapse38_header" data-parent="#accordion06">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse39_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse39" aria-expanded="false" aria-controls="collapse39">
                                                                      Why aren't astrologers all rich?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse39" className="collapse" role="tabpanel" aria-labelledby="collapse39_header" data-parent="#accordion06">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse40_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse40" aria-expanded="false" aria-controls="collapse40">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse40" className="collapse" role="tabpanel" aria-labelledby="collapse40_header" data-parent="#accordion06">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse41_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse41" aria-expanded="false" aria-controls="collapse41">
                                                                      Do you need to be psychic to be an astrologer?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse41" className="collapse" role="tabpanel" aria-labelledby="collapse41_header" data-parent="#accordion06">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse42_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse42" aria-expanded="false" aria-controls="collapse42">
                                                                      Why aren't astrologers all rich?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse42" className="collapse" role="tabpanel" aria-labelledby="collapse42_header" data-parent="#accordion06">
                                                              <div className="card-body">
                                                                  <p>
                                                                      This is a question relevant to the metaphysical school of thought, where the planets are thought to influence the person at the time of birth.
                                                                  </p>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="card">
                                                          <div className="card-header" role="tab" id="collapse43_header">
                                                              <h5>
                                                                  <a className="collapsed" data-toggle="collapse" href="#collapse43" aria-expanded="false" aria-controls="collapse43">
                                                                      Why do astrologers sometimes disagree?
                                                                  </a>
                                                              </h5>
                                                          </div>
                                                          <div id="collapse43" className="collapse" role="tabpanel" aria-labelledby="collapse43_header" data-parent="#accordion06">
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
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>

                  <section className="ds bs s-py-90 s-pt-xl-145 s-pb-xl-130">
                      <div className="container">
                          <div className="row">
                              <div className="col-12 text-center">
                                  <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                                      <span>What Clients Are Saying</span>
                                  </h3>
                                  <div className="line"></div>
                                  <p className="text-center fs-20 mt-4">
                                      <span>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod.</span>
                                  </p>

                                  <div className="divider-40 divider-xl-60"></div>

                                  <div className="owl-carousel quote-carousel owl-navigation" data-responsive-lg="3" data-responsive-md="3" data-responsive-sm="1" data-responsive-xs="1" data-nav="false" data-margin="50" data-loop="true" data-dots="false" data-autoplay="false" data-center="true">
                                      <div className="quote-item vertical quote-layout-2">
                                          <div className="wrap-img">
                                              <img src="images/gallery/quote_1.jpg" alt="img"/>
                                          </div>
                                          <div className="wrap-content">
                                              <div className="quote-image">
                                                  <img src="images/team/comment5.png" alt="img"/>
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
                                              <img src="images/gallery/quote_2.jpg" alt="img"/>
                                          </div>
                                          <div className="wrap-content">
                                              <div className="quote-image">
                                                  <img src="images/team/comment6.png" alt="img"/>
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
                                              <img src="images/gallery/quote_3.jpg" alt="img"/>
                                          </div>
                                          <div className="wrap-content">
                                              <div className="quote-image">
                                                  <img src="images/team/comment7.png" alt="img"/>
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
                                              <Link to="/contact" onClick={() => window.reload()}>Contact</Link>
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
              {/* <!-- eof #box_wrapper --> */}
          </div>
          {/* <!-- eof #canvas --> */}
    </div>
  )
}

export default Faq