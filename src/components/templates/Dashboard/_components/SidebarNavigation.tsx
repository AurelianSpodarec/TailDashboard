
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

function SidebarNavigationItem({ item }: { item: INavigationItem }) {
  return (
    <div className="flex">
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
      {children.map((child) => (
        <SidebarNavigationItem key={child.id} item={child} />
      ))}
    </div>
  )
}

function SidebarNavigation({ settings }:any) {
  return (
    <nav>
      {settings.map((item: any) => {
        return <SidebarNavigationItem key={item.id} item={item} />
      })}
    </nav>
  )
}

export default SidebarNavigation
