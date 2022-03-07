import React from 'react'
import {Link} from 'react-router-dom'

const ProductDetail = () => {
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
                                                      <Link to="/about" onClick={() => window.reload()}>About</Link>
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
                                                                              <Link to="/login_logout" onClick={() => window.reload()}>Login/Logout</Link>
                                                                          </li>

                                                                      </ul>
                                                                  </li>
                                                                 
                                                                 
                                                                  <li>
                                                                      <Link to="/product_detail" onClick={() => window.reload()}>Product Detail</Link>
                                                                  </li>
                                                                  <li>
                                                                      <Link to="/cart" onClick={() => window.reload()}>Shopping Cart</Link>
                                                                  </li>
                                                                  <li>
                                                                      <Link to="/checkout" onClick={() => window.reload()}>Checkout</Link>
                                                                  </li>
                                                                  <li>
                                                                      <Link to="/order_received" onClick={() => window.reload()}>Order Received</Link>
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
                                  <h1>Shop Product with Right Sidebar</h1>
                                  <ol className="breadcrumb">
                                      <li className="breadcrumb-item">
                                          <Link to="/" onClick={() => window.reload()}>Home</Link>
                                      </li>
                                      <li className="breadcrumb-item">
                                          <a href="#">Shop</a>
                                      </li>
                                      <li className="breadcrumb-item active">
                                          Shop Product with Right Sidebar
                                      </li>
                                  </ol>
                              </div>

                          </div>
                      </div>
                  </section>


                  <section className="ds woocommerce s-py-90 s-py-xl-150 c-gutter-60">
                      <div className="container">
                          <div className="row">
                              <main className="col-lg-8">
                                  <div className="product">

                                      <div className="images" data-columns="4">
                                          <figure>
                                              <div data-thumb="images/shop/11.jpg">
                                                  <a href="images/shop/11.jpg">
                                                      <img src="images/shop/11.jpg" alt="img" data-caption="" data-src="images/shop/11.jpg" data-large_image="images/shop/11.jpg" data-large_image_width="1000" data-large_image_height="1000"/>
                                                  </a>
                                              </div>
                                              <div data-thumb="images/shop/11_back.jpg">
                                                  <a href="images/shop/11_back.jpg">
                                                      <img src="images/shop/11_back.jpg" alt="img" data-caption="" data-src="images/shop/11_back.jpg" data-large_image="images/shop/11_back.jpg" data-large_image_width="1000" data-large_image_height="1000"/>
                                                  </a>
                                              </div>
                                              <div data-thumb="images/shop/10_back.jpg">
                                                  <a href="images/shop/10_back.jpg">
                                                      <img src="images/shop/10_back.jpg" alt="img" data-caption="" data-src="images/shop/10_back.jpg" data-large_image="images/shop/10_back.jpg" data-large_image_width="1000" data-large_image_height="1000"/>
                                                  </a>
                                              </div>
                                              <div data-thumb="images/shop/10.jpg">
                                                  <a href="images/shop/10.jpg">
                                                      <img src="images/shop/10.jpg" alt="img" data-caption="" data-src="images/shop/10.jpg" data-large_image="images/shop/10.jpg" data-large_image_width="1000" data-large_image_height="1000"/>
                                                  </a>
                                              </div>


                                          </figure>
                                      </div>

                                      <div className="summary entry-summary">

                                          <h1 className="product_title entry-title">Ship Your Idea</h1>
                                          <div className="woocommerce-product-rating">
                                              <div className="star-rating">
                                                  <span style={{ width: "72.6%" }}>Rated <strong className="rating">4.33</strong> out of 5 based on <span className="rating">3</span> customer ratings</span>
                                              </div>
                                              <a href="#reviews" className="woocommerce-review-link" rel="nofollow">(<span className="count">3</span> customer
                                                  reviews)</a>
                                          </div>

                                          <p className="price">
                                              <span>
                                                  <span>$</span>20.00
                                              </span>
                                          </p>
                                          <div>
                                              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
                                                  tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
                                                  semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                          </div>

                                          <form>

                                              <table className="variations">
                                                  <tbody>
                                                      <tr>
                                                          <td className="label">
                                                              <label htmlfor="pa_color">Color</label>
                                                          </td>
                                                          <td className="value">
                                                              <select id="pa_color" className="wc-default-select" name="attribute_pa_color" data-attribute_name="attribute_pa_color">
                                                                  <option value="">Choose an option</option>
                                                                  <option value="blue" className="attached enabled">Blue</option>
                                                              </select>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td className="label">
                                                              <label htmlfor="pa_size">Size</label>
                                                          </td>
                                                          <td className="value">
                                                              <select id="pa_size" className="wc-default-select" name="attribute_pa_size" data-attribute_name="attribute_pa_size">
                                                                  <option value="">Choose an option</option>
                                                                  <option value="x-small" className="attached enabled">X Small</option>
                                                                  <option value="small" className="attached enabled">Small</option>
                                                                  <option value="medium" className="attached enabled">Medium</option>
                                                                  <option value="large" className="attached enabled">Large</option>
                                                                  <option value="x-large" className="attached enabled">X Large</option>
                                                                  <option value="xx-large" className="attached enabled">XX Large</option>
                                                                  <option value="xxx-large" className="attached enabled">XXX Large</option>
                                                              </select>
                                                              <a className="reset_variations" href="#">Clear</a>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>


                                              <div className="single_variation_wrap">
                                                  <div>
                                                      <div className="quantity">
                                                          <input type="number" className="input-text qty text" step="1" min="1" max="1000" name="quantity" value="1" title="Qty" size="4"/>
                                                      </div>
                                                      <button type="submit" className="single_add_to_cart_button button alt">Add to cart</button>
                                                  </div>
                                              </div>


                                          </form>

                                          <div className="product_meta">


                                              <span className="sku_wrapper">SKU: <span className="sku">N/A</span>
                                              </span>


                                              <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Clothing</a>, <a href="shop-right.html" rel="tag">T-shirts</a>
                                              </span>
                                              <span className="tagged_as">Tag: <a href="shop-right.html" rel="tag">premium</a></span>


                                          </div>


                                      </div>
                                      {/* <!-- .summary --> */}

                                      {/* <!--
                                      IF WE WANT to create bootstrap tabs:
                                      in WordPress theme We shall override tabs template
                                      adding 'nav nav-tabs' to 'ul.tabs'
                                      adding 'nav-item' to 'li'
                                      adding 'nav-link' to 'a'
                                      wrap all tabs to tab-content
                                      but .active is turns not on A but on LI, not as in bootstrap
	--> */}
                                      <div className="woocommerce-tabs wc-tabs-wrapper">

                                          <ul className="tabs wc-tabs" role="tablist">
                                              <li className="description_tab" id="tab-title-description" role="tab" aria-controls="tab-description">
                                                  <a href="#tab-description">Description</a>
                                              </li>
                                              <li className="additional_information_tab active" id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
                                                  <a href="#tab-additional_information">Additional information</a>
                                              </li>
                                              <li className="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                                                  <a href="#tab-reviews">Reviews (3)</a>
                                              </li>
                                          </ul>

                                          <div className="panel wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">

                                              <h2>Description</h2>

                                              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                                  Vestibulum
                                                  tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
                                                  egestas
                                                  semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                          </div>
                                          <div className="panel wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information">

                                              <h2>Additional information</h2>

                                              <table className="shop_attributes">


                                                  <tbody>
                                                      <tr>
                                                          <th>Color</th>
                                                          <td>
                                                              <p>Blue</p>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <th>Size</th>
                                                          <td>
                                                              <p>X Small, Small, Medium, Large, X Large, XX Large, XXX Large</p>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                          <div className="panel wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
                                              <div id="reviews">
                                                  <div id="comments">
                                                      <h2>3 reviews for <span>Ship Your Idea</span>
                                                      </h2>


                                                      <ol className="commentlist">
                                                          <li className="comment even thread-even depth-1" id="li-comment-34">

                                                              <div id="comment-34" className="comment_container">

                                                                  <img alt="img" src="http://2.gravatar.com/avatar/babdd787a9577a0e615246ac79cf2826?s=60&amp;d=mm&amp;r=g" srcset="http://2.gravatar.com/avatar/babdd787a9577a0e615246ac79cf2826?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60"/>
                                                                      <div className="comment-text">

                                                                          <div className="star-rating">
                                                                          <span style={{ width: "80%" }}>Rated <strong
                                                                                  className="rating">4</strong> out of 5</span>
                                                                          </div>
                                                                          <p className="meta">
                                                                              <strong>James
                                                                                  Koster</strong> <span>–</span>
                                                                              <time dateTime="2013-06-07T11:43:13+00:00">June 7, 2013
                                                                              </time>
                                                                          </p>

                                                                          <div className="description">
                                                                              <p>Nice T-shirt, I got one in black. Goes with
                                                                                  anything!</p>
                                                                          </div>
                                                                      </div>
                                                              </div>
                                                          </li>
                                                          {/* <!-- #comment-## --> */}
                                                          <li className="comment odd alt thread-odd thread-alt depth-1" id="li-comment-35">

                                                              <div id="comment-35" className="comment_container">

                                                                  <img alt="img" src="http://0.gravatar.com/avatar/f0cde930b42c79145194679d5b6e3b1d?s=60&amp;d=mm&amp;r=g" srcset="http://0.gravatar.com/avatar/f0cde930b42c79145194679d5b6e3b1d?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60"/>
                                                                      <div className="comment-text">

                                                                          <div className="star-rating">
                                                                          <span style={{ width: "80%" }}>Rated <strong
                                                                                  className="rating">4</strong> out of 5</span>
                                                                          </div>
                                                                          <p className="meta">
                                                                              <strong >Cobus
                                                                                  Bester</strong> <span>–</span>
                                                                              <time dateTime="2013-06-07T11:55:15+00:00">June 7, 2013
                                                                              </time>
                                                                          </p>

                                                                          <div className="description">
                                                                              <p>Very comfortable shirt, and I love the graphic!</p>
                                                                          </div>
                                                                      </div>
                                                              </div>
                                                          </li>
                                                          {/* <!-- #comment-## --> */}
                                                          <li className="comment even thread-even depth-1" id="li-comment-36">

                                                              <div id="comment-36" className="comment_container">

                                                                  <img alt="img" src="http://1.gravatar.com/avatar/7a6df00789e50714fcde1b759befcc84?s=60&amp;d=mm&amp;r=g" srcset="http://1.gravatar.com/avatar/7a6df00789e50714fcde1b759befcc84?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60"/>
                                                                      <div className="comment-text">

                                                                          <div className="star-rating">
                                                                          <span style={{ width: "100%" }}>Rated <strong
                                                                                  className="rating">5</strong> out of 5</span>
                                                                          </div>
                                                                          <p className="meta">
                                                                              <strong>Stuart</strong>
                                                                              <span>–</span>
                                                                              <time dateTime="2013-06-07T13:02:14+00:00">June 7, 2013
                                                                              </time>
                                                                          </p>

                                                                          <div className="description">
                                                                              <p>Great T-shirt quality, Great Design and Great
                                                                                  Service.</p>
                                                                          </div>
                                                                      </div>
                                                              </div>
                                                          </li>
                                                          {/* <!-- #comment-## --> */}
                                                      </ol>


                                                  </div>


                                                  <div id="review_form_wrapper">
                                                      <div id="review_form">
                                                          <div id="respond" className="comment-respond">
                                                              <span id="reply-title" className="comment-reply-title">Add a review <small>
                                                                  <a rel="nofollow" id="cancel-comment-reply-link" href="#respond" style={{ display: "none" }}>Cancel reply</a>
                                                              </small>
                                                              </span>
                                                              <form action="https://html.modernwebtemplates.com/" method="post" id="commentform" className="comment-form" novalidate="">
                                                                  <p className="comment-notes">
                                                                      <span id="email-notes">Your email address will not be published.</span>
                                                                      Required fields are marked <span className="required">*</span>
                                                                  </p>
                                                                  <div className="comment-form-rating">
                                                                      <label>Your rating</label>
                                                                      <p className="stars">
                                                                          <span>
                                                                              <a className="star-1" href="#">1</a>
                                                                              <a className="star-2" href="#">2</a>
                                                                              <a className="star-3" href="#">3</a>
                                                                              <a className="star-4" href="#">4</a>
                                                                              <a className="star-5" href="#">5</a>
                                                                          </span>
                                                                      </p>
                                                                  </div>
                                                                  <p className="comment-form-comment">
                                                                      <label htmlfor="comment">Your review <span className="required">*</span>
                                                                      </label>
                                                                      <textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" required="">

                                                                      </textarea>
                                                                  </p>
                                                                  <p className="comment-form-author">
                                                                      <label htmlfor="author">Name <span className="required">*</span>
                                                                      </label>
                                                                      <input id="author" name="author" type="text" value="" size="30" aria-required="true" required=""/>
                                                                  </p>
                                                                  <p className="comment-form-email">
                                                                      <label htmlfor="email">Email <span className="required">*</span>
                                                                      </label> <input id="email" name="email" type="email" value="" size="30" aria-required="true" required=""/>
                                                                  </p>
                                                                  <p className="form-submit">
                                                                      <input name="submit" type="submit" id="submit" className="submit" value="Submit"/>

                                                                  </p>
                                                              </form>
                                                          </div>
                                                          {/* <!-- #respond --> */}
                                                      </div>
                                                  </div>


                                                  <div className="clear">

                                                  </div>
                                              </div>
                                          </div>

                                      </div>


                                      <section className="up-sells upsells products">

                                          <h2>Other Products</h2>
                                          <div className="divider-30"></div>

                                          <ul className="products">

                                              <li className="product">
                                                  <div className="product-inner">
                                                      <span className="onsale">Sale!</span>
                                                      <a href="shop-product-right.html">
                                                          <img src="images/shop/34.jpg" alt="img"/>
                                                      </a>

                                                      <div className="product-wrap">
                                                          <h2 className="woocommerce-loop-product__title">
                                                              <a href="shop-product-right.html">Treasure Yellow </a>
                                                          </h2>
                                                          <div className="product_meta">
                                                              <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Magic </a>, <a href="shop-right.html" rel="tag">Attributes</a></span>
                                                          </div>
                                                          <div className="star-rating">
                                                              <span style={{ width: "80%" }}>Rated <strong className="rating">4.00</strong> out of 5</span>
                                                          </div>
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

                                                      <a href="shop-product-right.html">
                                                          <img src="images/shop/35.jpg" alt="img"/>
                                                      </a>

                                                      <div className="product-wrap">
                                                          <h2 className="woocommerce-loop-product__title">
                                                              <a href="shop-product-right.html">Treasure Yellow </a>
                                                          </h2>
                                                          <div className="product_meta">
                                                              <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Magic </a>, <a href="shop-right.html" rel="tag">Attributes</a></span>
                                                          </div>
                                                          <div className="star-rating">
                                                              <span style={{ width: "80%" }}>Rated <strong className="rating">4.00</strong> out of 5</span>
                                                          </div>
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

                                                      <a href="shop-product-right.html">
                                                          <img src="images/shop/36.jpg" alt="img"/>
                                                      </a>

                                                      <div className="product-wrap">
                                                          <h2 className="woocommerce-loop-product__title">
                                                              <a href="shop-product-right.html">Treasure Yellow </a>
                                                          </h2>
                                                          <div className="product_meta">
                                                              <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Magic </a>, <a href="shop-right.html" rel="tag">Attributes</a></span>
                                                          </div>
                                                          <div className="star-rating">
                                                              <span style={{ width: "80%" }}>Rated <strong className="rating">4.00</strong> out of 5</span>
                                                          </div>
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

                                                      <a href="shop-product-right.html">
                                                          <img src="images/shop/37.jpg" alt="img"/>
                                                      </a>

                                                      <div className="product-wrap">
                                                          <h2 className="woocommerce-loop-product__title">
                                                              <a href="shop-product-right.html">Treasure Yellow </a>
                                                          </h2>
                                                          <div className="product_meta">
                                                              <span className="posted_in">Categories: <a href="shop-right.html" rel="tag">Magic </a>, <a href="shop-right.html" rel="tag">Attributes</a></span>
                                                          </div>
                                                          <div className="star-rating">
                                                              <span style={{ width: "80%" }}>Rated <strong className="rating">4.00</strong> out of 5</span>
                                                          </div>
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

                                          </ul>

                                      </section>

                                  </div>
                                  {/* <!-- #product-22 --> */}


                              </main>
                              <aside className="col-lg-4">
                                  <div className="ds bs bordered box-shadow">
                                      <div className="widget widget_product_search">

                                          <h3 className="widget-title">Search</h3>

                                          <form role="search" className="woocommerce-product-search" action="https://html.modernwebtemplates.com/">

                                              <label className="screen-reader-text" for="woocommerce-product-search-field-widget">
                                                  Search for:
                                              </label>

                                              <input type="search" id="woocommerce-product-search-field-widget" className="search-field" placeholder="Search" value="" name="search"/>
                                                  <input type="submit" value="Search"/>
                                                  </form>
                                              </div>
                                      </div>

                                      <div className="widget woocommerce widget_product_categories">
                                          <h3 className="widget-title">Categories</h3>
                                          <ul className="product-categories">
                                              <li className="cat-item cat-parent">
                                                  <a href="shop-right.html">Astrology</a>
                                                  <ul className="children">
                                                      <li className="cat-item">
                                                      <a href="shop-right.html">Zodiac </a>
                                                      </li>
                                                      <li className="cat-item">
                                                      <a href="shop-right.html">Numerology </a>
                                                      </li>
                                                  </ul>
                                              </li>
                                              <li className="cat-item cat-parent">
                                              <a href="shop-right.html">Palmist </a>
                                              </li>
                                              <li className="cat-item">
                                              <a href="shop-right.html">Vastu</a>
                                              </li>
                                              <li className="cat-item cat-parent">
                                              <a href="shop-right.html">Yoga and meditation </a>
                                              </li>
                                              <li className="cat-item">
                                              <a href="shop-right.html">Healing</a>
                                              </li>
                                              
                                          </ul>
                                      </div>


                                      <div className="widget woocommerce widget_recently_viewed_products">

                                          <h3 className="widget-title">Viewed Products</h3>

                                          <ul className="product_list_widget">
                                              <li>
                                                  <a href="shop-product-right.html">
                                                      <img src="images/shop/05.jpg" alt="img"/>
                                                          <span className="product-title">Premium Quality</span>
                                                  </a>
                                                  <del>
                                                      <span className="woocommerce-Price-amount amount">
                                                          <span className="woocommerce-Price-currencySymbol">$</span>
                                                          15.00
                                                      </span>
                                                  </del>
                                                  <ins>
                                                      <span className="woocommerce-Price-amount amount">
                                                          <span className="woocommerce-Price-currencySymbol">$</span>
                                                          12.00
                                                      </span>
                                                  </ins>
                                              </li>

                                              <li>
                                                  <a href="shop-product-right.html">
                                                      <img src="images/shop/06.jpg" alt="img"/>
                                                          <span className="product-title">Flying Ninja</span>
                                                  </a>
                                                  <del>
                                                      <span className="woocommerce-Price-amount amount">
                                                          <span className="woocommerce-Price-currencySymbol">$</span>
                                                          15.00
                                                      </span>
                                                  </del>
                                                  <ins>
                                                      <span className="woocommerce-Price-amount amount">
                                                          <span className="woocommerce-Price-currencySymbol">$</span>
                                                          12.00
                                                      </span>
                                                  </ins>
                                              </li>
                                          </ul>
                                      </div>

                              </aside>
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

export default ProductDetail