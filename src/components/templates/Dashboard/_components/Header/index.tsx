import ModeToggle from "@/components/ModeToggle"

function SidebarHeader() {
  return (
    <header className="bg-header-background border-b border-b-header-border-bottom">
      <div className="flex h-14 items-center">

        Header
        <ModeToggle />
      </div>
    </header>
  )
}

export default SidebarHeader
