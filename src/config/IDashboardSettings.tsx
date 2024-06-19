import { INavigationItem } from "@/components/templates/Dashboard/_components/Sidebar/SidebarNavigation"

export interface IDashboardSettingsSidebar {
  variation?: 1 | 2
  menu: INavigationItem[]
}

export interface IDashboardSettings {
  mode: "light" | "dark"
  grid: {
    variation: 1 | 2
  },
  header: {

  },
  sidebar: IDashboardSettingsSidebar
}
