'use client'

import SidebarNavigation from "./_components/SidebarNavigation";

function Sidebar({ settings }) {
  return (
    <aside className="border-r px-6 w-[270px]">
      Sidebar
      <SidebarNavigation settings={settings.menu} />
    </aside>
  )
}

function SidebarHeader() {
  return (
    <header>
      Header
    </header>
  )
}

function SidebarMain() {
  return (
    <main>
      Main
    </main>
  )
}




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
