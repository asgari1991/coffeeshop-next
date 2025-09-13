import styles from "./topbar.module.css";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
const Topbar = () => {
  return (
    <>
      <div className="w-full bg-neutral-900 h-[70px] px-5 py-1.5 flex justify-between items-center text-white border-b-4 border-panelBrown">
        <div className="flex flex-row-reverse items-center gap-2.5">
          <div>
            <p>محمد عسکری</p>
            <span className="text-sm text-gray-400">ادمین</span>
          </div>
          <img src="/images/shahin.jpg" alt="" className="w-12 rounded-full" />
        </div>
        <section className="flex justify-between gap-5 items-center">
          <div className="relative">
            <input type="text" placeholder="جستجو کنید" className="bg-white p-2.5 rounded-xl w-[300px]" />
            <div className="absolute top-1 left-[5px] flex items-center bg-panelBrown text-white h-[34px] text-2xl rounded-full px-1.5">
              <IoIosSearch className="bottom-[1px] relative cursor-pointer" />
            </div>
          </div>
          <div className="relative flex items-center bg-panelBrown text-white h-[34px] text-[1.5rem] cursor-pointer rounded-lg px-1.5">
            <IoIosNotifications className="bottom-[1px] relative cursor-pointer" />
            <span className="absolute top-[-6px] right-[-6px] bg-white text-panelBrown text-[9px] px-2 pb-[1px] pt-1 text-center cursor-pointer rounded-full">2</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Topbar;
