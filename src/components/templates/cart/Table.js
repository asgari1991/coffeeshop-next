"use client";
import Link from "next/link";
import styles from "./table.module.css";
import totalStyles from "./totals.module.css";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import stateData from "@/utils/stateData";
import Select from "react-select";
import { showSwal } from "@/utils/helpers";

const stateOptions = stateData();

const Table = () => {
  const [cart, setCart] = useState([]);
  const [stateSelectedOption, setStateSelectedOption] = useState(null);
  const [changeAddress, setChangeAddress] = useState(false);
  const [discount, setDiscount] = useState("");

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(localCart);
  }, []);

  const calcTotalPrice = () => {
    let totalPrice = 0;

    if (cart.length) {
      totalPrice = cart.reduce(
        (prev, current) => prev + current.price * current.count,
        0
      );
    }

    return totalPrice;
  };
const checkDiscount=async()=>{
  // validation

  const res=await fetch("/api/discounts/use",{
    method:"PUT",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({code:discount})
  })
  console.log('res->',res);
  if (res.status===404) {
    return showSwal("کد وارد شده معتبر نمی باشد","error","تلاش مجدد")
  } else if (res.status===422) {
        return showSwal("کد وارد شده منقضی شده باشد","error","تلاش مجدد")
  } else if (res.status===200) {
        return showSwal("کد با موفقیت اعمال شد ","success","فهمیدم")
  } 
}
  return (
    <>
      {" "}
      <div className={styles.tabel_container}>
        <table className={styles.table}>
          <thead>
            <tr className="child:border-none child:text-black child:text-center align-middle">
              <th> جمع جزء</th>
              <th>تعداد</th>
              <th>قیمت</th>
              <th>محصول</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr className="align-middle">
                <td dir="rtl">
                  {(item.count * item.price).toLocaleString()} تومان
                </td>
                <td dir="rtl" className={styles.counter}>
                  <div>
                    <span>-</span>
                    <p>{item.count}</p>
                    <span>+</span>
                  </div>
                </td>
                <td className={styles.price} dir="rtl">
                  {item.price.toLocaleString()} تومان
                </td>
                <td className="flex items-center w-[365px]" dir="rtl">
                  <img
                    className="w-20"
                    src="https://set-coffee.com/wp-content/uploads/2020/12/Red-box-DG--430x430.jpg"
                    alt=""
                  />
                  <Link
                    href={"/"}
                    className="break-words leading-[1.4] inline-block text-[14px] text-right"
                  >
                    {item.name}
                  </Link>
                </td>

                <td dir="rtl">
                  <IoMdClose className="cursor-pointer text-xl" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <section className="flex items-baseline justify-between">
          <button
            className="text-[#3e3e3e] bg-[#f3f3f3] px-[20px] py-[12px] text-[13px] leading-[18px] inline-flex items-center justify-center font-semibold uppercase border-0 outline-none align-middle text-center no-underline shadow-none cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#efefef]
  "
          >
            {" "}
            بروزرسانی سبد خرید
          </button>
          <div className="flex items-baseline gap-1">
            <button className={styles.set_off_btn} onClick={checkDiscount}>اعمال کوپن</button>
            <input
              type="text"
              placeholder="کد تخفیف"
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
              dir="rtl"
              className="px-4 py-3 rounded bg-white text-black w-[230px] border border-black/10"
            />
          </div>
        </section>
      </div>
      <div className="w-1/2 text-black text-right p-8 border-2 border-black/10">
        <p className={totalStyles.totals_title}>جمع کل سبد خرید</p>

        <div className="flex flex-row-reverse justify-between mt-4 pb-3 border-b border-b-black/10">
          <p>جمع جزء </p>
          <p>205,000 تومان</p>
        </div>

        <p className="text-left text-sm mt-4">
          {" "}
          پیک موتوری: <strong> 30,000 </strong>
        </p>
        <div dir="rtl" className=" flex justify-between mt-4">
          <p>حمل و نقل </p>
          <span className="text-gray-500 w-[150px] text-left">
            حمل و نقل به تهران (فقط شهر تهران).
          </span>
        </div>
        <p
          onClick={() => setChangeAddress((prev) => !prev)}
          className="text-left mt-4 cursor-pointer"
        >
          تغییر آدرس
        </p>
        {changeAddress && (
          <div className={totalStyles.address_details}>
            <Select
              defaultValue={stateSelectedOption}
              onChange={setStateSelectedOption}
              isClearable={true}
              placeholder={"استان"}
              isRtl={true}
              isSearchable={true}
              options={stateOptions}
            />
            <input type="text" placeholder="شهر" />
            <input type="number" placeholder="کد پستی" />
            <button onClick={() => setChangeAddress(false)}>بروزرسانی</button>
          </div>
        )}

        <div className={totalStyles.total}>
          <p>مجموع</p>
          <p>{calcTotalPrice().toLocaleString()} تومان</p>
        </div>
        <Link href={"/checkout"}>
          <button className={totalStyles.checkout_btn}>
            ادامه جهت تصویه حساب
          </button>
        </Link>
      </div>
    </>
  );
};

export default Table;
