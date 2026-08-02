import React from "react";
import Header from "./_components/Header";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#2C1810]">
      <Header />
      <main className="min-h-screen md:pl-72">{children}</main>
    </div>
  );
}

export default DashboardLayout;
