
import { FaFacebookF, FaRegStar, FaStar, FaTwitter } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import styles from "./details.module.css";
import Breadcrumb from "./Breadcrumb";
import AddToWishlist from "./AddToWishlist";

const Details = ({ product }) => {
 
  
  return (
    <main className="w-[63%]">
      <Breadcrumb title={product.name} />
      <h2 className="font-shabnamBold">
{product.name}
      </h2>

      <div className={`${styles.rating} flex gap-2 mt-8`}>
        <div className="flex gap-0.5">
          {new Array(product.score).fill(0).map((item,index)=>(
<FaStar key={index} />
          ))}
          {new Array(5-product.score).fill(0).map((item,index)=>(
<FaRegStar key={index} />
          ))}
        
        </div>
        <p>(دیدگاه {product.comments.length} کاربر)</p>
      </div>

      <p className="text-mainBrown text-2xl font-shabnamBold my-6">
       {product.price.toLocaleString()} تومان
      </p>
      <span className="block w-[93%] text-sm text-gray-500">
      {product.shortDescription}
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
          <span className="w-[30%] cursor-pointer py-2.5 border-l border-black">
            -
          </span>
          1
          <span className="w-[30%] cursor-pointer py-2.5 border-r border-black">
            +
          </span>
        </div>
      </div>

      <section className="flex gap-5 mb-[30px]">
        <AddToWishlist productID={product._id}/>
        <div className="flex items-center gap-1">
          <TbSwitch3 className="text-xl" />
          <a
            href="/"
            className="text-sm transition-all duration-200 hover:text-gray-500 hover:cursor-pointer"
          >
            مقایسه
          </a>
        </div>
      </section>

      <hr />

      <div className="flex flex-col gap-4 mt-[30px]">
        <strong>شناسه محصول: {product._id}</strong>
        <p>
          {" "}
          <strong>دسته:</strong> Coffee Capsule, کپسول قهوه, همه موارد
        </p>
        <p>
          <strong>برچسب:</strong> 
          {product.tags.join(" , ")}
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
