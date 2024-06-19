'use client'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools";

function JSONEditorAce({ editorValue, onChange }: any) {
  return (
    <AceEditor
      height="100%"
      width="100%"
      mode="json"
      theme="monokai"
      className="custom-ace-tokens custom-ace h-full"
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
        showLineNumbers: false,
        tabSize: 2,
      }}
    />
  )
}

export default JSONEditorAce;
