import Link from "next/link";

import { FaRegStar, FaStar } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";

const Card = ({name,price}) => {
  return (
    <div className="card w-[263px] relative pt-[19px] text-black" dir="rtl">
      <div className="details_container relative mt-[5x] ">
        <img
          src="/images/041-430x430.png"
          alt=""
          className="w-full h-[312px] transition-all duration-[400ms] ease-in"
        />
        <div className="icons absolute top-[10px] left-0 text-white transition-all duration-[250ms] ease font-[2rem] grid gap-[10px] z-[3] invisible bg-transparent">
          <Link href="/" className="flex flex-row-reverse items-center gap-1">
            <CiSearch className=" cursor-pointer" />
            <p className="tooltip relative flex items-center opacity-0 bg-black text-white text-center px-[12px] whitespace-nowrap rounded-[4px] text-[13px] leading-[34px]">مشاهده سریع</p>
          </Link>
          <div className="flex flex-row-reverse items-center gap-1">
            <CiHeart className=" cursor-pointer" />
            <p className="tooltip relative flex items-center opacity-0 bg-black text-white text-center px-[12px] whitespace-nowrap rounded-[4px] text-[13px] leading-[34px]">افزودن به علاقه مندی ها </p>
          </div>
        </div>
        <button className="cursor-pointer px-[0.7rem] py-[0.4rem] bottom-0 transition-all duration-[250ms] ease z-[3] bg-transparent left-[120px] absolute invisible text-white w-max border border-white rounded-[4px]">افزودن به سبد خرید</button>
      </div>

      <div className="details flex flex-col gap-1 text-center pt-[5px] justify-center items-center">
        <Link href={"/"}>
          {name}
        </Link>
        <div dir="ltr" className="flex flex-row">
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaRegStar className="text-orange-500" />
          <FaRegStar className="text-orange-500" />
        </div>
        <span className="text-[rgb(52,24,14)]">{price?.toLocaleString()} تومان</span>
      </div>
    </div>
  );
};

export default Card;
