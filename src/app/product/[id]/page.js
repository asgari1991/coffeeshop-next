
import Gallery from "@/components/templates/product/Gallery";
import Details from "@/components/templates/product/Details";
import Tabs from "@/components/templates/product/Tabs";
import MoreProducts from "@/components/templates/product/MoreProducts";

import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import { authUser } from "@/utils/auth";

const product = async () => {
  const user = await authUser();

  return (
    <div className=" overflow-auto">
      <Navbar isLogin={user ? true : false} />
      <div data-aos="fade-up" className="max-w-[1200px] mx-auto mt-[160px] text-right pt-[25px] pb-20 text-black font-shabnam" dir="rtl">
        <div className="flex flex-row-reverse gap-[50px]">
          <Details />
          <Gallery />
        </div>
        <Tabs />
        <MoreProducts />
      </div>
      <Footer />
    </div>
  );
};

export default product;
