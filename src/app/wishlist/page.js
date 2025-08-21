import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Product from "@/components/modules/product/Product";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/auth.server";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import WishlistModel from "@/models/Wishlist";

const page = async () => {
  let wishes = [];
  connectToDB();
  const user = await authUser();
  if (user) {
    wishes = await WishlistModel.find({ user: user._id })
      .populate("product", "name price score")
      .lean();
  }

  return (
    <>
      <Navbar isLogin={user ? true: false} />
      <Breadcrumb route={"علاقه مندی ها"} />
      <main className="text-black text-right max-w-[1222px] w-full pr-[15px] pl-[15px] mx-auto mb-16" data-aos="fade-up">
        <p className="pb-[10px] border-b border-[rgba(128,128,128,0.363)] text-[20px]">محصولات مورد علاقه شما</p>
        <section className="grid gap-10 grid-cols-[auto_auto_auto]">
          {wishes.length > 0 &&
            wishes.map((wish) => <Product key={wish._id} {...wish.product} />)}
        </section>
      </main>

      {wishes.length === 0 && (
        <div className="relative mt-[5vw] mb-[54px] text-center leading-[1.2] text-black" dir="rtl" data-aos="fade-up">
          <FaRegHeart className="text-[15.2em] text-[#f1f1f1] mx-auto" />
          <p className="text-[48px] mb-6">محصولی یافت نشد</p>
          <span className="block mb-2 text-gray-500">شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید.</span>
          <span className="block text-gray-500 mb-[2.8rem]">در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.</span>
          <div>
            <Link href="/category" className="px-7 py-[14px] transition-all duration-100 ease-in text-[14px] leading-[20px] mt-16 rounded-[0.001px] text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.15)] bg-brandGreen hover:bg-mainBrown">بازگشت به فروشگاه</Link>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default page;
