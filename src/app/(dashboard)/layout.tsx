import Sidebar from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-dashboard-main">
      <div className="flex-1 p-[20px] min-h-[100vh] bg-dashboard-sidebar shadow-xl rounded-r-2xl">
        <Sidebar />
      </div>
      <div className="flex-4 p-[20px]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
