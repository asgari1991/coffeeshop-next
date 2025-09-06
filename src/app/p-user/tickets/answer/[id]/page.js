import Layout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/answerTicket.module.css";
import Link from "next/link";
import Answer from "@/components/templates/p-user/tickets/Answer";
import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";

const page = async ({ params }) => {
  const ticketID = params.id;
  connectToDB();
  const ticket = await TicketModel.findOne({ _id: ticketID }).populate("user","name").lean();
 const answerTicket= await TicketModel.findOne({mainTicket:ticket._id})
  console.log(ticket);

  return (
    <Layout>
      <main className="px-[30px]">
        <h1 className={styles.title}>
          <span className="bg-white px-4 mr-16">تیکت تستی</span>
          <Link href="/p-user/tickets/sendTicket" className=" flex items-center relative left-[30px] rounded-2xl border border-panelBrown px-2.5  bg-white text-panelBrown text-base ">ارسال تیکت جدید</Link>
        </h1>

        <div>
          <Answer {...ticket} type="user" />
          
          {answerTicket && <Answer {...ticket} type="admin" />}

          {!answerTicket && <div className="w-full rounded bg-panelBrown/10 text-center mt-[60px] py-5 text-panelBrown">
            <p>هنوز پاسخی دریافت نکردید</p>
          </div> }
        </div>
      </main>
    </Layout>
  );
};

export default page;
