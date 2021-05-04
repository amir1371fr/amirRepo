import React, { Fragment } from 'react';

const Order = () => {
    return (
        <Fragment>
            <div className="flex p-4 divOrder  ">
                <div className=" text-xs 2xl:ml-64 xl:ml-0 Order">
                    <button className="buttonOrder text-sm ml-2" >ثبت  سفارش</button>

                </div>
                <div className="text-xs">
                    <span className="ml-3">قیمت خرید گوشی </span>
                    <span>۱،۵۵۵،۰۰۰ </span>
                    <span className="ml-10 mr-2">تومان</span>
                    <p className="ml-10 mr-2 flex text-gray-500 mt-1" style={{ fontSize: "11px" }} ><span>عدد باقی مانده</span>
                        <span className="mx-1 ">
                            ۱۰
                    </span>
                    <i className="fas fa-mobile-alt text-green-600 mt-0.5" style={{fontSize:"15px"}}></i> 
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default Order;