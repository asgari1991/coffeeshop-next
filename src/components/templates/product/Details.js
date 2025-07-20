import { FaFacebookF, FaStar, FaTwitter } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import styles from "./details.module.css";
import Breadcrumb from "./Breadcrumb";

const Details = () => {
  return (
    <main className="w-[63%]">
      <Breadcrumb
        title={
          "کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( GOLD ) ده -10- عددی"
        }
      />
      <h2 className="font-shabnamBold">
        کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( GOLD ) ده -10- عددی
      </h2>

      <div className={`${styles.rating} flex gap-2 mt-8`}>
        <div className="flex gap-0.5">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>(دیدگاه 7 کاربر)</p>
      </div>

      <p className="text-mainBrown text-2xl font-shabnamBold my-6">
        205,000 تومان
      </p>
      <span className="block w-[93%] text-sm text-gray-500">
        کپسول قهوه ست مدل Gold سازگار با دستگاههای کپسولی نسپرسو می باشد . ترکیب
        این قهوه عربیکا بوده و با برشته کاری متوسط درجاتی از اسیدیته به همراه تن
        واری متوسط , و برای ترکیب با شیر بسیار عالی می باشد.
      </span>

      <hr />

      <div className="flex items-center gap-1 mb-[50px] mt-4">
        <IoCheckmark className="text-2xl" />
        <p>موجود در انبار</p>
      </div>

      <div
        className={`flex gap-2.5 flex-row-reverse justify-end items-center text-center mb-5`}
      >
        <button className="bg-buttonGreen py-[0.85rem] px-5 cursor-pointer transition-all duration-200 font-shabnam hover:bg-buttonHover ">
          افزودن به سبد خرید
        </button>
        <div className="flex justify-between items-center w-20 border border-gray-500">
          <span className="w-[30%] cursor-pointer py-2.5 border-l border-black">-</span>1
          <span className="w-[30%] cursor-pointer py-2.5 border-r border-black">+</span>
        </div>
      </div>

      <section className="flex gap-5 mb-[30px]">
        <div className="flex items-center gap-1">
          <CiHeart className="text-xl" />
          <a href="/" className="text-sm transition-all duration-200 hover:text-gray-500 hover:cursor-pointer">افزودن به علاقه مندی ها</a>
        </div>
        <div className="flex items-center gap-1">
          <TbSwitch3 className="text-xl" />
          <a href="/" className="text-sm transition-all duration-200 hover:text-gray-500 hover:cursor-pointer">مقایسه</a>
        </div>
      </section>

      <hr />

      <div className="flex flex-col gap-4 mt-[30px]">
        <strong>شناسه محصول: GOLD Nespresso Compatible capsule</strong>
        <p>
          {" "}
          <strong>دسته:</strong> Coffee Capsule, کپسول قهوه, همه موارد
        </p>
        <p>
          <strong>برچسب:</strong> کپسول قهوه،کپسول قهوه ست پرسو،کپسول قهوه
          ایرانی،کپسول قهوه نسپرسو ایرانی،قهوه ست ، Setpresso،Gold Setpresso
        </p>
      </div>

      <div className="flex mt-8 gap-2">
        <p>به اشتراک گذاری: </p>
        <a href="/">
          <FaTelegram className="text-xl" />
        </a>
        <a href="/">
          <FaLinkedinIn className="text-xl" />
        </a>
        <a href="/">
          <FaPinterest className="text-xl" />
        </a>
        <a href="/">
          <FaTwitter className="text-xl" />
        </a>
        <a href="/">
          <FaFacebookF className="text-xl" />
        </a>
      </div>

      <hr />
    </main>
  );
};

export default Details;
