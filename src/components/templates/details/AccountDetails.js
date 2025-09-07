"use client";
import React, { useEffect } from "react";
import styles from "@/styles/p-user/accountDetails.module.css";
import swal from "sweetalert";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";

function AccountDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
const router=useRouter()
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();

      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
    };
    getUser();
  }, []);

  const updateUser = async () => {
    // Validation (You)

    const userNewInfos = {
      name,
      email,
      phone,
    };

    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInfos),
    });

    if (res.status === 200) {
      swal({
        title: "اطلاعات مورد نظر با موفقیت آپدیت شد",
        icon: "success",
        buttons: "فهمیدم",
      }).then(async (result) => {
        await fetch("/api/auth/signout", { method: "POST" });
        router.replace("/login-register")
      });
    }
  };

  return (
    <main>
    <div className={`${styles.details} p-5`}>
        <h1 className={styles.title}>
          <span className="bg-white px-4 mr-16"> جزئیات اکانت</span>
        </h1>
        <div className="flex items-end w-full gap-[30px]">
          <section className="flex w-full flex-col gap-[30px]">
            <div>
              <label>نام کاربری</label>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="لطفا نام کاربری خود را وارد کنید"
                type="text"
              />
            </div>
            <div>
              <label>ایمیل</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="لطفا ایمیل خود را وارد کنید"
                type="text"
              />
            </div>
            <div>
              <label>شماره تماس</label>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="لطفا شماره تماس خود را وارد کنید"
                type="number"
              />
            </div>
          </section>
          <section className="flex w-full flex-col gap-5">
            <div className={styles.uploader}>
              <img src="/images/shahin.jpg" alt="" className="w-[200px] block rounded-full border-2 border-panelBrown" />
              <div className=" flex flex-col mt-2.5 gap-2.5 items-baseline relative w-full">
                <div className="w-full flex flex-col mt-2.5 gap-2.5 items-baseline relative">
                  <button className="w-full mt-[38px]">
                    <IoCloudUploadOutline />
                    تغییر
                  </button>
                  <input type="file" name="" id="" className=" absolute block w-full h-full opacity-0 left-[1px] top-1 cursor-pointer " />
                </div>
                <button>
                  <MdOutlineDelete />
                  حذف
                </button>
              </div>
            </div>
            <div>
              <label>رمز عبور</label>
              <div className="flex items-baseline gap-2.5">
                <input type="password" />
                <button className="w-[120px]">تغییر رمز عبور</button>
              </div>
            </div>
          </section>
        </div>
        <button
          type="submit"
          onClick={updateUser}
          className={styles.submit_btn}
        >
          ثبت تغییرات
        </button>
      </div>
    </main>
  );
}

export default AccountDetails;
