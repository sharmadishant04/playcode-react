// src/components/Editor.jsx
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className="editor-container">
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default CodeEditor;