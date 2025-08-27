import Link from "next/link";
import Order from "./Order";
import { FaArrowLeft } from "react-icons/fa6";

const Orders = () => {
  return (
    <div className="bg-red-900/5 w-1/2 text-black px-4 rounded-[5px]">
      <div className="flex justify-between p-4 border-b border-b-panelBrown">
        <p>سفارش های اخیر</p>
        <Link href="/p-user/orders" className="flex items-center gap-[9px]">
          همه سفارش ها <FaArrowLeft className="text-panelBrown" />
        </Link>
      </div>
      <Order />
      <Order />
      <Order />

     { /*<p className=" w-full pt-[9rem] pb-[12.5rem] text-center text-4xl">سفارشی ثبت نشده</p>*/}
    </div>
  );
};

export default Orders;
