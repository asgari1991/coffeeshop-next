import { useState } from "react";
import Sms from "./Sms";


const Register = ({showloginForm}) => {
const [isRegisterWithPass,setIsRegisterWithPass]=useState(false)
const [isRegisterWithOtp,setIsRegisterWithOtp]=useState(false)
const hideOtpForm=()=>setIsRegisterWithOtp(false)
  return (
    <>
      {!isRegisterWithOtp ? (<>
      <div className="grid bg-white px-[25px] py-[10px] w-[380px] font-shabnam mt-28 mx-auto mb-8 rounded-[4px] shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] text-center text-black">
        <input className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px] text-right" type="text" placeholder="نام" />
        <input
          className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px] text-right"
          type="text"
          placeholder="شماره موبایل  "
        />
        <input
          className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px] text-right"
          type="email"
          placeholder="ایمیل (دلخواه)"
        />
        {isRegisterWithPass && (
          <input
            className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px] text-right"
            type="password"
            placeholder="رمز عبور"
          />
        )}
        <p  className="p-[0.8rem] mt-2 cursor-pointer font-shabnam bg-mainBrown text-white" onClick={()=>setIsRegisterWithOtp(true)}>
          ثبت نام با کد تایید
        </p>
        <button  onClick={()=>setIsRegisterWithPass(true)} className="p-[0.8rem] mt-[0.7rem] cursor-pointer font-shabnam bg-mainBrown text-white">
          ثبت نام با رمزعبور
        </button>
        <p className="text-[#6d6d6d] border border-[#d6d6d6] mb-12 mt-4 cursor-pointer p-4 bg-[#f2f2f2] font-shabnam" onClick={showloginForm}>برگشت به ورود</p>
      </div>
      <p className="block w-max mx-auto font-shabnam cursor-pointer text-[13px] text-mainBrown">لغو</p>
      </>):( <Sms hideOtpForm={hideOtpForm} /> )}

     
    </>
  );
};

export default Register;
