'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const [fixTop,setFixTop]=useState(false)
  useEffect(()=>{
    const fixNavbarToTop=()=>{
      const currentScroll=window.pageYOffset
      if (currentScroll>110) {
        setFixTop(true)
      }else{
        setFixTop(false)
      }
      
    }
    window.addEventListener('scroll',fixNavbarToTop)
return ()=>window.removeEventListener('scroll',fixNavbarToTop)
  },[])
  return (
    <nav className={`${fixTop ? "navbar_fixed": "navbar"} absolute w-full z-[300]`}>
      <main className="bg-white transition-colors duration-200 ease-in shadow-[0_1px_8px_rgba(0,0,0,0.1)] text-black flex flex-row-reverse px-[30px] h-[90px] items-center mx-auto max-w-[1192px] z-[9999] justify-between">
        <div>
          <Link href="/">
            <img src="images/logo.png" alt="logo" />
          </Link>
        </div>

        <ul className="links flex flex-row-reverse gap-[25px] items-[unset] child:list-none child:text-[14px] child:font-medium child:text-[rgb(52,24,14)] child:whitespace-nowrap">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/category">فروشگاه</Link>
          </li>
          <li>
            <Link href="/blog">وبلاگ</Link>
          </li>
          <li>
            <Link href="/contact-us">تماس با ما</Link>
          </li>
          <li>
            <Link href="/about-us">درباره ما</Link>
          </li>
          <li>
            <Link href="/rules">قوانین</Link>
          </li>
          {/* <li>
            <Link href="/login-register">ورود/عضویت</Link>
          </li>*/}
          {/*start My-account section */}
          <div className="dropdown relative inline-block text-[13px] font-medium pb-2">
            <Link
              href="/p-user"
              className="flex whitespace-nowrap items-center"
            >
              <IoIosArrowDown className="dropdown_icons text-[0.7rem] relative right-[3px] text-[rgba(82,82,82,0.45)]" />
              حساب کاربری
            </Link>
            <div className="dropdown_content  absolute top-[20px] right-[-3px] text-right flex flex-col bg-[#f9f9f9] min-w-[220px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] px-[20px] py-[12px] z-[1] child:pt-2 child:pb-2 child:cursor-pointer child:text-[#848484] child:transition-all child:duration-[250ms] child:ease-in-out child:text-[14px] child-hover:text-red-950  ">
              <Link href="/p-user/orders" >سفارشات</Link>
              <Link href="/p-user/tickets">تیکت ها</Link>
              <Link href="/p-user/comments">کامنت ها</Link>
              <Link href="/p-user/favorites">علاقه مندی ها</Link>
              <Link href="/p-user/account-details">جزئیات اکانت</Link>
            </div>
          </div>

          {/*finish My-account section */}
        </ul>
        <div className="navbar_icons flex gap-[30px] mt-[0.3rem] text-[1.2rem] child:relative">
          <Link href="/cart">
            <FaShoppingCart />
            <span className="absolute left-[-9px] top-[-7px] rounded-full text-[0.5rem] px-[0.4rem] py-[0.2rem] bg-[rgb(52,24,14)] text-white">1</span>
          </Link>
          <Link href="/favorites">
            <FaRegHeart />
            <span className="absolute left-[-9px] top-[-7px] rounded-full text-[0.5rem] px-[0.4rem] py-[0.2rem] bg-[rgb(52,24,14)] text-white">1</span>
          </Link>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
