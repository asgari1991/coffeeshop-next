import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import Sms from "./Sms";
const Login = ({showRegisterForm}) => {
  const [isLoginWithOtp,setIsLoginWithOtp]=useState(false)
  const hideOtpForm=()=>setIsLoginWithOtp(false)
  return (
    <>
    {!isLoginWithOtp ? (  <>
    <div className='grid bg-white px-[25px] py-2.5 w-[380px] font-shabnam mt-[7rem] mb-[2rem] mx-auto 
            rounded shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] text-center text-black'>
        <input
          className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px]"
          type="text"
          placeholder="ایمیل/شماره موبایل"
          dir="rtl"
        />
        <input
          className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px]"
          type="password"
          placeholder="رمز عبور"
          dir="rtl"
        />
        <div className={`${styles.checkbox} flex mt-5 mb-2.5 justify-start flex-row-reverse items-center gap-[6px]`}>
          <input type="checkbox" name="" id="" className="appearance-none w-4 h-4 border border-[#d9d9d9] rounded-[1px] align-sub translate-y-[-10%] outline-none checked:bg-mainBrown checked:border-mainBrown"/>
          <p className="text-[14px] font-shabnam">مرا به یاد داشته باش</p>
        </div>
        <button className="p-[0.8rem] cursor-pointer font-shabnam bg-mainBrown text-white">ورود</button>
        <Link href={"/forget-password"} className="text-[13px] my-4 cursor-pointer">
          رمز عبور را فراموش کرده اید؟
        </Link>
        <button className="p-[0.8rem] cursor-pointer font-shabnam bg-mainBrown text-white" onClick={()=>setIsLoginWithOtp(true)}>ورود با کد یکبار مصرف</button>
        <span className="text-right mt-[30px] mb-5 text-[13px]">ایا حساب کاربری ندارید؟</span>
        <button className="text-[#6d6d6d] border border-[#d6d6d6] mb-12 cursor-pointer p-4 bg-[#f2f2f2] font-shabnam" onClick={showRegisterForm}>ثبت نام</button>
      </div>
      <Link href={"/"} className="block w-max mx-auto font-shabnam cursor-pointer text-[13px] text-mainBrown">
        لغو
      </Link>
    </>):(
          <Sms hideOtpForm={hideOtpForm} /> 
      )}
   

     
    </>
  );
};

export default Login;
