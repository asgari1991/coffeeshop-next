import React from "react";

import Link from "next/link";

const ForgotPassword = () => {
  return (
    <>
      <div className="z-[999] h-screen overflow-hidden w-full bg-[linear-gradient(rgb(237,230,234),rgb(237,230,234))] bg-cover bg-fixed flex">
        <div data-aos="fade-up" className="w-1/2">
          <div className='grid bg-white px-[25px] py-2.5 w-[380px] font-shabnam mt-[13rem] mb-[2rem] mx-auto 
            rounded shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] text-center text-black'>
            <input
              className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px]"
              type="text"
              placeholder="ایمیل / شماره موبایل"
            />
            <button className="p-[0.8rem] mt-4 cursor-pointer font-shabnam bg-mainBrown text-white">
              بازنشانی رمزعبور
            </button>
            <Link href={"/login-register"} className="text-[13px] cursor-pointer text-center mt-4 mb-12">
              برگشت به ورود
            </Link>
          </div>
          <Link href={"/login-register"} className="block w-max mx-auto font-shabnam cursor-pointer text-[13px] text-mainBrown">
            لغو
          </Link>
        </div>
        <section className="w-1/2 h-full bg-mainBrown">
          <img
            src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
            alt=""
          />
        </section>
      </div>
    </>
  );
};

export default ForgotPassword;
