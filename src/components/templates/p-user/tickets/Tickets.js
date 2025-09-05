"use client";
import React from "react";
import styles from "@/styles/p-user/tickets.module.css";
import Link from "next/link";
// import Box from "@/components/templates/p-user/tickets/box/Box";
import Ticket from "./Ticket";

function Tickets({ tickets }) {
  return (
    <main className="px-[30px]">
      <h1 className={styles.title}>
        <span className="bg-white px-4 mr-16">همه تیکت ها</span>
        <Link href="/p-user/tickets/sendTicket" className=" flex items-center relative left-[30px] rounded-2xl border border-panelBrown px-2.5  bg-white text-panelBrown text-base "> ارسال تیکت جدید </Link>
      </h1>

      <div className="grid grid-cols-[auto_auto_auto_auto_auto] justify-between">
        {/* <Box title={"باز"} value={0} />
        <Box title={"بسته"} value={0} />
        <Box title={"پاسخ داده شده"} value={0} />
        <Box title={"پایان یافته"} value={0} />
        <Box title={"همه"} value={0} /> */}
      </div>

      <div className="flex justify-between items-baseline mb-8">
        <div className="flex gap-4">
          <select className="bg-white p-2.5 text-black border-b-2 border-b-panelBrown mt-1 w-[150px] outline-0">
            <option>همه</option>
            <option>فرستاده شده</option>
            <option>دریافتی</option>
          </select>
          <select className="bg-white p-2.5 text-black border-b-2 border-b-panelBrown mt-1 w-[150px] outline-0">
            <option>همه</option>
            <option>باز</option>
            <option>بسته</option>
            <option>پاسخ داده شده</option>
            <option>پایان یافته</option>
          </select>
          <select className="bg-white p-2.5 text-black border-b-2 border-b-panelBrown mt-1 w-[150px] outline-0">
            <option>تاریخ پاسخ</option>
            <option>تاریخ ایجاد</option>
          </select>
        </div>
        <button type="submit" className="w-max py-[0.8rem] px-[1.4rem] text-white rounded cursor-pointer bg-panelBrown">اعمال</button>
      </div>

      <div>
        {tickets.map((ticket) => (
          <Ticket key={ticket._id} {...ticket} />
        ))}
      </div>

      {tickets.length === 0 && (
        <div className="w-full rounded bg-panelBrown/10 text-center mt-[60px] py-5 text-panelBrown">
          <p>تیکتی وجود ندارد</p>
        </div>
      )}
    </main>
  );
}

export default Tickets;
