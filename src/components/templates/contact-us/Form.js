
const Form = () => {
  return (
    <form className="w-1/2 mt-12">
      <span className="text-gray-600 text-sm">فرم تماس با ما</span>
      <p className=" text-2xl mb-8 mt-4">برای تماس با ما می توانید فرم زیر را تکمیل کنید</p>
      <div className="flex gap-4">
        <div className="flex flex-col w-full mb-[14px] gap-2">
          <label>نام و نام خانوادگی</label>
          <input type="text" dir="rtl"
  className="outline-none border border-black/20 bg-white w-full text-base rounded-[5px] text-black resize-none px-4 py-3" />
        </div>
        <div className="flex flex-col w-full mb-[14px] gap-2">
          <label>آدرس ایمیل</label>
          <input type="text" dir="rtl"
  className="outline-none border border-black/20 bg-white w-full text-base rounded-[5px] text-black resize-none px-4 py-3" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col w-full mb-[14px] gap-2">
          <label>شماره تماس</label>
          <input type="text" dir="rtl"
  className="outline-none border border-black/20 bg-white w-full text-base rounded-[5px] text-black resize-none px-4 py-3" />
        </div>
        <div className="flex flex-col w-full mb-[14px] gap-2">
          <label>نام شرکت</label>
          <input type="text" dir="rtl"
  className="outline-none border border-black/20 bg-white w-full text-base rounded-[5px] text-black resize-none px-4 py-3" />
        </div>
      </div>
      <div className="flex flex-col w-full mb-[14px] gap-2">
        <label>درخواست شما</label>
        <textarea name="" id="" cols="30" rows="3" dir="rtl"
  className="outline-none border border-black/20 bg-white w-full text-base rounded-[5px] text-black resize-none px-4 py-3"></textarea>
      </div>
      <button className="w-full px-5 py-3 text-[13px] leading-[18px] rounded bg-mainBrown hover:bg-brandGreen text-white hover:text-white relative inline-flex items-center justify-center outline-none border-0 shadow-none align-middle text-center no-underline uppercase font-semibold cursor-pointer transition-colors duration-300 ease-in-out">ارسال</button>
    </form>
  );
};

export default Form;
