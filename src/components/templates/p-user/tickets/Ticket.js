import Link from "next/link";
import styles from "./ticket.module.css";

const Ticket = ({ _id, title, createdAt, department, isAnswered }) => {
  return (
    <Link href={`/p-user/tickets/answer/${_id}`} className="flex justify-between items-center w-full h-[110px] p-4 bg-panelBrown/10 rounded my-4 mx-auto border-r-4 border-r-panelBrown">
      <div className=" flex items-center flex-col gap-2.5 text-center">
        <p>{title}</p>
        <p className="w-max p-2 rounded bg-white">{department.title}</p>
      </div>
      <div className=" flex items-center flex-col gap-2.5 text-center pt-2">
        <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
        <p className="bg-panelBrown text-white rounded p-2">
          {isAnswered ? "پاسخ داده شده" : "پاسخ داده نشده"}
        </p>
        {/* answer */}
      </div>
    </Link>
  );
};

export default Ticket;
