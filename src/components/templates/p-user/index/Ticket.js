import Link from "next/link";
import styles from "./ticket.module.css";

const Ticket = () => {
  return (
    <Link href={`/p-user/tickets/answer/2323`} className="w-full p-4 flex justify-between rounded my-4 mx-auto h-[110px] items-center bg-panelBrown border-r border-white text-white">
      <div className="flex flex-col items-center gap-2.5 text-center ">
        <p>حجم بسته بندی</p>
        <p className="w-max rounded bg-white p-2 text-panelBrown">واحد پشتیبانی</p>
      </div>
      <div className="flex flex-col items-center gap-2.5 text-center pt-2">
        <p>8:00 1402/10/21</p>
        <p className="bg-panelBrown text-white rounded p-2">پاسخ داده نشده</p>
        {/* answer */}
      </div>
    </Link>
  );
};

export default Ticket;
