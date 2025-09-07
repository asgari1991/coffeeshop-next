import Link from "next/link";
import styles from "./ticket.module.css";

const Ticket = ({_id,title,department,hasAnswer,createdAt}) => {
  return (
    <Link href={`/p-user/tickets/answer/${_id}`} className="w-full p-4 flex justify-between rounded my-4 mx-auto h-[110px] items-center bg-panelBrown border-r border-white text-white">
      <div className="flex flex-col items-center gap-2.5 text-center ">
        <p>{title}  </p>
        <p className="w-max rounded bg-white p-2 text-panelBrown">{department.title} </p>
      </div>
      <div className="flex flex-col items-center gap-2.5 text-center pt-2">
        <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
        <p className="bg-panelBrown text-white rounded p-2">{hasAnswer ? "پاسخ داده شده":"پاسخ داده نشده"}  </p>
        {/* answer */}
      </div>
    </Link>
  );
};

export default Ticket;
