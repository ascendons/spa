import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import JParticlesEffect from "./JParticlesEffect";
import { FileViewer } from "./FileViewer";

const API_URL = "https://1ecba8bc6529.ngrok-free.app";

const QrGenerator: React.FC = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("waiting");
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const fetchSessionId = async () => {
      try {
        const response = await fetch(`${API_URL}/api/session/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log("Session Created:", data);
        setSessionId(data.sessionId);
      } catch (err) {
        console.error("Error fetching session ID:", err);
        setError("Failed to generate QR code.");
      } finally {
        setLoading(false);
      }
    };

    fetchSessionId();
  }, [refresh]);

  useEffect(() => {
    console.log("Session ID poll:", sessionId);
    if (!sessionId) return;
    console.log("Polling for session status...");
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`${API_URL}/api/session/status/${sessionId}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "User-Agent": "ReactApp",
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log("Session status:", data);
        setStatus(data.status);

        if (data.status === "paired") {
          clearInterval(interval);
          setFileUrl(data.data);
        }
      } catch (err) {
        console.error("Error checking session status:", err);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [sessionId]);

  if (loading) {
    return <p>Loading QR Code...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  const refreshQr = () => {
    setSessionId(null);
    setFileUrl(null);
    setStatus("waiting");
    setLoading(true);
    setError(null);
    setRefresh(!refresh);
  };

  return (
    <section className="home-section">
      <JParticlesEffect />
      <div style={styles.container}>
        {fileUrl ? (
          <>
            <FileViewer fileUrl={fileUrl} onClose={() => refreshQr()} />
          </>
        ) : (
          <>
            <h2>Scan this QR Code</h2>
            <div style={styles.qrBox}>
              <QRCode value={sessionId || ""} size={400} />
            </div>
            <p>Session ID: {sessionId}</p>
            <p>
              Status: <strong>{status}</strong>
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default QrGenerator;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "2rem",
    backgroundBlendMode: "multiply",
    zIndex: 999,
    height: "50%",
  },
  qrBox: {
    display: "inline-block",
    padding: "1rem",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    marginTop: "1rem",
  },
};
