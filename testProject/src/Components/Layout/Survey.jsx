import React, { Fragment } from 'react';
import video from "./video.mp4";
import images1 from './Product/images1.jpg';
import map from './Product/map.png';
import insta from './Product/insta.jpg';
import link from './Product/link.jpg';
import telegram from './Product/telegram.jpg';
import aparat from './Product/aparat.png';
import etehad from './Product/etehad.jpg';
import etemad from './Product/etemad.jpg';
import neshan from './Product/neshan.jpg';
import chart from "./chart.png";
const Survey = () => {
    return (
        <Fragment>
            <div className="survey 2xl:mx-auto">
                <div className="mb-5">
                    <video width="670" height="470" controls poster={images1} >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="text-right mb-10 surveyPhone shadow p-4" >
                    <p>بررسی</p>
                    <p className="text-sm mt-2 leading-7">
                    گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌ کارت ظرفیت 128 گیگابایت از جمله اولین سری محصولات برند شیائومی است. این محصول دارای ساختاری متوازن و خوش‌ساخت بدون پشتیبانی از تکنولوژی 5G در تاریخ نوامبر 2020 روانه بازار شده است. این محصول از فریم پلاستیکی ساخته شده است که قاب جلو شیشه‌ای جلوه ویژه‌ای به این مدل بخشیده است. صفحه‌نمایش گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌ کارت ظرفیت 128 گیگابایت در اندازه 6.53 منتشر شده است. 
                   </p>
                </div>
                <div className=" mb-10 chart " >
                   <div className="text-right">
                   <p className="textChart">نمودار افزایش قیمت</p>
                   </div>
                    <img src={chart} alt=""/>
                    <div className="text-right mt-5">
                   <p className="my-3 textSurvey">نقد و بررسی  تخصصی</p>
                   <p className="text-sm leading-7 paragraphSurvey">گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌ کارت ظرفیت 128 گیگابایت از جمله اولین سری محصولات برند شیائومی است. این محصول دارای ساختاری متوازن و خوش‌ساخت بدون پشتیبانی از تکنولوژی 5G در تاریخ نوامبر 2020 روانه بازار شده است. </p>
                   </div>
                   <div className="text-right mt-5">
                   <p className="my-3 textSurvey">ویژگی های مثبت</p>
                   </div>
                   <div className="text-right futurePlus  flex flex-row-reverse justify-between text-right">
                    <ul>
                        <li className="text-sm"> جنس پلاستیک سخت ، سیلیکین -</li>
                        <li className="text-sm">سطح پوشش قاب پشتی ، لبه بالایی -</li>
                        <li className="text-sm">مقاوم دربرابرضربه ، مقاوم دربرابر آب -</li>
                        <li className="text-sm">دسترسی آسان به درگاه -</li>
                    </ul>
                    <ul>
                        <li className="text-sm"> جایگزین قاب پشتی موبایل -</li>
                        <li className="text-sm">انعطاف پذیر، لبه های برجسته -</li>
                        <li className="text-sm">لبه های برجسته برای محافطت دوربین -</li>
                        <li className="text-sm">مقاوم در برابر خط و خش -</li>
                    </ul>
                    <ul >
                        <li className="text-sm"> پشتیبانی از شارژر بی سیم -</li>
                        <li className="text-sm">ساختار نیمه شفاف -</li>
                    </ul>
                   </div>
                  
                </div>
                
            </div>
            <div className="flex justify-center divMap mb-10">
                       <img src={map} alt=""/>
                   </div>
                  <div>
                  <div className="footer mt-5 flex flex-row-reverse justify-center">
                   <div className="flex flex-row-reverse justify-between ">
                   <div className="w-1/4">
                    <ul className="text-right my-5" >
                        <li className="text-sm text-green-600">معرفی فروشگاه</li>
                        <li className="text-sm text-green-600">سوالات متداول</li>
                        <li className="text-sm text-green-600">تماس باما</li>
                        <li className="text-sm text-green-600">مقررات و شرایط</li>
                    </ul>
                    </div>
                  <div className="flex justify-between flex-row-reverse divRootCenterCall w-3/5 ">
                  <div className="flex flex-wrap content-center centerCall  ">
                         <div className="" >
                         <p className="">مرکز تماس  ۰۳۵ ۱۲۲۴</p>
                       <div className="flex iconImg justify-between mt-3  ">
                       <img src={link} alt=""/>
                        <img src={insta} alt=""/>
                        <img src={telegram} alt=""/>
                        <img src={aparat} alt=""/>
                       </div>
                         </div>
                    </div>
                    <div className="flex iconMark justify-between mt-6 " >
                    <img src={etehad} alt=""/>
                        <img src={etemad} alt=""/>
                        <img src={neshan} alt=""/>
                    </div>
                  </div>
                   </div>
                   </div>
                   <div className="flex justify-center copyRight py-4">
                   <div className="flex flex-wrap content-center">
                   <div className=" text-center text-sm">
                        <p>.کلیه حقوق مادی و معنوی این سایت معتلق به شرکت توسعه دیجیتال فروشگاه است</p>
                        <p>کاربر و بیننده این سامانه کلیه <span className="text-green-600">مقررات و شرایط فروشگاه </span>را پذیرفته است</p>
                   </div>
                   </div>
                   </div>
                  </div>
        </Fragment>
    );
}

export default Survey;