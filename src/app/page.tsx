'use client'

import { useEffect, useState } from "react"
import { dashboardSettings } from "@/config/settings"

import Dashboard from "@/components/templates/Dashboard"
import EditorJSX from "@/components/EditorJSX"

function View() {
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
    <div className="flex">
      <div className="relative h-screen w-[400px]">
        <EditorJSX editorValue={editorValue} onChange={onChange} />
      </div>
      <div className="h-full w-full">
        <Dashboard settings={settings} />
      </div>
    </div>
  );
}

export default View;
