"use client";

import styles from "./sidebar.module.css";
import { ImReply } from "react-icons/im";
import { FaComments, FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdSms, MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";
import { TbListDetails } from "react-icons/tb";
import Link from "next/link";
import swal from "sweetalert";


const Sidebar = () => {
  const path = usePathname();

  const logoutHandler = () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async(result) => {
      const res=await fetch("/api/auth/signout",{
        method:'POST',
      
      })
      if (res.status===200) {
        swal({
          title:"با موفقیت از حساب خارج شدید",
          icon:"success",
          buttons:"فهمیدم"
        }).then(result=>{
location.replace('/')
        })
      }
    });
  };
  return (
    <aside className="w-[350px] h-screen bg-panelBrown text-white p-2.5 sticky top-0">
      <div className="text-center mt-3 pb-[23px] border-b border-white">
        <p>خوش اومدی محمد عزیز</p>
      </div>
      <ul className="flex flex-col gap-8 py-[30px] px-2.5 ">
        {path.includes("/p-user") ? (
          <>
            <Link href={"/p-user"} className={`${styles.sidebar_link_active} list-none flex items-center gap-[11px] text-[18px] opacity-70"`}>
              <ImReply />
              پیشخوان
            </Link>
            <Link href={"/p-user/orders"} className="list-none flex items-center gap-[11px] text-[18px] opacity-70">
              <FaShoppingBag />
              سفارش ها
            </Link>
            <Link href={"/p-user/tickets"} className="list-none flex items-center gap-[11px] text-[18px] opacity-70">
              <MdSms />
              تیکت های پشتیبانی
            </Link>
            <Link href={"/p-user/comments"} className="list-none flex items-center gap-[11px] text-[18px] opacity-70">
              <FaComments />
              کامنت ها
            </Link>
            <Link href={"/p-user/wishlist"} className="list-none flex items-center gap-[11px] text-[18px] opacity-70">
              <FaHeart />
              علاقه مندی
            </Link>
            <Link href={"/p-user/account-details"} className="list-none flex items-center gap-[11px] text-[18px] opacity-70">
              <TbListDetails />
              جزئیات اکانت
            </Link>
          </>
        ) : (
          <>
            <Link href={"/p-admin"} className={styles.sidebar_link_active}>
              <ImReply />
              پیشخوان
            </Link>

            <Link href={"/p-admin/products"} className="list-none flex items-center gap-[11px] text-[18px] opacity-70">
              <FaShoppingBag />
              محصولات
            </Link>
            <Link href={"/p-admin/users"} className="list-none flex items-center gap-[11px] text-[18px] opacity-70">
              <FaUsers />
              کاربران
            </Link>
            <Link href={"/p-admin/comments"} className="list-none flex items-center gap-[11px] text-[18px] opacity-70">
              <FaComments />
              کامنت ها
            </Link>

            <Link href={"/p-admin/tickets"} className="list-none flex items-center gap-[11px] text-[18px] opacity-70">
              <MdSms />
              تیکت ها
            </Link>
            <Link href={"/p-admin/discount"} className="list-none flex items-center gap-[11px] text-[18px] opacity-70">
              <MdOutlineAttachMoney />
              تخفیفات
            </Link>
          </>
        )}
      </ul>
      <div className="flex justify-between absolute bottom-[30px] flex-row-reverse items-center cursor-pointer w-[90%] pt-2.5 text-xl border-t-2 border-white" onClick={logoutHandler}>
        <MdLogout />
        خروج
      </div>
    </aside>
  );
};

export default Sidebar;
