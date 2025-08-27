import Link from "next/link";
import styles from "./order.module.css";

const Order = () => {
  return (
    <Link href={`/product/123`} className='w-full p-4 flex justify-between rounded my-4 mx-auto h-[110px] items-center bg-white border-r border-white text-panelBrown'>
      <div>
        <div className="flex justify-start flex-row-reverse items-center gap-1 relative bottom-[5px] left-4">
          <p>قهوه عربیکا 40 درصد</p>
          <img
            src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png"
            alt=""
            className="w-[50px]"
          />
        </div>
        <p className="text-panelBrown">تکمیل شده</p>
      </div>
      <div>
        <p>8:00 1402/10/21</p>
        <p className=" mt-4">200000 هزار تومان</p>
      </div>
    </Link>
  );
};

export default Order;
