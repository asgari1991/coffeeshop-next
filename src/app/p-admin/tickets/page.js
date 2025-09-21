import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import Table from "@/components/templates/p-admin/tickets/Table";
import connectToDB from "@/configs/db";

import TicketModel from "@/models/Ticket";

const page = async () => {
  connectToDB();
  const tickets = await TicketModel.find({isAnswer:false})
    .sort({ _id: -1 })
    .populate("user")
    .populate("department")
    .lean();

  return (
    <Layout>
      <main>
        {tickets.length === 0 ? (
          <p className="w-max bg-panelBrown text-white py-[0.7rem] px-8 my-4 mx-auto text-3xl rounded">
            تیکتی وجود ندارد
          </p>
        ) : (
          <Table
            tickets={JSON.parse(JSON.stringify(tickets))}
            title="لیست تیکت ها"
          />
        )}
      </main>
    </Layout>
  );
};

export default page;
