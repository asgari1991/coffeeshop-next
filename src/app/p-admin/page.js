import React from "react";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import Box from "@/components/modules/infoBox/InfoBox";

import TicketModel from "@/models/Ticket";
import CommentModel from "@/models/Comment";
import UserModel from "@/models/User";
import ProductModel from "@/models/Product";
import connectToDB from "@/configs/db";
import SaleChart from "@/components/templates/p-admin/index/SaleChart";
import GrowthChart from "@/components/templates/p-admin/index/GrowthChart";

async function AdminHomePage() {
  connectToDB();
  const tickets = await TicketModel.find({}).lean();
  const users = await UserModel.find({}).lean();
  const products = await ProductModel.find({}).lean();

  return (
    <AdminPanelLayout>
      <main>
        <section className="flex  flex-wrap gap-5 mt-12 px-10">
          <Box title="مجموع تیکت های دریافتی" value={tickets.length} />
          <Box title="مجموع محصولات سایت" value={products.length} />
          <Box title="مجموع سفارشات" value="333" />
          <Box title="مجموع کاربر های سایت" value={users.length} />
        </section>{" "}
        <div className="flex gap-2.5 px-[42px] mt-8">
          <section className=" w-1/2 text-center rounded p-5 bg-panelBrown/10">
            <p className="mb-2.5">آمار فروش</p>
            <SaleChart/>
          </section>
          <section className=" w-1/2 text-center rounded p-5 bg-panelBrown/10">
            <p className="mb-2.5">نرخ رشد</p>
            <GrowthChart/>
          </section>
        </div>
      </main>
    </AdminPanelLayout>
  );
}

export default AdminHomePage;
