"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/p-user/sendTicket.module.css";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import { showSwal } from "@/utils/helpers";
import { useRouter } from "next/navigation";
const SendTicket = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [department, setDepartment] = useState([]);
  const [departmentID, setDepartmentID] = useState(-1);
  const [subDepartment, setSubDepartment] = useState([]);
  const [subDepartmentID, setSubDepartmentID] = useState(-1);
  const [priority, setPriority] = useState(1);
const router=useRouter()
  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch("/api/departments");
      const data = await res.json();
      setDepartment([...data]);
    };

    getDepartments();
  }, []);
  useEffect(() => {
    const getSubDepartments = async () => {
      const res = await fetch(`/api/departments/sub/${departmentID}`);
      if (res.status === 200) {
        const data = await res.json();

        setSubDepartment([...data]);
      }
    };

    getSubDepartments();
  }, [departmentID]);
  const sendTicket =async () => {
    //validation
    if (
      departmentID === -1 ||
      subDepartmentID === -1 ||
      title.trim().length < 3 ||
      body.trim().length < 10
    ) {
      showSwal("لطفا تمامی فیلدها را به درستی پر نمایید.", "error", "فهمیدم");
      
    }
    const ticket = {
      title,
      body,
      department: departmentID,
      subDepartment: subDepartmentID,
      priority,
    };
    const res=await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(ticket)})
      console.log('res', res);
      
      if(res.status===201){
        swal({
          title: "تیکت با موفقیت ارسال شد.",
          icon: "success",
          button: "مشاهده تیکت ها",
        }).then((result)=>{
          router.replace("/p-user/tickets")
        })
        setTitle("");
        setBody("");
        setDepartmentID(-1);
        setSubDepartmentID(-1);
        setPriority(1);
      }
  };
  return (
    <main className="px-[30px]">
      <h1 className={styles.title}>
        <span>ارسال تیکت جدید</span>
        <Link href="/p-user/tickets"> همه تیکت ها</Link>
      </h1>

      <div className="grid p-0 gap-5 mb-4 grid-cols-[auto_auto]">
        <div className="flex gap-[5px] flex-col bg-white">
          <label>دپارتمان را انتخاب کنید:</label>
          <select
            onChange={(event) => setDepartmentID(event.target.value)}
            className="bg-white p-2.5 text-black rounded-md outline-none border-[3px] border-panelBrown mt-[4.5px]"
          >
            <option value={-1}>لطفا دپارتمان را انتخاب نمایید.</option>
            {department.length &&
              department.map((dep) => (
                <option key={dep._id} value={dep._id}>
                  {dep.title}
                </option>
              ))}
          </select>
        </div>
        <div className="flex gap-[5px] flex-col bg-white">
          <label>نوع تیکت را انتخاب کنید:</label>
          <select
            onChange={(event) => setSubDepartmentID(event.target.value)}
            className="bg-white p-2.5 text-black rounded-md outline-none border-[3px] border-panelBrown mt-[4.5px]"
          >
            <option value={-1}>لطفا یک مورد را انتخاب نمایید.</option>
            {subDepartment.length &&
              subDepartment.map((sub) => (
                <option key={sub._id} value={sub._id}>
                  {sub.title}
                </option>
              ))}
          </select>
        </div>
        <div className="flex gap-[5px] flex-col bg-white">
          <label>عنوان تیکت را وارد کنید:</label>
          <input
            placeholder="عنوان..."
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full p-2.5 resize-none bg-white mt-1 outline-none text-black rounded-md border-[3px] border-panelBrown"
          />
        </div>
        <div className="flex gap-[5px] flex-col bg-white">
          <label>سطح اولویت تیکت را انتخاب کنید:</label>
          <select
            onChange={(event) => setPriority(event.target.value)}
            className="bg-white p-2.5 text-black rounded-md outline-none border-[3px] border-panelBrown mt-[4.5px]"
          >
            <option value={-1}>لطفا یک مورد را انتخاب نمایید.</option>
            <option value={1}>کم</option>
            <option value={2}>متوسط</option>
            <option value={3}>بالا</option>
          </select>
        </div>
      </div>
      <div className="flex gap-[5px] flex-col bg-white">
        <label>محتوای تیکت را وارد نمایید:</label>
        <textarea
          placeholder="متن تیکت..."
          value={body}
          onChange={(event) => setBody(event.target.value)}
          rows={10}
          className="mb-4 w-full p-2.5 resize-none bg-white mt-1 outline-none text-black rounded-md border-[3px] border-panelBrown"
        ></textarea>
      </div>
      <div className="flex gap-[5px] flex-col rounded-md bg-panelBrown/10 text-center py-5">
        <span>حداکثر اندازه: 6 مگابایت</span>
        <span>فرمت‌های مجاز: jpg, png.jpeg, rar, zip</span>
        <input
          type="file"
          className="p-0 bg-transparent relative right-[30px] border-0 cursor-pointer mx-auto w-max  resize-none mt-1 outline-none text-black rounded-md border-panelBrown"
        />
      </div>

      <button
        onClick={sendTicket}
        className="flex items-center gap-1 bg-panelBrown w-max py-2 px-[0.8rem] text-white rounded cursor-pointer mt-4 mb-8"
      >
        <IoIosSend className="w-5 h-5" />
        ارسال تیکت
      </button>
    </main>
  );
};

export default SendTicket;
