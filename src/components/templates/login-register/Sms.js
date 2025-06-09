const Sms = ({hideOtpForm}) => {
  return (
    <>
      <div className='grid bg-white px-[25px] py-2.5 w-[380px] font-shabnam mt-[7rem] mb-[2rem] mx-auto 
            rounded shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] text-center text-black'>
        <p>کد تایید</p>
        <span className="text-[13px] mt-[18px] text-[#6d6d6d] opacity-60 whitespace-nowrap">
          لطفاً کد تأیید ارسال شده را تایپ کنید
        </span>
        <span className="text-[13px] mt-[18px] text-[#6d6d6d] opacity-60 whitespace-nowrap">09921558293</span>
        <input className="font-shabnam p-[13px] bg-white text-black rounded-[3px] border border-black rtl mt-[20px]" type="text" />
        <button style={{ marginTop: "1rem" }} className="p-[0.8rem] cursor-pointer font-shabnam bg-mainBrown text-white" >
          ثبت کد تایید
        </button>
        <p className="text-[13px] mt-[7px] opacity-60 cursor-pointer whitespace-nowrap">ارسال مجدد کد یکبار مصرف</p>
      </div>
      <p className="block w-max mx-auto font-shabnam cursor-pointer text-[13px] text-mainBrown" onClick={hideOtpForm}>لغو</p>
    </>
  );
};

export default Sms;
