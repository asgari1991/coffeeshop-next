import { useState } from "react";

import Sms from "./Sms";
import { showSwal } from "@/utils/helpers";
import { validateEmail, validatePassword, validatePhone } from "@/utils/auth";

const Register = ({ showloginForm }) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const hideOtpForm = () => setIsRegisterWithOtp(false);
  const signUp = async () => {
    if (!name.trim()) {
      return showSwal("نام را وارد کنید", "error", "تلاش مجدد");
    }
    const isValidPhone = validatePhone(phone);
    if (!isValidPhone) {
      return showSwal("شماره تلفن وارد شده معتبر نیست", "error", "تلاش مجدد");
    }
    if (email) {
      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        return showSwal("ایمیل وارد شده معتبر نیست", "error", "تلاش مجدد");
      }
    }
    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      return showSwal("پسورد وارد شده قوی نمی باشد", "error", "تلاش مجدد");
    }
    const user = { name, phone, email, password };
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 201) {
      showSwal("ثبت نام با موفقیت انجام شد", "success", "ورود به پنل کاربری");
    } else if (res.status === 422) {
      showSwal("کاربری با این اطلاعات وجود دارد", "error", "تلاش مجدد");
    }
  };
  return (
    <>
      {!isRegisterWithOtp ? (
        <>
          <div className="grid bg-white px-[25px] py-[10px] w-[380px] font-shabnam mt-28 mx-auto mb-8 rounded-[4px] shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] text-center text-black">
            <input
              className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px] text-right"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="نام"
            />
            <input
              className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px] text-right"
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="شماره موبایل  "
            />
            <input
              className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px] text-right"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="ایمیل (دلخواه)"
            />
            {isRegisterWithPass && (
              <input
                className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px] text-right"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="رمز عبور"
              />
            )}
            <p
              className="p-[0.8rem] mt-2 cursor-pointer font-shabnam bg-mainBrown text-white"
              onClick={() => setIsRegisterWithOtp(true)}
            >
              ثبت نام با کد تایید
            </p>
            <button
              onClick={() => {
                if (isRegisterWithPass) {
                  signUp();
                } else {
                  setIsRegisterWithPass(true);
                }
              }}
              className="p-[0.8rem] mt-[0.7rem] cursor-pointer font-shabnam bg-mainBrown text-white"
            >
              ثبت نام با رمزعبور
            </button>
            <p
              className="text-[#6d6d6d] border border-[#d6d6d6] mb-12 mt-4 cursor-pointer p-4 bg-[#f2f2f2] font-shabnam"
              onClick={showloginForm}
            >
              برگشت به ورود
            </p>
          </div>
          <p className="block w-max mx-auto font-shabnam cursor-pointer text-[13px] text-mainBrown">
            لغو
          </p>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </>
  );
};

export default Register;
