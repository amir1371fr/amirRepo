import React, { Fragment } from 'react';
import images from "./images.jpg";
import images1 from "./images1.jpg";
import images2 from "./images2.jpg";
import images3 from "./images3.jpg";
import images4 from "./images4.jpg";
import images5 from "./images5.jpg";
import images6 from "./images6.jpg";
import images9 from "./images9.jpg";

const Product = () => {
    return ( 
        <Fragment>
            <div className="2xl:mx-64 xl:mr-0 mt-6 flex justify-center">
               <div className="flex justify-between scroll">
               <img src={images} alt="" className="img"/>
                <img src={images1} alt="" className="img"/>
                <img src={images2} alt="" className="img"/>
                <img src={images3} alt="" className="img"/>
                <img src={images4} alt="" className="img"/>
                <img src={images5} alt="" className="img"/>
                <img src={images6} alt="" className="img"/>
                <img src={images9} alt="" className="img"/>
               </div>
            </div>
            <div className=" text-right pr-2 shadow mx-auto " id="prices">
                  <div className="flex flex-row-reverse justify-between text-sm mt-1 ml-2">
                    <p className="">قیمت : آک</p>
                  <div className="flex flex-row-reverse ">  <span>۵۵،۰۰۰ </span>
                    <span className="mr-1">تومان</span>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse justify-between text-sm mt-1 ml-2">
                    <p className="">قیمت : کارکرده</p>
                  <div className="flex flex-row-reverse ">  <span>۱۵،۰۰۰ </span>
                    <span className="mr-1">تومان</span>
                    </div>
                  </div>
                  <hr className="mx-auto my-3" style={{width:"95%"}}/>
                  <div className="flex flex-row-reverse justify-between text-sm mt-1 ml-2">
                    <p className="">قیمت : لوازم جانبی</p>
                  <div className="flex flex-row-reverse ">  <span>۵۵،۰۰۰ </span>
                    <span className="mr-1">تومان</span>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse justify-between text-sm mt-1 ml-2">
                    <p className="">هزینه : پست </p>
                  <div className="flex flex-row-reverse ">  <span>۱۵،۰۰۰ </span>
                    <span className="mr-1">تومان</span>
                    </div>
                  </div>
                  <hr className="mx-auto my-3" style={{width:"95%"}}/>
                  <div className="flex flex-row-reverse justify-between text-sm mt-1 ml-2">
                    <p className="">قیمت : لوازم جانبی</p>
                  <div className="flex flex-row-reverse ">  <span>۵۵،۰۰۰ </span>
                    <span className="mr-1">تومان</span>
                    </div>
                  </div>
                </div>
        </Fragment>
     );
}
 
export default Product;