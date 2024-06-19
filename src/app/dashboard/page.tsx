'use client'

import SidebarHeader from "./_components/Header";
import SidebarMain from "./_components/Main";
import Sidebar from "./_components/Sidebar";

function Dashboard({ settings }: any) {

  let dashboardContent
  switch (settings.grid.variation) {
    case 1:
      dashboardContent = (
        <div className="flex">
          <Sidebar settings={settings.sidebar} />
          <div>
            <SidebarHeader />
            <SidebarMain />
          </div>
        </div>
      );
      break;
    case 2:
      dashboardContent = (
        <div className="flex flex-col">
          <SidebarHeader />
          <div>
            <Sidebar settings={settings.sidebar} />
            <SidebarMain />
          </div>
        </div>
      );
      break;
    default:
      dashboardContent = (
        <div>
          {/* Handle other grid variations */}
          Grid {dashboard.grid} is not supported.
        </div>
      );
  }

  return dashboardContent
}

export default Dashboard
