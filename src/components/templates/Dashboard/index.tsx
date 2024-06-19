'use client'

import { IDashboardSettings } from "@/config/IDashboardSettings";

import SidebarMain from "./_components/Main";
import SidebarHeader from "./_components/Header";
import Sidebar from "./_components/Sidebar";

function Dashboard({ settings }: { settings: IDashboardSettings }) {

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
          Grid {settings.grid.variation} is not supported.
        </div>
      );
  }

  return dashboardContent
}

export default Dashboard
