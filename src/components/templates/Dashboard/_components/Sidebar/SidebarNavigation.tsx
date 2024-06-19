
export interface INavigationItem {
  id: string
  name: string
  slug?: string
  icon?: JSX.Element
  new?: boolean
  onAction?: () => void,
  children?: INavigationItem[]
  data?: object | string | [] | number
}

function SidebarNavigationItem({ item, isActive }: { item: INavigationItem, isActive?: boolean }) {
  return (
    <div className={`flex
      ${isActive ?
        "text-sidebar-link-foreground-active bg-sidebar-link-background-active hover:text-sidebar-link-foreground-active-hover hover:bg-sidebar-link-background-active-hover" :
        "text-sidebar-link-foreground hover:text-sidebar-link-foreground-hover bg-sidebar-link-background hover:bg-sidebar-link-background-hover"
      }
    `}>
      <div className="flex">
        {item.icon &&
          item.icon
        }
        <span className="ml-3 flex-1 whitespace-nowrap">{item.name}</span>
      </div>

      {item.new &&
        <span className="ml-auto">NEW!</span>
      }

      {item?.children && <SidebarNavigationItemChildren children={item.children} />}
    </div>
  )
}

function SidebarNavigationItemChildren({ children }: { children: INavigationItem[] }) {
  return (
    <div className="ml-4">
      {children.map((child, index) => {
        return <SidebarNavigationItem key={child.id} item={child} />
      })}
    </div>
  )
}

function SidebarNavigation({ settings }: any) {
  return (
    <nav className="flex-1 overflow-auto">
      {settings.map((item: any, index: number) => {
        const isActive = index === 0
        return <SidebarNavigationItem key={item.id} item={item} isActive={isActive} />
      })}
    </nav>
  )
}

export default SidebarNavigation
