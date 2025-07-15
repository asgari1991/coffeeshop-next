import Link from "next/link";

import { FaChevronLeft } from "react-icons/fa6";
import Product from "@/components/modules/product/Product";

const Latest = () => {
  return (
    <div className="max-w-[1222px] mx-auto">
      <section className="text-black flex flex-row-reverse w-full justify-between text-center mt-[1.7rem] items-center font-shabnam">
        <div>
          <p className="text-[36px] text-brandGreen">آخرین محصولات</p>
          <span className="text-gray-500">Latest products</span>
        </div>
        <Link className="flex flex-row-reverse items-center" href={"/category"}>
          مشاهده همه <FaChevronLeft />{" "}
        </Link>
      </section>
      <main
        data-aos="fade-up"
        className="flex flex-wrap gap-[30px] py-5 justify-between"
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </main>
    </div>
  );
};

export default Latest;
