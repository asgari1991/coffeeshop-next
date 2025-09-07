import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import Sms from "./Sms";
import { showSwal } from "@/utils/helpers";
import { validateEmail, validatePassword } from "@/utils/auth";
import { useRouter } from "next/navigation";
const Login = ({ showRegisterForm }) => {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);
  const [password, setPassword] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const router=useRouter()
  const hideOtpForm = () => setIsLoginWithOtp(false);
  const loginWithPassword = async () => {
    if (!phoneOrEmail) {
      return showSwal("ایمیل یا موبایل را وارد کنید", "error", "اوکی");
    }
    const isValidEmail = validateEmail(phoneOrEmail);
    if (!isValidEmail) {
      return showSwal(" ایمیل وارد شده صحیح نمی باشد", "error", "تلاش مجدد");
    }
    if (!password) {
      return showSwal("پسورد را وارد کنید", "error", "اوکی");
    }
    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      return showSwal(
        "پسورد به اندازه کافی قوی نمی باشد",
        "error",
        "تلاش مجدد"
      );
    }
    const user={email:phoneOrEmail,password}
    const res=await fetch('/api/auth/signin',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    })
   if (res.status===200) {
    swal({
      title: "شما با موفقیت وارد شدید",
      icon:'success',
      buttons:"ورود به پنل کاربری"
    }).then(result=>{
      router.replace('p-user')
    })
   }else if (res.status===422 || res.status===401) {
        showSwal("کاربری با این مشخصات یافت نشد","error","تلاش مجدد")

   }else if(res.status===419)
            showSwal("ایمیل یا پسورد صحیح نمی باشد ","error","تلاش مجدد")

  };
  return (
    <>
      {!isLoginWithOtp ? (
        <>
          <div
            className="grid bg-white px-[25px] py-2.5 w-[380px] font-shabnam mt-[7rem] mb-[2rem] mx-auto 
            rounded shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] text-center text-black"
          >
            <input
              className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px]"
              type="text"
              placeholder="ایمیل/شماره موبایل"
              value={phoneOrEmail}
              onChange={(event) => setPhoneOrEmail(event.target.value)}
              dir="rtl"
            />
            <input
              className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px]"
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              dir="rtl"
            />
            <div
              className={`${styles.checkbox} flex mt-5 mb-2.5 justify-start flex-row-reverse items-center gap-[6px]`}
            >
              <input
                type="checkbox"
                name=""
                id=""
                className="appearance-none w-4 h-4 border border-[#d9d9d9] rounded-[1px] align-sub translate-y-[-10%] outline-none checked:bg-mainBrown checked:border-mainBrown"
              />
              <p className="text-[14px] font-shabnam">مرا به یاد داشته باش</p>
            </div>
            <button
              className="p-[0.8rem] cursor-pointer font-shabnam bg-mainBrown text-white"
              onClick={loginWithPassword}
            >
              ورود
            </button>
            <Link
              href={"/forget-password"}
              className="text-[13px] my-4 cursor-pointer"
            >
              رمز عبور را فراموش کرده اید؟
            </Link>
            <button
              className="p-[0.8rem] cursor-pointer font-shabnam bg-mainBrown text-white"
              onClick={() => setIsLoginWithOtp(true)}
            >
              ورود با کد یکبار مصرف
            </button>
            <span className="text-right mt-[30px] mb-5 text-[13px]">
              ایا حساب کاربری ندارید؟
            </span>
            <button
              className="text-[#6d6d6d] border border-[#d6d6d6] mb-12 cursor-pointer p-4 bg-[#f2f2f2] font-shabnam"
              onClick={showRegisterForm}
            >
              ثبت نام
            </button>
          </div>
          <Link
            href={"/"}
            className="block w-max mx-auto font-shabnam cursor-pointer text-[13px] text-mainBrown"
          >
            لغو
          </Link>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </>
  );
};

export default Login;
