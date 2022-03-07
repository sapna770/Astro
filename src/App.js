import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
import Forecast from './Pages/Forecast'
import Shop from './Pages/Shop'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import Gallery from './Pages/Gallery'
import Faq from './Pages/Faq'
import Team from './Pages/Team'
import Events from './Pages/Events'
import OrderReceived from './Pages/OrderReceived'
import Checkout from './Pages/Checkout'
import Cart from './Pages/Cart'
import AccountDetail from './Pages/AccountDetail'
// import Login_Logout from './Pages/Login_Logout'
import ResetPassword from './Pages/ResetPassword'
import ProductDetail from './Pages/ProductDetail'
import Yoga from './Pages/Yoga'


function App() {
  return (
    <>
      <Routes basename="/">
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
        {/* <Route path='/loginlogout' element={<Login_Logout />} /> */}
        <Route path='/reset_password' element={<ResetPassword />} />
        <Route path='/product_detail' element={<ProductDetail />} />
        <Route path='/yoga' element={<Yoga />} />
      </Routes>

    </>
  );
}

export default App;
