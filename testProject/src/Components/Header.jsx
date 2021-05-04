import React, { Fragment } from 'react';


const Header = () => {
    return (
        <Fragment>
            <div className="flex flex-row-reverse p-4  divHeader ">
                <div className="flex flex-row-reverse w-2/4 text-lg 2xl:mr-64 xl:mr-0 divShoping ">
                <i className="fas fa-bars text-green-600 mt-0.5"></i>
                    <p className="text-green-600 mx-2 -my-1 ">فروشگاه</p>
                </div>
                <div className="w-2/4 flex flex-row-reverse justify-end text-green-600 text-sm 2xl:ml-64 xl:ml-0 divPrice  ">
                    <p className="ml-10 priceMobile">قیمت گوشی</p>
                    <i className="fas fa-plus text-green-600 mt-1.5 ml-1" id="svgPlus" style={{fontSize:"11px"}}></i>
                   <p className="ml-10 wallet ">موجودی کیف پول  ۳،۲۵۰،۰۰۰  تومان </p>
                  <i class="fas fa-dollar-sign text-green-600 mt-1 " id="svgIcon" style={{fontSize:"15px"}}></i>
                  <i class="fas fa-wallet  text-green-600 mt-1 mx-3" id="svgIcon"style={{fontSize:"15px"}}></i>
                    <i class="far fa-bell  text-green-600 mt-1 ml-1" style={{fontSize:"15px"}}></i>
                    <i class="far fa-user  text-green-600 mt-1 mr-2 ml-1 " id="svgUser"  style={{fontSize:"15px"}}></i>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;