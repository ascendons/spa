import React, { useEffect, useRef, useState } from "react";

interface FileViewerProps {
  fileUrl: string;
  onClose: () => void;
}

export const FileViewer: React.FC<FileViewerProps> = ({ fileUrl, onClose }) => {
  const [open, setOpen] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const extension = fileUrl.split(".").pop()?.toLowerCase();

  const isImage = ["jpg", "jpeg", "png", "gif", "svg"].includes(
    extension || "",
  );
  const isPDF = extension === "pdf";
  const isText = ["txt", "csv", "md", "json", "xml", "html"].includes(
    extension || "",
  );

  const handlePrint = () => {
    window.open(fileUrl, "_blank", "noopener,noreferrer");
  };

  const getViewerSrc = () => {
    if (isPDF) return fileUrl;
    if (isText)
      return `https://docs.google.com/gview?url=${encodeURIComponent(fileUrl)}&embedded=true`;
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`;
  };

  useEffect(() => {
    setOpen(true); // Ensures modal shows immediately on mount
  }, []);

  if (!open) return null;

  return (
    <div style={modalBackdropStyle}>
      <div style={modalContentStyle}>
        <div style={{ textAlign: "right" }}>
          <button onClick={() => onClose()} style={closeButtonStyle}>
            ❌
          </button>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <button onClick={handlePrint} style={printButtonStyle}>
            🖨️ Print
          </button>
        </div>

        {isImage ? (
          <img
            src={fileUrl}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "70vh" }}
          />
        ) : (
          <iframe
            ref={iframeRef}
            src={getViewerSrc()}
            title="Document Viewer"
            style={{ width: "100%", height: "70vh", border: "none" }}
          />
        )}
      </div>
    </div>
  );
};

// Styles
const modalBackdropStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "8px",
  width: "90%",
  maxWidth: "800px",
  maxHeight: "90vh",
  overflow: "auto",
};

const closeButtonStyle: React.CSSProperties = {
  fontSize: "18px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
};

const printButtonStyle: React.CSSProperties = {
  padding: "6px 16px",
  fontSize: "15px",
  border: "none",
  backgroundColor: "#28a745",
  color: "#fff",
  borderRadius: "5px",
  cursor: "pointer",
};
