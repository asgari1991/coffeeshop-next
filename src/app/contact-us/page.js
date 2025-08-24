import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Form from "@/components/templates/contact-us/Form";
import Information from "@/components/templates/contact-us/Information";
import Map from "@/components/templates/contact-us/Map";
import { authUser } from "@/utils/auth.server";
import Link from "next/link";

const page = async () => {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Breadcrumb route={"تماس با ما"} />
   
      <div className="text-black text-right max-w-[1222px] w-full px-[15px] mx-auto mb-16">
           <main className="flex gap-[25px] ">
        <section className="w-1/2">
          <Map position={[34.075606,49.7020827]} center={[34.0818513,49.706816]}>
            <span className="text-gray-600 text-sm">فروشگاه ما</span>
            <h3 className="mt-2">آدرس فروشگاه مرکزی کیندر</h3>
            <p className="mt-3 mb-1 text-gray-700">اراک جهانپناه مجتمع تجاری میلاد</p>
            <p className="mt-3 mb-1 text-gray-700">09120534670</p>
            <Link href={"/about-us"} className="underline mt2 text-sm">درباه فروشگاه</Link>
          </Map>
        </section>
        <section className="w-1/2">
          <Map position={[34.075606,49.7020827]} center={[34.0818513,49.706816]}>
            <span className="text-gray-600 text-sm">فروشگاه ما</span>
            <h3 className="mt-2">آدرس فروشگاه مرکزی کیندر</h3>
            <p className="mt-3 mb-1 text-gray-700">اراک جهانپناه مجتمع تجاری میلاد</p>
            <p className="mt-3 mb-1 text-gray-700">09120534670</p>
            <Link href={"/about-us"} className="underline mt2 text-sm">درباه فروشگاه</Link>
          </Map>
        </section>
      </main>
        <div className= "flex gap-[35px]">
          <Form />
          <Information />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
