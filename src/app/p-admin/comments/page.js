import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import Table from "@/components/templates/p-admin/comments/Table";
import connectToDB from "@/configs/db";

import CommentModel from "@/models/Comment";

const page = async () => {
  connectToDB();
  const comments = await CommentModel.find({})
    .sort({ _id: -1 })
    //.populate("user")
    .populate("productID")
    .lean();

  return (
    <Layout>
      <main>
        {comments.length === 0 ? (
          <p className="w-max bg-panelBrown text-white py-[0.7rem] px-8 my-4 mx-auto text-3xl rounded">
            کامنتی وجود ندارد
          </p>
        ) : (
          <Table
            comments={JSON.parse(JSON.stringify(comments))}
            title="لیست کامنت ها"
          />
        )}
      </main>
    </Layout>
  );
};

export default page;
