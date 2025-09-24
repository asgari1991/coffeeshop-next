"use client";

import { showSwal } from "@/utils/helpers";
import styles from "../tickets/table.module.css";
export default function DataTable({ comments, title }) {
  const showCommentBody=(body)=>{
    showSwal(body,undefined,"فهمیدم")
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
              <th>ایمیل</th>
              <th>امتیاز</th>
              <th>محصول</th>
              <th>تاریخ ثبت</th>
              <th>مشاهده</th>
              <th>ویرایش</th>
              <th>حذف</th>
              <th>تایید</th>
              <th>پاسخگویی</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr
                key={comment._id}
                className="align-middle bg-white child:py-2 child:px-[22px] child:text-center"
              >
                <td>{index + 1}</td>
                <td>{comment.username}</td>
                <td>{comment.email}</td>
                <td>{comment.score}</td>
                <td>{comment.productID.name}</td>
                <td>{new Date(comment.date).toLocaleDateString('fa-IR')}</td>
                <td>
                  <button
                    type="button"
                    className="w-full bg-black text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm "
                   onClick={()=>showCommentBody(comment.body)}
                  >
                    مشاهده
                  </button>
                </td>
               
                <td>
                  <button
                    type="button"
                    className="w-full bg-black text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm"
                   
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="w-full bg-panelBrown text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm"
                   
                  >
                    حذف
                  </button>
                </td>
                 <td>
                  <button
                    type="button"
                    className="w-full bg-panelBrown text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm "
                   
                  >
                    تایید
                  </button>
                </td>
               
                <td>
                  <button
                    type="button"
                    className="w-full bg-panelBrown text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm"
                   
                  >
                    پاسخگویی
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="w-full bg-panelBrown text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm"
                   
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