import React, { Fragment } from 'react';
import OrderMobile from './Components/Order/OrderMobile';
import Order from "./Components/Order/Order"
import Header from './Components/Header';
import Store from './Components/Layout/Store';
import Product from './Components/Layout/Product/Product';
import Specifications from './Components/Layout/Specifications';
import Moreinfo from './Components/Layout/Moreinfo';
import Survey from './Components/Layout/Survey';


const App = () => {
    return (
        <Fragment>
            <OrderMobile />
           <Header/>
           <Order/>
           <Store/>
           <Product/>
           <Specifications/>
           <Moreinfo/>
           <Survey/>
        </Fragment>
    );
}

export default App;