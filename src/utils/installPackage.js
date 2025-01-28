// src/utils/installPackage.js
export const installPackage = async (packageName) => {
    try {
      const response = await fetch("http://localhost:5001/install-package", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ packageName }),
      });
  
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      return data;
    } catch (error) {
      throw new Error(`Failed to install package: ${error.message}`);
    }
  };