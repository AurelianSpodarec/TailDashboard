import { INavigationItem } from "@/components/templates/Dashboard/_components/SidebarNavigation"

export interface IDashboardSettingsSidebar {
  mode?: 1 | 2
  menu: INavigationItem[]
}

export interface IDashboardSettings {
  grid: {
    variation: 1 | 2
  },
  header: {

  },
  sidebar: IDashboardSettingsSidebar
}
