import { IDashboardSettingsSidebar } from "@/config/IDashboardSettings"
import SidebarNavigation from "./SidebarNavigation"
import SidebarLogo from "./SidebarLogo"

function Sidebar({ settings }: { settings: IDashboardSettingsSidebar }) {
  return (
    <aside className="border-r w-[270px]">
      <SidebarLogo />
      <SidebarNavigation settings={settings.menu} />
    </aside>
  )
}

export default Sidebar
