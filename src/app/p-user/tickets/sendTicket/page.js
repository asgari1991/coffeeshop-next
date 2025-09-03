import Layout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/sendTicket.module.css";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";

const page = () => {
  return (
    <Layout>
      <main className="px-[30px]">
        <h1 className={styles.title}>
          <span>ارسال تیکت جدید</span>
          <Link href="/p-user/tickets"> همه تیکت ها</Link>
        </h1>

        <div className="grid p-0 gap-5 mb-4 grid-cols-[auto_auto]">
          <div className="flex gap-[5px] flex-col bg-white">
            <label>دپارتمان را انتخاب کنید:</label>
            <select className="bg-white p-2.5 text-black rounded-md outline-none border-[3px] border-panelBrown mt-[4.5px]">
              <option>لطفا یک مورد را انتخاب نمایید.</option>

              <option value={"دپارتمان"}>دپارتمان</option>
            </select>
          </div>
          <div className="flex gap-[5px] flex-col bg-white">
            <label>نوع تیکت را انتخاب کنید:</label>
            <select className="bg-white p-2.5 text-black rounded-md outline-none border-[3px] border-panelBrown mt-[4.5px]">
              <option>لطفا یک مورد را انتخاب نمایید.</option>

              <option value={"پشتیبانی"}>پشتیبانی </option>
            </select>
          </div>
          <div className="flex gap-[5px] flex-col bg-white">
            <label>عنوان تیکت را وارد کنید:</label>
            <input placeholder="عنوان..." type="text" className="w-full p-2.5 resize-none bg-white mt-1 outline-none text-black rounded-md border-[3px] border-panelBrown" />
          </div>
          <div className="flex gap-[5px] flex-col bg-white">
            <label>سطح اولویت تیکت را انتخاب کنید:</label>
            <select className="bg-white p-2.5 text-black rounded-md outline-none border-[3px] border-panelBrown mt-[4.5px]">
              <option>لطفا یک مورد را انتخاب نمایید.</option>
              <option value="3">کم</option>
              <option value="2">متوسط</option>
              <option value="1">بالا</option>
            </select>
          </div>
        </div>
        <div className="flex gap-[5px] flex-col bg-white">
          <label>محتوای تیکت را وارد نمایید:</label>
          <textarea rows={10} className="mb-4 w-full p-2.5 resize-none bg-white mt-1 outline-none text-black rounded-md border-[3px] border-panelBrown"></textarea>
        </div>
        <div className="flex gap-[5px] flex-col rounded-md bg-panelBrown/10 text-center py-5">
          <span>حداکثر اندازه: 6 مگابایت</span>
          <span>فرمت‌های مجاز: jpg, png.jpeg, rar, zip</span>
          <input type="file" className="p-0 bg-transparent relative right-[30px] border-0 cursor-pointer mx-auto w-max  resize-none mt-1 outline-none text-black rounded-md border-panelBrown" />
        </div>

        <button className="flex items-center gap-1 bg-panelBrown w-max py-2 px-[0.8rem] text-white rounded cursor-pointer mt-4 mb-8">
          <IoIosSend className="w-5 h-5" />
          ارسال تیکت
        </button>
      </main>
    </Layout>
  );
};

export default page;
