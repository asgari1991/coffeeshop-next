import styles from "@/styles/404.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-between mx-auto max-w-[700px]">
        <p
          className="mr-[2%] z-[-1] text-[25em] text-[#e4e6b2]"
          style={{ textShadow: "28px 21px #34180e" }}
        >
          4
        </p>
        <div
          className={`${styles.mug} relative m-0 w-[170px] h-[150px] rounded-full bg-mainBrown`}
          
        ></div>
        <p
          className="ml-[2%] z-[-1] text-[25em] text-[#e4e6b2]"
          style={{ textShadow: "28px 21px #34180e" }}
        >
          4
        </p>
      </div>
      <div className="text-[1.5em] mt-10 text-center text-mainBrown" dir="rtl">
        <p className="mb-2.5">صفحه مورد نظر یافت نشد :((</p>
        <Link href="/" className="border-b border-b-mainBrown">برگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
};

export default page;
