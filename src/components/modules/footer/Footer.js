
import { MdOutlineCopyright } from "react-icons/md";

import { FaRegHeart } from "react-icons/fa";
import Article from "./Article";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={` bg-[#111111] pt-10 text-gray-200`}>
      <main className="container flex mx-auto justify-between pb-10 flex-row-reverse text-right">
        <section className="w-[300px] p-[10px] text-[15px] font-shabnam" dir="rtl">
          <img src="/images/logo_light.png" alt="" />
          <p className="mb-[30px] mt-5 font-bold ">
            شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست
          </p>

          <div className={` flex items-center gap-2 mt-2.5`}>
            <FaRegHeart style={{ fontSize: "2rem" }} />
            <p className="text-white/50 flex justify-center gap-[14px]">
              تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان.
              خیابان ماگنولیا بلوک آ117
            </p>
          </div>
          <div className={` flex items-center gap-2 mt-2.5`}>
            <FaRegHeart />
            <p className="text-white/50 flex justify-center gap-[14px]">پیگیری سفارشات : 02188305827</p>
          </div>
          <div className={` flex items-center gap-2 mt-2.5`}>
            <FaRegHeart />
            <p className="text-white/50 flex justify-center gap-[14px]">support @ set-coffee.com</p>
          </div>
        </section>

        <section>
          <h4 className="mb-4 font-bold">جدیدترین نوشته ها</h4>
          <Article
            href={"/article/123"}
            data="۱۷ آبان ۱۴۰۲ "
            comments="بدون دیدگاه"
            img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
            title="افزایش انرژی با پودر قهوه فوری"
          />

          <hr className="border border-[#676767]"/>

          <Article
            href={"/article/123"}
            data="۱۷ آبان ۱۴۰۲ "
            comments="بدون دیدگاه"
            img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
            title="افزایش انرژی با پودر قهوه فوری"
          />
        </section>

        <ul className={` flex gap-20 mr-4`}>
          <div>
            <h4 className="mb-4 font-bold">منوی فوتر</h4>
            <li className="list-none mt-[10px] font-shabnam text-white/50">
              <Link href={"/contact-us"}>تماس با ما</Link>
            </li>
            <li className="list-none mt-[10px] font-shabnam text-white/50">
              <Link href={"/about-us"}>درباره ما </Link>
            </li>
            <li className="list-none mt-[10px] font-shabnam text-white/50">
              <Link href={"/rules"}>قوانین</Link>
            </li>
          </div>
          <div>
            <h4 className="mb-4 font-bold">دسترسی سریع</h4>
            <li className="list-none mt-[10px] font-shabnam text-white/50">
              <Link href={"/category"}> فروشگاه </Link>
            </li>
            <li className="list-none mt-[10px] font-shabnam text-white/50">
              <Link href={"/articles"}> مقالات </Link>
            </li>
            <li className="list-none mt-[10px] font-shabnam text-white/50">
              <Link href={"/cart"}>سبد خرید</Link>
            </li>
            <li className="list-none mt-[10px] font-shabnam text-white/50">
              <Link href={"/wishlist"}>علاقه مندی ها</Link>
            </li>
          </div>
        </ul>
        <div className={` h-[200px] grid gap-[10px] grid-cols-[auto_auto]`}>
          <img src="/images/license4.htm" width={76} height={76} alt="" className="cursor-pointer" />
          <img src="/images/license1.png" width={85} height={85} alt="" className="cursor-pointer" />
          <img src="/images/license3.png" alt="" className="cursor-pointer" />
          <img src="/images/license2.svg" width={62} height={95} alt="" className="cursor-pointer ml-1" />
        </div>
      </main>
      <hr className="border border-[#676767]" />
      <div className="container">
        <p className={`font-shabnam rtl py-5 text-[12px] text-right flex flex-row-reverse justify-start gap-1`}>
          {" "}
          2023
          <MdOutlineCopyright className="top-[3.9px] right-[1px] text-[1.3rem]" /> تمام حقوق متعلق است به <strong>
            قهوه ست
          </strong>{" "}
          | طراحی و اجرا <strong>نیلامارکتینگ</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
