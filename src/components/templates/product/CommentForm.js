import { IoMdStar } from "react-icons/io";
import styles from "./commentForm.module.css";
const CommentForm = () => {
  return (
    <div className="w-full">
      <p className="text-sm font-shabnamBold h-[30px]">دیدگاه خود را بنویسید</p>
      <p>
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند{" "}
        <span className="text-red-600">*</span>
      </p>
      <div className={`${styles.rate} flex gap-[14px] items-baseline`}>
        <p className="relative bottom-1">امتیاز شما :</p>
        <div className="flex gap-0.5 pt-[0.2rem] text-lg text-gray-400" dir="rtl">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
      </div>
      <div className="grid gap-2.5 w-full mt-8">
        <label htmlFor="">
          دیدگاه شما
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="comment"
          name="comment"
          cols="45"
          rows="8"
          required=""
          placeholder=""
          className="rounded-md bg-white font-shabnam text-black border border-[rgb(103 103 103 /34%)] p-4 resize-none"
        ></textarea>
      </div>
      <div className='flex gap-[30px]'>
        <div className="grid gap-2.5 w-full mt-8">
          <label htmlFor="">
            نام
            <span className="text-red-500" >*</span>
          </label>
          <input type="text" className="w-full bg-white text-black font-shabnam rounded-sm p-[0.8rem] border border-[rgb(103 103 103 /34%)]" />
        </div>
        <div className="grid gap-2.5 w-full mt-8">
          <label htmlFor="">
            ایمیل
            <span className="text-red-500" >*</span>
          </label>
          <input type="email" className="w-full bg-white text-black font-shabnam rounded-sm p-[0.8rem] border border-[rgb(103 103 103 /34%)]" />
        </div>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" name="" id="" />
        <p className="text-sm font-shabnam">
          {" "}
          ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </p>
      </div>
      <button className="py-3 px-[1.2rem] cursor-pointer mt-8 border-none transition-all duration-200 font-shabnam text-white bg-brandGreen hover:bg-mainBrown">ثبت</button>
    </div>
  );
};

export default CommentForm;
