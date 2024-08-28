import BarChart from "@/components/charts/BarChart";
import React from "react";

const DashboardHome = () => {
  return (
    <div>
      <div className="dashboard-container">
        <div className="dashboard-container-element">
          <BarChart />
        </div>
      </div>

      <div className="dashboard-container mt-5">
        <div className="dashboard-container-element">Hola</div>
      </div>
    </div>
  );
};

export default DashboardHome;
