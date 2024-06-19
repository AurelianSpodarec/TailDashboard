'use client'

import JSONEditorAce from "./JSONEditorAce";

function EditorJSX({ onChange, editorValue }: any) {
  return (
    <div className="h-full absolute top-0 right-0 bottom-0 left-0">
      <JSONEditorAce onChange={onChange} editorValue={editorValue} />
    </div>
  );
}

export default EditorJSX;
