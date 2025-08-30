"use client";
import React from "react";
import styles from "@/styles/p-user/dataTable.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import swal from "sweetalert";
import { showSwal } from "@/utils/helpers";
 
export default function DataTable({ comments, title }) {
  const showCommentBody = (commentBody) => {
    showSwal(commentBody, undefined, "اوکی");
  };

  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span className="bg-white px-4 mr-16">{title}</span>
        </h1>
      </div>
      <div className="py-10 px-6">
        <table className="w-full bg-[#f2f7fd]">
          <thead>
            <tr className=" align-middle child:border-none child:text-black child:text-center child:py-2 child:px-[22px]">
              <th>شناسه</th>
              <th>تاریخ</th>
              <th>محصول</th>
              <th>امتیاز</th>
              <th>وضعیت</th>
              <th>مشاهده</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr key={index} className=" align-middlebg-white child:text-center child:py-2 child:px-[22px]">
                <td>{index + 1}</td>
                <td>{new Date(comment.date).toLocaleDateString("fa-IR")}</td>
                <td>{comment.productID.name}</td>
                <td className="flex justify-center items-center text-orange-500">
                  {new Array(comment.score).fill(0).map((item, index) => (
                    <FaStar key={index} />
                  ))}
                  {new Array(5 - comment.score).fill(0).map((item, index) => (
                    <FaRegStar key={index} />
                  ))}
                </td>
                <td>
                  <button type="button" className="text-[13px] bg-panelBrown px-[0.7rem] py-[0.4rem] w-full cursor-pointer border-0 rounded-[3px] text-white">
                    {comment.isAccept ? "تایید شده" : "در انتظار تایید"}
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => showCommentBody(comment.body)}
                    className="text-[13px] bg-black px-[0.7rem] py-[0.4rem] w-full cursor-pointer border-0 rounded-[3px] text-white"
                  >
                    مشاهده
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
