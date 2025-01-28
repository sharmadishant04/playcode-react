// src/App.jsx
import React, { useState } from "react";
import CodeEditor from "./components/Editor";
import Preview from "./components/Preview";
import PackageManager from "./components/PackageManager";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles/App.css";

const App = () => {
  const [code, setCode] = useState("");
  const [installedPackages, setInstalledPackages] = useState([]);

  const handlePackageInstall = (packageName) => {
    setInstalledPackages([...installedPackages, packageName]);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>React Code Editor</h1>
        <PackageManager onInstall={handlePackageInstall} />
      </div>
      <div className="main">
        <CodeEditor code={code} setCode={setCode} />
        <ErrorBoundary>
          <Preview code={code} installedPackages={installedPackages} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;