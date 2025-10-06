'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddDiscount = () => {
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState("");
  const [maxUse, setMaxUse] = useState("");
  const router=useRouter()
  const addDiscount=async () => {
    // validation
    const discount={code,percent,maxUse}
    const res=await fetch('/api/discounts',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(discount)
    })
    if (res.status===201) {
        swal({
            title:"کد تخفیف با موفقیت ایجاد گردید",
            icon:"success",
            buttons:"فهمیدم"
        }).then(()=>{
            setCode("")
            setPercent("")
            setMaxUse("")
            router.refresh()
        })
    }
  }
  return (
    <section className="p-5">
      <p className="relative mt-2.5 mb-[30px] text-right uppercase text-3xl z-[1] ">
        افزودن کد تخفیف جدید
      </p>
      <div className="grid gap-[30px] grid-cols-[auto_auto]">
        <div className="flex flex-col">
          <label className="text-xl">شناسه تخفیف</label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-2.5 bg-white mt-1 outline-0 text-black rounded border-[3px] border-panelBrown"
            placeholder="لطفا شناسه تخفیف را وارد کنید"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl">درصد تخفیف</label>
          <input
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            className="w-full p-2.5 bg-white mt-1 outline-0 text-black rounded border-[3px] border-panelBrown"
            placeholder="لطفا درصد تخفیف را وارد کنید"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl">حداکثر استفاده</label>
          <input
            value={maxUse}
            onChange={(e) => setMaxUse(e.target.value)}
            className="w-full p-2.5 bg-white mt-1 outline-0 text-black rounded border-[3px] border-panelBrown"
            placeholder="حداکثر استفاده از کد تخفیف"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl">محصول</label>
          <select
            name=""
            id=""
            className="bg-white p-2.5 text-black rounded border-[3px] border-panelBrown mt-1 outline-0"
          >
            <option value="">قهوه ترک</option>
            <option value="">قهوه عربیکا</option>
            <option value="">قهوه اسپرسو</option>
          </select>
        </div>
      </div>
      <button onClick={addDiscount} className="w-max bg-panelBrown text-white py-[0.7rem] px-8 my-4 mx-auto text-xl rounded">
        افزودن
      </button>
    </section>
  );
};

export default AddDiscount;
