import DataTable from "@/components/templates/p-user/comments/DataTable";
import Layout from "@/components/layouts/UserPanelLayout";
import React from "react";
import connectToDB from "@/configs/db";
import Commentmodel from "@/models/Comment";
import { authUser } from "@/utils/auth.server";

const page = async () => {
  connectToDB();
  const user = await authUser();
  const comments = await Commentmodel.find(
    { user: String(user._id) },
    "-__v"
  ).populate("productID", "name");

  console.log(comments);

  return (
    <Layout>
      <main>
        <DataTable
          comments={JSON.parse(JSON.stringify(comments))}
          title="لیست کامنت‌ها"
        />
        {/* <p className="text-white bg-panelBrown py-[0.7rem] px-8 w-max my-60 mx-auto text-3xl rounded">
          کامنتی وجود ندارد
        </p>  */}
      </main>
    </Layout>
  );
};

export default page;
