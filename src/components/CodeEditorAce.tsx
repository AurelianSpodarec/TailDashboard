'use client'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeEditorAce({ editorValue, onChange }: any) {
  return (
    <AceEditor
      height="100%"
      width="100%"
      mode="html"
      theme="monokai"
      className="custom-ace"
      name="main-code-editor"
      // onLoad={this.onLoad}
      onChange={onChange}
      value={editorValue}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  )
}

export default CodeEditorAce;
