"use client";

import { useRouter } from "next/navigation";
import styles from "./table.module.css";
export default function DataTable({ users, title }) {
  const router = useRouter();
  const changeRole = async (userID) => {
    //validation

    const res = await fetch("/api/user/role", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userID }),
    });
    if (res.status === 200) {
      swal({
        title: "نقش کاربر با موفقیت تغییر یافت",
        icon: "success",
        buttons: "فهمیدم",
      }).then(() => {
        router.refresh();
      });
    }
  };
  const removeUser = async (userID) => {
    //Confirmation
    //Validation
    swal({
      title: "آیا از حذف کاربر اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/user", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: userID }),
        });
        if (res.status === 200) {
          swal({
            title: "کاربر با موفقیت حذف شد",
            icon: "success",
            buttons: "فهمیدم",
          }).then(() => {
            router.refresh();
          });
        }
        
      }
    });
  };
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
              <tr
                key={user._id}
                className="align-middle bg-white child:py-2 child:px-[22px] child:text-center"
              >
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email ? user.email : "ایمیل یافت نشد"}</td>
                <td>{user.role === "USER" ? "کاربر عادی" : "مدیر"}</td>
                <td>
                  <button
                    type="button"
                    className="w-full bg-black text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm "
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="w-full bg-black text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm "
                    onClick={() => changeRole(user._id)}
                  >
                    تغییر نقش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="w-full bg-panelBrown text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm"
                    onClick={() => removeUser(user._id)}
                  >
                    حذف
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
