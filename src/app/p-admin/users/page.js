import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import Table from "@/components/templates/p-admin/users/Table";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";

const page = async () => {
  connectToDB();
  const users = await UserModel.find({}).lean();

  return (
    <Layout>
      <main>
        {users.length === 0 ? (
          <p className="w-max bg-panelBrown text-white py-[0.7rem] px-8 my-4 mx-auto text-3xl rounded">کاربری وجود ندارد</p>
        ) : (
          <Table
            users={JSON.parse(JSON.stringify(users))}
            title="لیست کاربران"
          />
        )}
      </main>
    </Layout>
  );
};

export default page;
