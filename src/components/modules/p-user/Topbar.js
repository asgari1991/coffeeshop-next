"use client";

import { useState } from "react";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import Modal from "./Modal";
const Topbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false);
  return (
    <>
      <div className="w-full bg-neutral-900 h-[70px] px-5 py-1.5 flex justify-between items-center text-white border-b-4 border-panelBrown">
        <div className="flex flex-row-reverse items-center gap-2.5">
          <div>
            <p>شاهین مشکل گشا</p>
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
          <div
            onClick={() => setShowNotifications(true)}
            className="relative flex items-center bg-panelBrown text-white h-[34px] text-[1.5rem] cursor-pointer rounded-lg px-1.5"
          >
            <IoIosNotifications className="bottom-[1px] relative cursor-pointer" />
            <span className="absolute top-[-6px] right-[-6px] bg-white text-panelBrown text-[9px] px-2 pb-[1px] pt-1 text-center cursor-pointer rounded-full">0</span>
          </div>
        </section>
      </div>

      {showNotifications && (
        <div>
          <div
            onClick={() => setShowNotifications(false)}
            className="fixed inset-0 w-full h-screen bg-black/40 z-[99]"
          ></div>
          <section className="absolute top-[50px] left-[50px] w-[300px] bg-panelBrown rounded-[8px] p-[15px_10px] text-white flex flex-col gap-2.5 items-start z-[9999]">
            <div className="flex justify-between items-center w-full">
              <p className=" cursor-pointer"
                onClick={() => {
                  setShowNotifications(false);
                  setShowModal(true);
                }}
              >
                سلام ادمین محترم
              </p>
              <button className="bg-blue-600 text-white px-3 py-2 rounded border-0 cursor-pointer" onClick={() => setShowNotifications(false)}>دیدم</button>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className=" cursor-pointer"
                onClick={() => {
                  setShowNotifications(false);
                  setShowModal(true);
                }}
              >
                سلام ادمین محترم
              </p>
              <button className="bg-blue-500 text-white px-3 py-2 rounded border-0 cursor-pointer" onClick={() => setShowNotifications(false)}>دیدم</button>
            </div>

            {/* if we dont have any notif we show : */}
            {/* <div className="flex justify-between items-center w-full">
              <span>پیفامی وجود ندارد</span>
              <IoClose className=" cursor-pointer" onClick={() => setShowNotifications(false)}/>
            </div> */}
          </section>
        </div>
      )}
      {showModal && (
        <Modal title="از واحد پشتیبانی" hideModal={hideModal}>
          <p className="mt-12 mb-12 text-center">عالی هستی ادمین عزیز</p>
        </Modal>
      )}
    </>
  );
};

export default Topbar;
