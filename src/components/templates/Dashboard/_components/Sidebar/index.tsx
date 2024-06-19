import { IDashboardSettingsSidebar } from "@/config/IDashboardSettings"
import SidebarNavigation from "../SidebarNavigation"

function Sidebar({ settings }: { settings: IDashboardSettingsSidebar }) {
  return (
    <aside className="border-r px-6 w-[270px]">
      Sidebar
      <SidebarNavigation settings={settings.menu} />
    </aside>
  )
}

export default Sidebar
