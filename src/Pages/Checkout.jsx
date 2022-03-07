import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
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
                                                                <Link to="/services" onClick={() => window.reload()}>Services</Link>                                                          </li>

                                                            <li>
                                                                <Link to="/forecast" onClick={() => window.reload()}>Forecast</Link>                                                          </li>

                                                            <li>
                                                                <Link to="/pricing" onClick={() => window.reload()}>Pricing</Link>
                                                            </li>

                                                            {/* <!-- shop --> */}
                                                            <li>
                                                                <Link to="/shop" onClick={() => window.reload()}>Shop</Link>
                                                                <ul>
                                                                    <li>
                                                                        <Link to="/accountdetail" onClick={() => window.reload()}>Account Detail</Link>
                                                                        <ul>

                                                                            <li>
                                                                                <a href="shop-account-details.html">Account details</a>
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
                                                                <Link to="/events" onClick={() => window.reload()}>Events</Link>                                                          </li>
                                                            {/* <!-- eof events --> */}

                                                            <li>
                                                                <Link to="/team" onClick={() => window.reload()}>Team</Link>                                                          </li>

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
                                    <h1>Shopping Cart</h1>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/" onClick={() => window.reload()}>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Shop</a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            Shopping Cart
                                        </li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </section>


                    <section className="ds s-py-90 s-py-xl-150 c-gutter-60">
                        <div className="container">
                            <div className="row">
                                <main className="col-lg-12">

                                    <div className="woocommerce-info">Returning customer? <a href="#" className="showlogin">Click here to login</a>
                                    </div>

                                    <form className="woocomerce-form woocommerce-form-login login" method="post" style={{}}>


                                        <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer,
                                            please proceed to the Billing &amp; Shipping section.</p>

                                        <p className="form-row form-row-first">
                                            <label htmlfor="username">Username or email <span className="required">*</span>
                                            </label>
                                            <input type="text" className="input-text" name="username" id="username" />
                                        </p>
                                        <p className="form-row form-row-last">
                                            <label htmlfor="password">Password <span className="required">*</span>
                                            </label>
                                            <input className="input-text" type="password" name="password" id="password" />
                                        </p>
                                        <div className="clear">

                                        </div>


                                        <p className="form-row">

                                            <input type="submit" className="button" name="login" value="Login" />
                                            <label>
                                                <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                                                <span>Remember me</span>
                                            </label>
                                        </p>
                                        <p className="lost_password">
                                            <Link to="reset_password">Lost your password?</Link>
                                        </p>

                                        <div className="clear">

                                        </div>


                                    </form>

                                    <div className="woocommerce-info">Have a coupon? <a href="#" className="showcoupon">Click here to enter your code</a>
                                    </div>

                                    <form className="checkout_coupon" method="post" style={{ display: "none" }}>

                                        <p className="form-row form-row-first">
                                            <input type="text" name="coupon_code" className="input-text" placeholder="Coupon code" id="coupon_code" value="" />
                                        </p>

                                        <p className="form-row form-row-last">
                                            <input type="submit" className="button" name="apply_coupon" value="Apply coupon" />
                                        </p>

                                        <div className="clear">

                                        </div>
                                    </form>

                                    <form name="checkout" method="post" className="checkout woocommerce-checkout" action="https://html.modernwebtemplates.com/" enctype="multipart/form-data" novalidate="novalidate">


                                        <div className="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout">
                                            <ul className="woocommerce-error">
                                                <li><strong>Billing First name</strong> is a required field.</li>
                                                <li><strong>Billing Last name</strong> is a required field.</li>
                                                <li>Please enter a valid postcode / ZIP.</li>
                                            </ul>
                                        </div>


                                        <div className="col2-set" id="customer_details">
                                            <div className="col-1">
                                                <div className="woocommerce-billing-fields">

                                                    <h3>Billing details</h3>


                                                    <div className="woocommerce-billing-fields__field-wrapper">
                                                        <p className="form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field" id="billing_first_name_field" data-priority="10">
                                                            <label htmlfor="billing_first_name" className="">First name <abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="" value="" autocomplete="given-name" autofocus="autofocus" />
                                                        </p>
                                                        <p className="form-row form-row-last validate-required" id="billing_last_name_field" data-priority="20">
                                                            <label htmlfor="billing_last_name" className="">Last name <abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <input type="text" className="input-text " name="billing_last_name" id="billing_last_name" placeholder="" value="" autocomplete="family-name" />
                                                        </p>
                                                        <p className="form-row form-row-wide" id="billing_company_field" data-priority="30">
                                                            <label for="billing_company" className="">Company name</label>
                                                            <input type="text" className="input-text " name="billing_company" id="billing_company" placeholder="" value="" autocomplete="organization" />
                                                        </p>
                                                        <p className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated" id="billing_country_field" data-priority="40">
                                                            <label htmlfor="billing_country" className="">Country
                                                                <abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <select name="billing_country" id="billing_country" className="country_to_state country_select  select2-hidden-accessible" autocomplete="country" tabindex="-1" aria-hidden="true">
                                                                <option value="">Select a country…</option>
                                                                <option value="AX">Åland Islands</option>
                                                                <option value="AF">Afghanistan</option>
                                                                <option value="AL">Albania</option>
                                                                <option value="DZ">Algeria</option>
                                                                <option value="AS">American Samoa</option>
                                                                <option value="AD">Andorra</option>
                                                                <option value="AO">Angola</option>
                                                                <option value="AI">Anguilla</option>
                                                                <option value="AQ">Antarctica</option>
                                                                <option value="AG">Antigua and Barbuda</option>
                                                                <option value="AR">Argentina</option>
                                                                <option value="AM">Armenia</option>
                                                                <option value="AW">Aruba</option>
                                                                <option value="AU">Australia</option>
                                                                <option value="AT">Austria</option>
                                                                <option value="AZ">Azerbaijan</option>
                                                                <option value="BS">Bahamas</option>
                                                                <option value="BH">Bahrain</option>
                                                                <option value="BD">Bangladesh</option>
                                                                <option value="BB">Barbados</option>
                                                                <option value="BY">Belarus</option>
                                                                <option value="PW">Belau</option>
                                                                <option value="BE">Belgium</option>
                                                                <option value="BZ">Belize</option>
                                                                <option value="BJ">Benin</option>
                                                                <option value="BM">Bermuda</option>
                                                                <option value="BT">Bhutan</option>
                                                                <option value="BO">Bolivia</option>
                                                                <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                                                <option value="BA">Bosnia and Herzegovina</option>
                                                                <option value="BW">Botswana</option>
                                                                <option value="BV">Bouvet Island</option>
                                                                <option value="BR">Brazil</option>
                                                                <option value="IO">British Indian Ocean Territory</option>
                                                                <option value="VG">British Virgin Islands</option>
                                                                <option value="BN">Brunei</option>
                                                                <option value="BG">Bulgaria</option>
                                                                <option value="BF">Burkina Faso</option>
                                                                <option value="BI">Burundi</option>
                                                                <option value="KH">Cambodia</option>
                                                                <option value="CM">Cameroon</option>
                                                                <option value="CA">Canada</option>
                                                                <option value="CV">Cape Verde</option>
                                                                <option value="KY">Cayman Islands</option>
                                                                <option value="CF">Central African Republic</option>
                                                                <option value="TD">Chad</option>
                                                                <option value="CL">Chile</option>
                                                                <option value="CN">China</option>
                                                                <option value="CX">Christmas Island</option>
                                                                <option value="CC">Cocos (Keeling) Islands</option>
                                                                <option value="CO">Colombia</option>
                                                                <option value="KM">Comoros</option>
                                                                <option value="CG">Congo (Brazzaville)</option>
                                                                <option value="CD">Congo (Kinshasa)</option>
                                                                <option value="CK">Cook Islands</option>
                                                                <option value="CR">Costa Rica</option>
                                                                <option value="HR">Croatia</option>
                                                                <option value="CU">Cuba</option>
                                                                <option value="CW">Curaçao</option>
                                                                <option value="CY">Cyprus</option>
                                                                <option value="CZ">Czech Republic</option>
                                                                <option value="DK">Denmark</option>
                                                                <option value="DJ">Djibouti</option>
                                                                <option value="DM">Dominica</option>
                                                                <option value="DO">Dominican Republic</option>
                                                                <option value="EC">Ecuador</option>
                                                                <option value="EG">Egypt</option>
                                                                <option value="SV">El Salvador</option>
                                                                <option value="GQ">Equatorial Guinea</option>
                                                                <option value="ER">Eritrea</option>
                                                                <option value="EE">Estonia</option>
                                                                <option value="ET">Ethiopia</option>
                                                                <option value="FK">Falkland Islands</option>
                                                                <option value="FO">Faroe Islands</option>
                                                                <option value="FJ">Fiji</option>
                                                                <option value="FI">Finland</option>
                                                                <option value="FR">France</option>
                                                                <option value="GF">French Guiana</option>
                                                                <option value="PF">French Polynesia</option>
                                                                <option value="TF">French Southern Territories</option>
                                                                <option value="GA">Gabon</option>
                                                                <option value="GM">Gambia</option>
                                                                <option value="GE">Georgia</option>
                                                                <option value="DE">Germany</option>
                                                                <option value="GH">Ghana</option>
                                                                <option value="GI">Gibraltar</option>
                                                                <option value="GR">Greece</option>
                                                                <option value="GL">Greenland</option>
                                                                <option value="GD">Grenada</option>
                                                                <option value="GP">Guadeloupe</option>
                                                                <option value="GU">Guam</option>
                                                                <option value="GT">Guatemala</option>
                                                                <option value="GG">Guernsey</option>
                                                                <option value="GN">Guinea</option>
                                                                <option value="GW">Guinea-Bissau</option>
                                                                <option value="GY">Guyana</option>
                                                                <option value="HT">Haiti</option>
                                                                <option value="HM">Heard Island and McDonald Islands</option>
                                                                <option value="HN">Honduras</option>
                                                                <option value="HK">Hong Kong</option>
                                                                <option value="HU">Hungary</option>
                                                                <option value="IS">Iceland</option>
                                                                <option value="IN">India</option>
                                                                <option value="ID">Indonesia</option>
                                                                <option value="IR">Iran</option>
                                                                <option value="IQ">Iraq</option>
                                                                <option value="IE">Ireland</option>
                                                                <option value="IM">Isle of Man</option>
                                                                <option value="IL">Israel</option>
                                                                <option value="IT">Italy</option>
                                                                <option value="CI">Ivory Coast</option>
                                                                <option value="JM">Jamaica</option>
                                                                <option value="JP">Japan</option>
                                                                <option value="JE">Jersey</option>
                                                                <option value="JO">Jordan</option>
                                                                <option value="KZ">Kazakhstan</option>
                                                                <option value="KE">Kenya</option>
                                                                <option value="KI">Kiribati</option>
                                                                <option value="KW">Kuwait</option>
                                                                <option value="KG">Kyrgyzstan</option>
                                                                <option value="LA">Laos</option>
                                                                <option value="LV">Latvia</option>
                                                                <option value="LB">Lebanon</option>
                                                                <option value="LS">Lesotho</option>
                                                                <option value="LR">Liberia</option>
                                                                <option value="LY">Libya</option>
                                                                <option value="LI">Liechtenstein</option>
                                                                <option value="LT">Lithuania</option>
                                                                <option value="LU">Luxembourg</option>
                                                                <option value="MO">Macao S.A.R., China</option>
                                                                <option value="MK">Macedonia</option>
                                                                <option value="MG">Madagascar</option>
                                                                <option value="MW">Malawi</option>
                                                                <option value="MY">Malaysia</option>
                                                                <option value="MV">Maldives</option>
                                                                <option value="ML">Mali</option>
                                                                <option value="MT">Malta</option>
                                                                <option value="MH">Marshall Islands</option>
                                                                <option value="MQ">Martinique</option>
                                                                <option value="MR">Mauritania</option>
                                                                <option value="MU">Mauritius</option>
                                                                <option value="YT">Mayotte</option>
                                                                <option value="MX">Mexico</option>
                                                                <option value="FM">Micronesia</option>
                                                                <option value="MD">Moldova</option>
                                                                <option value="MC">Monaco</option>
                                                                <option value="MN">Mongolia</option>
                                                                <option value="ME">Montenegro</option>
                                                                <option value="MS">Montserrat</option>
                                                                <option value="MA">Morocco</option>
                                                                <option value="MZ">Mozambique</option>
                                                                <option value="MM">Myanmar</option>
                                                                <option value="NA">Namibia</option>
                                                                <option value="NR">Nauru</option>
                                                                <option value="NP">Nepal</option>
                                                                <option value="NL">Netherlands</option>
                                                                <option value="NC">New Caledonia</option>
                                                                <option value="NZ">New Zealand</option>
                                                                <option value="NI">Nicaragua</option>
                                                                <option value="NE">Niger</option>
                                                                <option value="NG">Nigeria</option>
                                                                <option value="NU">Niue</option>
                                                                <option value="NF">Norfolk Island</option>
                                                                <option value="KP">North Korea</option>
                                                                <option value="MP">Northern Mariana Islands</option>
                                                                <option value="NO">Norway</option>
                                                                <option value="OM">Oman</option>
                                                                <option value="PK">Pakistan</option>
                                                                <option value="PS">Palestinian Territory</option>
                                                                <option value="PA">Panama</option>
                                                                <option value="PG">Papua New Guinea</option>
                                                                <option value="PY">Paraguay</option>
                                                                <option value="PE">Peru</option>
                                                                <option value="PH">Philippines</option>
                                                                <option value="PN">Pitcairn</option>
                                                                <option value="PL">Poland</option>
                                                                <option value="PT">Portugal</option>
                                                                <option value="PR">Puerto Rico</option>
                                                                <option value="QA">Qatar</option>
                                                                <option value="RE">Reunion</option>
                                                                <option value="RO">Romania</option>
                                                                <option value="RU">Russia</option>
                                                                <option value="RW">Rwanda</option>
                                                                <option value="ST">São Tomé and Príncipe</option>
                                                                <option value="BL">Saint Barthélemy</option>
                                                                <option value="SH">Saint Helena</option>
                                                                <option value="KN">Saint Kitts and Nevis</option>
                                                                <option value="LC">Saint Lucia</option>
                                                                <option value="SX">Saint Martin (Dutch part)</option>
                                                                <option value="MF">Saint Martin (French part)</option>
                                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                                <option value="VC">Saint Vincent and the Grenadines</option>
                                                                <option value="WS">Samoa</option>
                                                                <option value="SM">San Marino</option>
                                                                <option value="SA">Saudi Arabia</option>
                                                                <option value="SN">Senegal</option>
                                                                <option value="RS">Serbia</option>
                                                                <option value="SC">Seychelles</option>
                                                                <option value="SL">Sierra Leone</option>
                                                                <option value="SG">Singapore</option>
                                                                <option value="SK">Slovakia</option>
                                                                <option value="SI">Slovenia</option>
                                                                <option value="SB">Solomon Islands</option>
                                                                <option value="SO">Somalia</option>
                                                                <option value="ZA">South Africa</option>
                                                                <option value="GS">South Georgia/Sandwich Islands</option>
                                                                <option value="KR">South Korea</option>
                                                                <option value="SS">South Sudan</option>
                                                                <option value="ES">Spain</option>
                                                                <option value="LK">Sri Lanka</option>
                                                                <option value="SD">Sudan</option>
                                                                <option value="SR">Suriname</option>
                                                                <option value="SJ">Svalbard and Jan Mayen</option>
                                                                <option value="SZ">Swaziland</option>
                                                                <option value="SE">Sweden</option>
                                                                <option value="CH">Switzerland</option>
                                                                <option value="SY">Syria</option>
                                                                <option value="TW">Taiwan</option>
                                                                <option value="TJ">Tajikistan</option>
                                                                <option value="TZ">Tanzania</option>
                                                                <option value="TH">Thailand</option>
                                                                <option value="TL">Timor-Leste</option>
                                                                <option value="TG">Togo</option>
                                                                <option value="TK">Tokelau</option>
                                                                <option value="TO">Tonga</option>
                                                                <option value="TT">Trinidad and Tobago</option>
                                                                <option value="TN">Tunisia</option>
                                                                <option value="TR">Turkey</option>
                                                                <option value="TM">Turkmenistan</option>
                                                                <option value="TC">Turks and Caicos Islands</option>
                                                                <option value="TV">Tuvalu</option>
                                                                <option value="UG">Uganda</option>
                                                                <option value="UA">Ukraine</option>
                                                                <option value="AE">United Arab Emirates</option>
                                                                <option value="GB">United Kingdom (UK)</option>
                                                                <option value="US" selected="selected">United States (US)</option>
                                                                <option value="UM">United States (US) Minor Outlying Islands</option>
                                                                <option value="VI">United States (US) Virgin Islands</option>
                                                                <option value="UY">Uruguay</option>
                                                                <option value="UZ">Uzbekistan</option>
                                                                <option value="VU">Vanuatu</option>
                                                                <option value="VA">Vatican</option>
                                                                <option value="VE">Venezuela</option>
                                                                <option value="VN">Vietnam</option>
                                                                <option value="WF">Wallis and Futuna</option>
                                                                <option value="EH">Western Sahara</option>
                                                                <option value="YE">Yemen</option>
                                                                <option value="ZM">Zambia</option>
                                                                <option value="ZW">Zimbabwe</option>
                                                            </select>
                                                        </p>
                                                        <p className="form-row form-row-wide address-field validate-required" id="billing_address_1_field" data-priority="50">
                                                            <label htmlfor="billing_address_1" className="">Street
                                                                address <abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <input type="text" className="input-text " name="billing_address_1" id="billing_address_1" placeholder="House number and street name" value="" autocomplete="address-line1" />
                                                        </p>
                                                        <p className="form-row form-row-wide address-field" id="billing_address_2_field" data-priority="60">
                                                            <input type="text" className="input-text " name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)" value="" autocomplete="address-line2" />
                                                        </p>
                                                        <p className="form-row form-row-wide address-field validate-required" id="billing_city_field" data-priority="70" data-o_class="form-row form-row-wide address-field validate-required">
                                                            <label htmlfor="billing_city" className="">Town / City <abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <input type="text" className="input-text " name="billing_city" id="billing_city" placeholder="" value="" autocomplete="address-level2" />
                                                        </p>
                                                        <p className="form-row form-row-wide address-field validate-state validate-required" id="billing_state_field" data-priority="80" data-o_class="form-row form-row-wide address-field validate-required validate-state">
                                                            <label htmlfor="billing_state" className="">State / County <abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <input type="text" className="input-text " value="" placeholder="" name="billing_state" id="billing_state" autocomplete="address-level1" />
                                                        </p>
                                                        <p className="form-row form-row-wide address-field validate-postcode validate-required" id="billing_postcode_field" data-priority="90" data-o_class="form-row form-row-wide address-field validate-required validate-postcode">
                                                            <label htmlfor="billing_postcode" className="">Postcode / ZIP <abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <input type="text" className="input-text " name="billing_postcode" id="billing_postcode" placeholder="" value="" autocomplete="postal-code" />
                                                        </p>
                                                        <p className="form-row form-row-first validate-required validate-phone" id="billing_phone_field" data-priority="100">
                                                            <label htmlfor="billing_phone" className="">Phone <abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <input type="tel" className="input-text " name="billing_phone" id="billing_phone" placeholder="" value="" autocomplete="tel" />
                                                        </p>
                                                        <p className="form-row form-row-last validate-required validate-email" id="billing_email_field" data-priority="110">
                                                            <label htmlfor="billing_email" className="">Email address <abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <input type="email" className="input-text " name="billing_email" id="billing_email" placeholder="" value="admin@test.com" />
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="col-2">
                                                <div className="woocommerce-shipping-fields">
                                                </div>
                                                <div className="woocommerce-additional-fields">


                                                    <h3>Additional information</h3>


                                                    <div className="woocommerce-additional-fields__field-wrapper">
                                                        <p className="form-row notes" id="order_comments_field" data-priority="">
                                                            <label htmlfor="order_comments" className="">Order
                                                                notes</label>
                                                            <textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5">

                                                            </textarea>
                                                        </p>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>


                                        <h3 id="order_review_heading">Your order</h3>


                                        <div id="order_review" className="woocommerce-checkout-review-order">
                                            <table className="shop_table woocommerce-checkout-review-order-table">
                                                <thead>
                                                    <tr>
                                                        <th className="product-name">Product</th>
                                                        <th className="product-total">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="cart_item">
                                                        <td className="product-name">
                                                            Premium Quality&nbsp; <strong className="product-quantity">× 1</strong>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <span className="woocommerce-Price-currencySymbol">$</span>12.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="cart_item">
                                                        <td className="product-name">
                                                            Woo Ninja&nbsp; <strong className="product-quantity">× 1</strong>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <span className="woocommerce-Price-currencySymbol">$</span>15.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="cart_item">
                                                        <td className="product-name">
                                                            Woo Album #3&nbsp; <strong className="product-quantity">× 2</strong>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <span className="woocommerce-Price-currencySymbol">$</span>18.00</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>

                                                    <tr className="cart-subtotal">
                                                        <th>Subtotal</th>
                                                        <td>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <span className="woocommerce-Price-currencySymbol">$</span>45.00</span>
                                                        </td>
                                                    </tr>


                                                    <tr className="order-total">
                                                        <th>Total</th>
                                                        <td>
                                                            <strong>
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <span
                                                                        className="woocommerce-Price-currencySymbol">$</span>45.00</span>
                                                            </strong>
                                                        </td>
                                                    </tr>


                                                </tfoot>
                                            </table>

                                            <div id="payment" className="woocommerce-checkout-payment">
                                                <ul className="wc_payment_methods payment_methods methods">
                                                    <li className="wc_payment_method payment_method_cheque">
                                                        <input id="payment_method_cheque" type="radio" className="input-radio" name="payment_method" value="cheque" checked="checked" data-order_button_text="" />

                                                        <label htmlfor="payment_method_cheque">
                                                            Check payments </label>
                                                        <div className="payment_box payment_method_cheque" style={{ display: "none" }}>
                                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store
                                                                Postcode.</p>
                                                        </div>
                                                    </li>
                                                    <li className="wc_payment_method payment_method_cod">
                                                        <input id="payment_method_cod" type="radio" className="input-radio" name="payment_method" value="cod" data-order_button_text="" />

                                                        <label htmlfor="payment_method_cod">
                                                            Cash on delivery </label>
                                                        <div className="payment_box payment_method_cod" style={{ display: "block" }}>
                                                            <p>Pay with cash upon delivery.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="form-row place-order">
                                                    <noscript>
                                                        Since your browser does not support JavaScript, or it is disabled, please ensure you click the
                                                        &lt;em&gt;Update Totals&lt;/em&gt; button before placing your order. You may be charged more
                                                        than the amount stated above if you fail to do so. &lt;br/&gt;&lt;input type="submit"
                                                        className="button alt" name="woocommerce_checkout_update_totals" value="Update totals" /&gt;
                                                    </noscript>


                                                    <input type="submit" className="button alt" name="woocommerce_checkout_place_order" id="place_order" value="Place order" data-value="Place order" />

                                                </div>
                                            </div>

                                        </div>


                                    </form>


                                </main>
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

export default Checkout