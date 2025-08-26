import React from "react";

import Sidebar from "@/components/modules/p-user/Sidebar";
import Topbar from "@/components/modules/p-user/Topbar";

const Layout = ({ children }) => {
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
