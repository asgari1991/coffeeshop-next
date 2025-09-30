import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import Table from "@/components/templates/p-admin/users/Table";
import connectToDB from "@/configs/db";
import DiscountModel from "@/models/User";

const page = async () => {
  connectToDB();
  const discounts = await DiscountModel.find({}).lean();

  return (
    <Layout>
      <main>
        {discounts.length === 0 ? (
          <p className="w-max bg-panelBrown text-white py-[0.7rem] px-8 my-4 mx-auto text-3xl rounded">تخفیفی وجود ندارد</p>
        ) : (
          <Table
            discounts={JSON.parse(JSON.stringify(discounts))}
            title="لیست کد تخفیف ها"
          />
        )}
      </main>
    </Layout>
  );
};

export default page;