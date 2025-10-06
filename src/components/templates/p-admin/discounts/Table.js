"use client";
import { useRouter } from "next/navigation";
import React from "react";
function Table({ discounts }) {
  const router=useRouter()
    const removeDiscount=async (discountID) => {
      swal({
      title: "آیا از حذف کد تخفیف اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res=await fetch('/api/discounts',{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({id:discountID})

      })
        if (res.status === 200) {
      swal({
        title: " کد تخفیف حذف شد",
        icon: "success",
        buttons: "فهمیدم",
      }).then(() => {
        router.refresh();
      });
    }
      }})
      
      
    }
    
  return (
    <table className="w-full bg-blue-50">
      <thead>
        <tr className="align-middle child:text-black child:text-center child:border-none child:py-2 child:px-[22px]">
          <th>شناسه</th>
          <th>کد</th>
          <th>درصد</th>
          <th>حداکثر استفاده</th>
          <th>دفعات استفاده شده</th>
          <th>حذف</th>
        </tr>
      </thead>
      <tbody>
        {discounts.map((discount, index) => (
          <tr key={discount._id} className="align-middle bg-white child:py-2 child:px-[22px] child:text-center">
            <td className={discount.maxUse === discount.uses ? "bg-red-600": "bg-green-600"}>{index + 1}</td>
            <td>{discount.code}</td>
            <td>{discount.percent}</td>
            <td>{discount.maxUse}</td>
            <td>{discount.uses}</td>
            <td>
              <button type="button" onClick={()=>removeDiscount(discount._id)} className="w-full bg-panelBrown text-white py-[0.4rem] px-[0.7rem] rounded cursor-pointer text-sm">
                حذف
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;