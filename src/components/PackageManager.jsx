// src/components/PackageManager.jsx
import React, { useState } from "react";
import { installPackage } from "../utils/installPackage";

const PackageManager = ({ onInstall }) => {
  const [packageName, setPackageName] = useState("");

  const handleInstall = async () => {
    if (packageName) {
      try {
        await installPackage(packageName);
        onInstall(packageName);
        setPackageName("");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="package-manager">
      <input
        type="text"
        placeholder="Enter package name"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
        id="package-name" // Add this
        name="package-name" // Add this
      />
      <button onClick={handleInstall}>Install</button>
    </div>
  );
};

export default PackageManager;