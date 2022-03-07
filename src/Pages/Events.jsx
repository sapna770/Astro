import React from 'react'
import { Link } from 'react-router-dom'

const Events = () => {
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
                                                                <Link to="/" onClick={() => window.reload()}>Home</Link>
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
                                    <h1>Events</h1>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/" onClick={() => window.reload()}>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Pages</a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                          Events 
                                        </li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </section>


                    <section className="ds s-py-90 s-py-xl-150">
                        <div className="container">
                            <div className="row c-gutter-60">
                                <main className="col-lg-8 order-lg-2">
                                    <article className="vertical-item content-padding padding-big ds bs bordered post">
                                        <div className="item-media post-thumbnail">
                                            <img src="images/gallery/01.jpg" alt="img" />
                                        </div>
                                        <div className="item-content">
                                            <header className="entry-header single-post">
                                                <span className="cat-links">

                                                    <span className="screen-reader-text">Categories</span>
                                                    <a href="#" rel="category tag">
                                                        Astrology
                                                    </a>
                                                </span>
                                                <div className="entry-meta">
                                                    <span>
                                                        <a href="#" rel="bookmark">
                                                            <time className="entry-date published updated" dateTime="2018-03-18T15:15:12+00:00">18 may 2020</time>
                                                        </a>
                                                    </span>
                                                    <span>
                                                        <a href="#" rel="bookmark">
                                                            <i className="fa fa-map-marker"></i> <span>Molestiae numquam officia</span>
                                                        </a>
                                                    </span>
                                                </div>
                                                {/* <!-- .entry-meta --> */}

                                            </header>
                                            {/* <!-- .entry-header --> */}
                                            <div className="divider-20 divider-xl-40"></div>
                                            <div className="entry-content">
                                                <p>
                                                    If you would like to learn Natal Astrology or Astrology and Tarot with Jessica Adams, these courses are now available on Sun Sign School. You must complete a course at The Sun Sign School to go on to study Sun Sign Astrology 2020, Natal Astrology or Astrology and Tarot.
                                                </p>
                                                <p>
                                                    These three six-month courses begin on January 1st 2020 and again on August 1st 2020. These online classes involve full-time, professional astrologers as well as academics and authors in the field of astrology and Tarot.
                                                </p>
                                                <p>
                                                    You will be trained to professional standard by Jessica Adams, who will be hiring graduates who are interested in a part-time career in astrology and/or Tarot in 2021.
                                                </p>
                                                <blockquote>
                                                    <p>Sem justo facilisi, pulvinar feugiat sed cursus donec vestibulum, rutrum mauris montes felis, quam metus sed in. In curabitur, ut in auctor ut, egestas nunc elit lectus sed sed.</p>
                                                </blockquote>
                                                <p>
                                                    The US $100 first-stop course, at The Sun Sign School includes expert guidance from experienced media astrologers Jessica Adams, Natalie Delahaye, Barbara Dunn, Bernard Fitzwalter, Debbie Frank, Maggie Hyde, Stephanie Johnson, Joanne Madeline Moore and Penny Thornton. In 2020 Neil Spencer (The Observer, True as the Stars Above) will also join as a podcast tutor.
                                                </p>
                                            </div>
                                            {/* <!-- .entry-content --> */}
                                        </div>
                                        {/* <!-- .item-content --> */}
                                    </article>


                                    <div id="comments" className="comments-area">

                                        <ol className="comment-list">
                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img alt="img" src="images/team/comment1.png" />
                                                            <h6 className="my-0 color-main2">Jeffrey P. McAllister</h6>
                                                            <span className="time">
                                                                <a href="#">
                                                                    <time dateTime="2019-05-20T13:05:42+00:00">May 20, 2019</time>
                                                                </a>
                                                            </span>
                                                        </div>
                                                        {/* <!-- .comment-author --> */}
                                                    </footer>
                                                    {/* <!-- .comment-meta --> */}

                                                    <div className="comment-content">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                    </div>
                                                    {/* <!-- .comment-content --> */}

                                                    <p className="item-meta">
                                                        <span className="edit-link">
                                                            <a className="comment-edit-link" href="#">Edit</a>
                                                        </span>
                                                        <span className="comment-reply-link">
                                                            <a rel="nofollow" className="comment-reply-link" href="#" aria-label="Reply to John Doe">Reply</a>
                                                        </span>

                                                    </p>
                                                </article>
                                                {/* <!-- .comment-body --> */}
                                            </li>
                                            {/* <!-- #comment-## --> */}

                                            <li className="comment">
                                                {/* <!-- .comment-body --> */}
                                                <ol className="children">
                                                    <li className="comment">
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img alt="img" src="images/team/comment2.png" />
                                                                    <h6 className="my-0 color-main2">David F. Gibbs</h6>
                                                                    <span className="time">
                                                                        <a href="#">
                                                                            <time dateTime="2019-05-20T13:05:42+00:00">May 20, 2019</time>
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                                {/* <!-- .comment-author --> */}
                                                            </footer>
                                                            {/* <!-- .comment-meta --> */}

                                                            <div className="comment-content">
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                            </div>
                                                            {/* <!-- .comment-content --> */}

                                                            <p className="item-meta">
                                                                <span className="edit-link">
                                                                    <a className="comment-edit-link" href="#">Edit</a>
                                                                </span>
                                                                <span className="comment-reply-link">
                                                                    <a rel="nofollow" className="comment-reply-link" href="#" aria-label="Reply to John Doe">Reply</a>
                                                                </span>

                                                            </p>
                                                        </article>
                                                        {/* <!-- .comment-body --> */}
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img alt="img" src="images/team/comment2.png" />
                                                                    <h6 className="my-0 color-main2">Antonie D. Malone</h6>
                                                                    <span className="time">
                                                                        <a href="#">
                                                                            <time dateTime="2019-05-20T13:05:42+00:00">May 20, 2019</time>
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                                {/* <!-- .comment-author --> */}
                                                            </footer>
                                                            {/* <!-- .comment-meta --> */}

                                                            <div className="comment-content">
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                            </div>
                                                            {/* <!-- .comment-content --> */}

                                                            <p className="item-meta">
                                                                <span className="edit-link">
                                                                    <a className="comment-edit-link" href="#">Edit</a>
                                                                </span>
                                                                <span className="comment-reply-link">
                                                                    <a rel="nofollow" className="comment-reply-link" href="#" aria-label="Reply to John Doe">Reply</a>
                                                                </span>

                                                            </p>
                                                        </article>
                                                    </li>
                                                    {/* <!-- #comment-## --> */}
                                                </ol>
                                                {/* <!-- .children --> */}
                                            </li>
                                            {/* <!-- #comment-## --> */}

                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img alt="img" src="images/team/comment4.png" />
                                                            <h6 className="my-0 color-main2">Delie J. Warren</h6>
                                                            <span className="time">
                                                                <a href="#">
                                                                    <time dateTime="2019-05-20T13:05:42+00:00">May 20, 2019</time>
                                                                </a>
                                                            </span>
                                                        </div>
                                                        {/* <!-- .comment-author --> */}
                                                    </footer>
                                                    {/* <!-- .comment-meta --> */}

                                                    <div className="comment-content">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                    </div>
                                                    {/* <!-- .comment-content --> */}

                                                    <p className="item-meta">
                                                        <span className="edit-link">
                                                            <a className="comment-edit-link" href="#">Edit</a>
                                                        </span>
                                                        <span className="comment-reply-link">
                                                            <a rel="nofollow" className="comment-reply-link" href="#" aria-label="Reply to John Doe">Reply</a>
                                                        </span>

                                                    </p>
                                                </article>
                                                {/* <!-- .comment-body --> */}
                                            </li>
                                        </ol>
                                        {/* <!-- .comment-list --> */}


                                        <div id="respond" className="comment-respond">
                                            <h4 id="reply-title" className="comments-title mb-3">Leave A Comment</h4>
                                            <form action="#" id="commentform" className="comment-form">
                                                <p className="comment-form-author form-group has-placeholder">
                                                    <label htmlfor="author">Name <span className="required">*</span></label>
                                                    <input id="author" name="author" className="form-control" type="text" value="" size="30" maxlength="245" required="required" placeholder="Name" />
                                                </p>
                                                <p className="comment-form-email form-group has-placeholder">
                                                    <label htmlfor="email">Email <span className="required">*</span></label>
                                                    <input id="email" name="email" type="email" className="form-control" value="" size="30" maxlength="100" required="required" placeholder="Email" />
                                                </p>
                                                <p className="comment-form-comment form-group has-placeholder">
                                                    <label htmlfor="comment">Comment</label>
                                                    <textarea id="comment" className="form-control" name="comment" cols="45" rows="4" aria-required="true" required="required" placeholder="Write a comment"></textarea>
                                                </p>
                                                <p className="comment-form-cookies-consent">
                                                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" />
                                                    <label htmlfor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                                </p>
                                                <p className="form-submit mt-10">
                                                    <button name="submit" type="submit" id="submit" className="btn btn-maincolor btn-short btn-medium mb-0 submit">Send</button>
                                                    <input type="hidden" name="comment_post_ID" value="1637" id="comment_post_ID"/>
                                                        <input type="hidden" name="comment_parent" id="comment_parent" value="0"/>
                                                        </p>
                                                    </form>
                                                </div>
                                                {/* <!-- #respond --> */}

                                        </div>

                                </main>
                                <aside className="col-lg-4  order-lg-1">
                                    <div className="widget widget_categories">

                                        <h3 className="widget-title">Categories</h3>

                                        <ul>
                                            <li className="cat-item">
                                                <a href="blog-right.html">Astrology</a>
                                                <ul className="children">
                                                    <li className="cat-item">
                                                        <a href="blog-right.html">Magic</a>
                                                    </li>
                                                    <li className="cat-item">
                                                        <a href="blog-right.html">Taro</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="cat-item">
                                                <a href="blog-right.html">Zodiac </a>
                                            </li>
                                            <li className="cat-item">
                                                <a href="blog-right.html">Numerology </a>
                                            </li>
                                            <li className="cat-item">
                                                <a href="blog-right.html">Palmist </a>
                                            </li>
                                            <li className="cat-item">
                                                <a href="blog-right.html">Vastu </a>
                                            </li>
                                            <li className="cat-item">
                                                <a href="blog-right.html">Yoga and meditation</a>
                                            </li>
                                            <li className="cat-item">
                                                <a href="blog-right.html">Healing</a>
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="ds bs box-shadow bordered">
                                        <div className="widget widget_search">
                                            <h3 className="widget-title">Search</h3>
                                            <form role="search" method="get" className="search-form" action="https://html.modernwebtemplates.com/">
                                                <label htmlfor="search-form-widget">
                                                    <span className="screen-reader-text">Search for:</span>
                                                </label>
                                                <input type="search" id="search-form-widget" className="search-field" placeholder="Search" value="" name="search"/>
                                                    <button type="submit" className="search-submit">
                                                        <span className="screen-reader-text">Search</span>
                                                    </button>
                                            </form>
                                        </div>

                                    </div>

                                    <div className="widget widget_tag_cloud">

                                        <h3 className="widget-title">Tags</h3>

                                        <div className="tagcloud">

                                            <a href="blog-right.html" className="tag-cloud-link">
                                                Astrology
                                            </a>

                                            <a href="blog-right.html" className="tag-cloud-link">
                                                Natal Chart
                                            </a>

                                            <a href="blog-right.html" className="tag-cloud-link">
                                                Horoscope
                                            </a>

                                            <a href="blog-right.html" className="tag-cloud-link">
                                                Magic
                                            </a>

                                        </div>
                                    </div>


                                    <div className="widget widget_flickr">

                                        <h3 className="widget-title">Flickr</h3>
                                        <ul className="flickr_ul"></ul>
                                    </div>

                                    <div className="widget widget_recent_posts">

                                        <h3 className="widget-title">Popular Posts</h3>
                                        <ul className="list-unstyled">
                                            <li className="media">
                                                <a className="media-image" href="blog-single-right.html">
                                                    <img src="images/recent_post1.jpg" alt="img"/>
                                                </a>
                                                <div className="media-body">
                                                    <h4>
                                                        <a href="blog-single-right.html">Eod tempor invidunt labore dolore magna</a>
                                                    </h4>
                                                    <p className="item-meta">
                                                        Dec 18, 2018
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <a className="media-image" href="blog-single-right.html">
                                                    <img src="images/recent_post2.jpg" alt="img"/>
                                                </a>
                                                <div className="media-body">
                                                    <h4>
                                                        <a href="blog-single-right.html">Aliquyam erat, sed voluptua vero eos </a>
                                                    </h4>
                                                    <p className="item-meta">
                                                        Nov 22, 2018
                                                    </p>

                                                </div>
                                            </li>

                                            <li className="media">
                                                <a className="media-image" href="blog-single-right.html">
                                                    <img src="images/recent_post1.jpg" alt="img"/>
                                                </a>
                                                <div className="media-body">
                                                    <h4>
                                                        <a href="blog-single-right.html">Et justo duo dolores et ea rebum</a>
                                                    </h4>
                                                    <p className="item-meta">
                                                        Nov 12, 2018
                                                    </p>

                                                </div>
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

export default Events