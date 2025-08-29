import React from "react";

import Sidebar from "@/components/modules/p-user/Sidebar";
import Topbar from "@/components/modules/p-user/Topbar";
import { authUser } from "@/utils/auth.server";
import { redirect } from "next/navigation";

const Layout =async ({ children }) => {
  const user=await authUser()
  if(!user){
    redirect('/login-register')
  }
  return (
    <div dir="rtl" className="bg-white w-full h-screen text-black">
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
