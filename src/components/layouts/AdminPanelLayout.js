import React from "react";
import Sidebar from "@/components/modules/p-admin/Sidebar";
import Topbar from "@/components/modules/p-admin/Topbor";
import { authUser } from "@/utils/auth.server";
import { redirect } from "next/navigation";

const Layout =async ({ children }) => {
   const user=await authUser()
    if(user){
      if (user.role!=="ADMIN") {
       return redirect('/p-user')
      }
     
    } else {
      return redirect('/login-register')
    }
  return (
    <div className="w-full bg-white h-screen text-black" dir="rtl">
      <section className="flex">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          {children}
        </div>
      </section>
    </div>
  );
};

export default Layout;
