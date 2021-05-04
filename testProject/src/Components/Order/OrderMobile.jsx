import React, { Fragment } from 'react';

const OrderMobile = () => {
    return (
        <Fragment>
            <div className=" p-4 divOrderMobile justify-center ">
            <div className="text-xs flex justify-center flex-row-reverse">
                    <span className="ml-3">قیمت خرید گوشی </span>
                    <span>۱،۵۵۵،۰۰۰ </span>
                    <span className="ml-10 mr-2">تومان</span>
                </div>
                <div className="flex text-xs 2xl:ml-64 xl:ml-0 Order  justify-center mt-2 ">
                    <button className="buttonOrder text-sm ml-10" >ثبت  سفارش</button>
                    <p className="ml-2  flex text-gray-500 mt-1" style={{ fontSize: "11px" }} ><span>عدد باقی مانده</span>
                        <span className="mx-1 ">
                            ۱۰
                    </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </p>
                </div>
              
            </div>
        </Fragment>
    );
}

export default OrderMobile;