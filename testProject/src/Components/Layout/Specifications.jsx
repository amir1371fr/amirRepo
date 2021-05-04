import React, { Fragment } from 'react';

const Specifications = () => {
    return ( 
        <Fragment>
            <div className="flex justify-center my-5 2xl:mx-auto divSpeciFications ">
            <div className="mx-5">
                    <ul className="text-right">
                        <li className="text-sm"> <span>Android ۱۰</span> : نسخه سیستم عامل   <i class="fas fa-check text-green-600 ml-1"></i></li>
                        <li className="text-sm">IPS :  فناوری صفحه نمایش<i class="fas fa-check text-green-600 ml-1"></i> </li>
                        <li className="text-sm">مجهز به حسگر اثر انگشت <i class="fas fa-check text-green-600 ml-1"></i></li>
                        <li className="text-sm">مناسب عکاسی ، مناسب عکاسی سلفی <i class="fas fa-check text-green-600 ml-1"></i></li>
                    </ul>
                </div>
                <div className="mx-5">
                    <ul className="text-right">
                        <li className="text-sm">حافظه داخلی : ۱۲۸ گیگابایت <i class="fas fa-check text-green-600 ml-1"></i></li>
                        <li className="text-sm"><span>۲G،۳G،۴G</span> : شبکه های ارتباطی<i class="fas fa-check text-green-600 ml-1"></i> </li>
                        <li className="text-sm">دوربین های پشت گوشی : ۳ ماژمول دوربین<i class="fas fa-check text-green-600 ml-1"></i></li>
                        <li className="text-sm">توضیحات سیم کارت : سایز نانو ۸.۸ ۱۰۱<i class="fas fa-check text-green-600 ml-1"></i></li>
                    </ul>
                </div>
               
            </div>
        </Fragment>
     );
}
 
export default Specifications;