import React from "react";
import styles from "./table.module.css";
export default function DataTable({ users, title }) {
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
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>نقش</th>
              <th>ویرایش</th>
              <th>تغییر سطح</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="align-middle bg-white child:py-2 child:px-[22px] child:text-center">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email ? user.email : "ایمیل یافت نشد"}</td>
                <td>{user.role === "USER" ? "کاربر عادی" : "مدیر"}</td>
                <td>
                  <button type="button" className="w-full bg-black text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm ">
                    ویرایش
                  </button>
                </td>
                <td>
                  <button type="button" className="w-full bg-black text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm ">
                    تغییر نقش
                  </button>
                </td>
                <td>
                  <button type="button" className="w-full bg-panelBrown text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm">
                    حذف
                  </button>
                </td>
                <td>
                  <button type="button" className="w-full bg-panelBrown text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm">
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
