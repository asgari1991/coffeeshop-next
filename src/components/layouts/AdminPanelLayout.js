import React from "react";
import Sidebar from "@/components/modules/p-admin/Sidebar";
import Topbar from "@/components/modules/p-admin/Topbor";

const Layout = ({ children }) => {
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
