"use client";

import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import swal from "sweetalert";
const Card = ({ price, score, name,productID }) => {


  const removeProduct = () => {
    swal({
      title: "آیا از حذف محصول اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async(result) => {
      const res=await fetch(`/api/wishlist/${productID}`,
       {
        method:"DELETE"
       }
      )
      console.log('res->',res);
      if (res.status===200) {
        swal({
          title:"محصول از علاقه مندی ها حذف شد",
          icon:"success",
          buttons:"فهمیدم"
        }).then(()=>{
location.reload()
        })
        
      }
      
    });
  };

  return (
    <div className="text-center text-black">
      <Link href={"/product/123"}>
        <img
          width={283}
          height={283}
          src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png"
          alt=""
        />
      </Link>
      <p dir="rtl" className="text-sm">
        {name}
      </p>
      <div className="flex justify-between items-end">
        <div className="flex justify-between items-end">
          {new Array(score).fill(0).map((item, index) => (
            <IoMdStar
              key={index}
              className="mt-[0.4rem] text-xl text-orange-500 w-5 h-5"
            />
          ))}
             {new Array(5-score).fill(0).map((item, index) => (
            <FaRegStar
              key={index}
              className="mt-[0.4rem] text-xl text-orange-500 w-5 h-5"
            />
          ))}
        </div>
        <span className="text-sm">{price.toLocaleString()} تومان</span>
      </div>
      <button
        onClick={removeProduct}
        className="
    w-full 
    px-4 py-2 
    text-white 
    rounded 
    mt-4 
    bg-panelBrown
    cursor-pointer 
    transition-all duration-1000 ease-in-out 
    hover:opacity-70
  "
      >
        حذف محصول{" "}
      </button>
    </div>
  );
};

export default Card;
