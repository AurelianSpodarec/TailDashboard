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

// TODO: Variation and mode are same thing
