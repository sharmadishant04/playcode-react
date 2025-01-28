// src/components/Preview.jsx
import React, { useEffect, useRef } from "react";

const Preview = ({ code, installedPackages }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return; // Ensure iframe is mounted

    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) return; // Ensure iframe document is available

    iframeDocument.open();
    iframeDocument.write(`
      <html>
        <head>
          <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          ${installedPackages
            .map(
              (pkg) =>
                `<script src="https://unpkg.com/${pkg}"></script>`
            )
            .join("\n")}
        </head>
        <body>
          <div id="root"></div>
          <script type="text/babel">
            ${code}
          </script>
        </body>
      </html>
    `);
    iframeDocument.close();
  }, [code, installedPackages]);

  return (
    <div className="preview-container">
      <iframe
        ref={iframeRef}
        title="preview"
        width="100%"
        height="100%"
        sandbox="allow-scripts"
      />
    </div>
  );
};

export default Preview;