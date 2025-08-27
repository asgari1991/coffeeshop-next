import Ticket from "./Ticket";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Tickets = () => {
  return (
    <div className="bg-red-900/5 w-1/2 text-black px-4 rounded-[5px]">
      <div className="flex justify-between p-4 border-b border-b-panelBrown">
        <p>تیکت های اخیر</p>
        <Link href="/p-user/tickets" className="flex items-center gap-4">
          همه تیکت ها <FaArrowLeft className="text-panelBrown" />
        </Link>
      </div>
      <Ticket />
      <Ticket />
      <Ticket />

      {/* <p className=" w-full pt-[9rem] pb-[12.5rem] text-center text-4xl">تیکتی ثبت نشده</p> */}
    </div>
  );
};

export default Tickets;
