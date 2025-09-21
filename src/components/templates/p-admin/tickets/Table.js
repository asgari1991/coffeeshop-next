"use client";

import { showSwal } from "@/utils/helpers";
import styles from "./table.module.css";
export default function DataTable({ tickets, title }) {
  const showTicketBody = (body) => {
    showSwal(body, undefined, "بستن");
  };
  const answerToTicket = async (ticket) => {
    swal({
      title: ":لطفا پاسخ خود را وارد کنید",
      content: "input",
      buttons: "ثبت پاسخ",
    }).then(async (answerText) => {
      if (answerText) {
        const answer = {
          ...ticket,
          body: answerText,
          ticketID: ticket._id,
        };
        const res = await fetch("/api/tickets/answer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(answer),
        });
        if (res.status===201) {
          showSwal("پاسخ موردنظر ثبت گردید","success","فهمیدم")
        }
        
      }
    });
  };
  const banUser=async (ticket)=>{
    const email=ticket.user.email
    const phone=ticket.user.phone
     //confirmation
    swal({
      title: "آیا از بن کردن کاربر اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/user/ban", {
          method: "POST",
          headers: {
            "Conternt-Type": "application/json",
          },
          body: JSON.stringify({ email, phone }),
        });
        if (res.status === 200) {
          swal({
            title: "کاربر با موفقیت بن شد",
            icon: "success",
            buttons: "فهمیدم",
          }).then(() => {
            router.refresh();
          });
        }
      }
    });
  }
  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
      </div>
      <div className="py-10 px-[25px]">
        <table className="w-full bg-blue-50">
          <thead>
            <tr className=" align-middle child:text-black child:text-center child:border-none child:py-2 child:px-[22px]">
              <th>شناسه</th>
              <th>کاربر </th>
              <th>عنوان</th>
              <th>دپارتمان</th>
              <th>مشاهده</th>
              
              <th>پاسخگویی</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr
                key={ticket._id}
                className="align-middle bg-white child:py-2 child:px-[22px] child:text-center"
              >
                <td>{index + 1}</td>
                <td>{ticket.user.name}</td>
                <td>{ticket.title}</td>
                <td>{ticket.department.title}</td>
                <td>
                  <button
                    type="button"
                    className="w-full bg-black text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm "
                    onClick={() => showTicketBody(ticket.body)}
                  >
                    مشاهده
                  </button>
                </td>
               
                <td>
                  <button
                    type="button"
                    className="w-full bg-panelBrown text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm"
                    onClick={() => answerToTicket(ticket)}
                  >
                    پاسخگویی
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="w-full bg-panelBrown text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm"
                    onClick={()=>banUser(ticket)}
                  >
                    بن
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
