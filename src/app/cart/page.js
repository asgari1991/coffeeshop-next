import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Stepper from "@/components/modules/stepper/Stepper";
import Table from "@/components/templates/cart/Table";
import styles from "@/styles/cart.module.css";
import Link from "next/link";
import { TbShoppingCartX } from "react-icons/tb";

const page = () => {
  return (
    <>
      <Navbar />
      <Stepper step="cart" />

      <main className="flex flex-row-reverse max-w-[1222px] w-full px-4 mx-auto gap-5 mb-[51px]" data-aos="fade-up">
        <Table />
      </main>

      {/* <div class={styles.cart_empty} data-aos="fade-up">
                <TbShoppingCartX />
                <p>سبد خرید شما در حال حاضر خالی است. </p>
                <span>قبل از تسویه حساب، باید چند محصول را به سبد خرید خود اضافه کنید.</span>
                <span>در صفحه "فروشگاه"، محصولات جالب زیادی خواهید یافت.</span>
                <div>
                    <Link href='/category'>بازگشت به فروشگاه</Link>
                </div>
            </div> */}
      <Footer />
    </>
  );
};

export default page;
