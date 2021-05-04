import React, { Fragment } from 'react';

const Store = () => {
    return (
        <Fragment>

            <div className="flex flex-row-reverse  text-lg 2xl:mr-64 xl:mr-0  my-2 pr-6 divStore  ">
            <i class="fas fa-angle-right mt-0.5 " style={{fontSize:"13px"}}></i>
                <p className="mx-1 -my-1 text-sm ">فروشگاه</p>
            </div>
            <div className="flex flex-row-reverse  justify-evenly  2xl:mx-64 xl:mr-0 ">
                <div className="onOffer text-right justify-end pr-2 shadow ">
                    <div className="flex flex-row-reverse justify-start text-sm mt-2">
                    <i class="fas fa-check-circle text-green-600 mt-0.5" style={{fontSize:"11px"}}></i>
                        <p className="mx-1 -my-1 text-sm text-green-600 ">در حال عرضه</p>
                    </div>
                        <div>    
                            <p className="mt-2 text-lg">گوشی شیائومی ۱۲۸ گیگابایت</p>
                           <div className="flex flex-row-reverse justify-start">
                            <i class="fas fa-user mt-5"></i>
                           <p className=" text-sm mt-5 mr-2">شرکت شیائومی</p>
                           </div>
                           <div  className="flex flex-row-reverse justify-start mt-1">
                           <i class="fas fa-flag-usa"></i>
                           <p className=" text-sm  mr-2"> ساخت چین</p>
                           </div>
                          <div className="flex flex-row-reverse justify-between">
                         <div>
                         <div  className="flex flex-row-reverse justify-start mt-5 text-gray-500">
                           <p className=" text-sm  ">۱۴۰۰/۱/۵ ۱۵:۲۸ : آغاز  فروش</p>
                           </div>
                           <div  className="flex flex-row-reverse justify-start mt-1 text-gray-500 mb-4">
                           <p className=" text-sm  ">۱۴۰۰/۱/۵ ۱۵:۲۸ : پایان فروش</p>
                           </div>
                         </div>
                         <div className="mt-5  divTime  flex flex-wrap content-end  " >
                        <div className="ml-2 mb-1 text-left" style={{height:"50px"}}>
                        <p className=" text-sm "><span className="ml-2" >۲۳</span><span className="ml-5">۲۳</span><span className="ml-6">۱۰</span><span className="ml-7">۱</span></p>
                        <p className=" text-sm "><span className="mr-2" >روز</span><span className="mr-2">ساعت</span><span className="mr-2">دقیقه</span><span className="mr-2">ثانیه</span><i class="far fa-clock"style={{fontSize:"20px"}}></i></p>
                        
                        </div>
                         </div>
                          </div>
                         
                        </div>
                        
                </div>
                <div className="prices text-right pr-2 shadow">
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
                  <div className="flex flex-row-reverse "> 
                   <span>۵۵،۰۰۰ </span>
                    <span className="mr-1">تومان</span>
                    </div>
                  </div>
                 
                </div>
            </div>
        </Fragment>
    );
}

export default Store;