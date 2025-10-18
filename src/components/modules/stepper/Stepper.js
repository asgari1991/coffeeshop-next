import Link from "next/link";
import styles from "./stepper.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
const Stepper = ({ step }) => {
  return (
    <div
      className="
    bg-[url('/images/back1.jpg')]
    bg-cover 
    bg-center 
    mb-10 
    px-[60px] 
    pt-[182px] text-white
  "
    >
      <div className="flex items-center justify-center flex-row-reverse gap-[18px] pb-[3.8rem]">
        <Link className={`${step == "cart" && styles.active_step} inline-block my-1 uppercase text-2xl leading-tight opacity-70`} href={"/cart"}>
          سبد خرید
        </Link>
        <FaArrowLeftLong />
        {step === "checkout" || step === "complate" ? (
          <Link
            className={`${step == "checkout" && styles.active_step} inline-block my-1 uppercase text-2xl leading-tight opacity-70`}
            href={"/checkout"}
          >
            پرداخت
          </Link>
        ) : (
          <p className=" inline-block my-1 uppercase text-2xl leading-tight opacity-70 ">پرداخت</p>
        )}
        <FaArrowLeftLong />
        {step == "complate" ? (
          <Link
            className={`${step == "complate" && styles.active_step} inline-block my-1 uppercase text-2xl leading-tight opacity-70`}
            href={"/complate"}
          >
            تکمیل سفارش
          </Link>
        ) : (
          <p className=" inline-block my-1 uppercase text-2xl leading-tight opacity-70"> تکمیل سفارش</p>
        )}
      </div>
    </div>
  );
};

export default Stepper;
