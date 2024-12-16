'use client'

import EditorJSX from "@/components/EditorJSX";
import Dashboard from "@/components/templates/Dashboard";
import { dashboardSettings } from "@/config/settings";
import { useEffect, useState } from "react";

function DashboardLayout({ children }) {
  const [settings, setSettings] = useState(dashboardSettings)
  const [editorValue, setEditorValue] = useState("")

  function onChange(e:string) {
    try {
      setSettings(JSON.parse(e))
    } catch(error) {
      // TODO: Set error
      console.log("JSON error in editor")
    }
  }

  useEffect(() => {
    const string = JSON.stringify(settings, null, 2)
    setEditorValue(string)
  }, [settings])

  return (
    // <div>
    //   <Dashboard settings={settings} children={children} />
    // </div>
    <div className="flex h-full">
    <div className="relative h-screen w-[400px]">
      <EditorJSX editorValue={editorValue} onChange={onChange} />
    </div>
    <div className="h-full w-full">
      <Dashboard settings={settings} children={children} />
    </div>
  </div>
  );
}

export default DashboardLayout;