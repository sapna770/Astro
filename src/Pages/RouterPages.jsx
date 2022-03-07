import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Pricing from './Pricing'
import Forecast from './Forecast'
import Shop from './Shop'
import Services from './Services'
import ContactUs from './ContactUs'
import Gallery from './Gallery'
import Faq from './Faq'
import Team from './Team'
import Events from './Events'
import OrderReceived from './OrderReceived'
import Checkout from './Checkout'
import Cart from './Cart'
import AccountDetail from './AccountDetail'
import Login_Logout from './Login_Logout'
import ResetPassword from './ResetPassword'
import ProductDetail from './ProductDetail'
import Yoga from './Yoga'
const RouterPages = () => {
    return (
        <div>
         
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/forecast' element={<Forecast />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<ContactUs />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/orderreceived' element={<OrderReceived />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/accountdetail' element={<AccountDetail />} />
                    <Route path='/loginlogout' element={<Login_Logout />} />
                    <Route path='/reset_password' element={<ResetPassword />} />
                    <Route path='/product_detail' element={<ProductDetail />} />
                    <Route path='/yoga' element={<Yoga />} />
                </Routes>
            
        </div>
    )
}

export default RouterPages