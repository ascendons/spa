import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import JParticlesEffect from "./JParticlesEffect";

const API_URL = "https://4f7f-202-168-85-208.ngrok-free.app";

const QrGenerator: React.FC = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessionId = async () => {
      try {
        const response = await fetch(API_URL + "/api/session/create");
        console.log("Response::", response);
        const data = await response.json();
        console.log("Data::", data);
        setSessionId(data.sessionId);
        // setSessionId("wertyhgbvcxse4r5t6yu7654e3drfghnbvcdxe4r5t6y7u8i98u7ytrfghjm");
      } catch (err) {
        console.error("Error fetching session ID:", err);
        setError("Failed to generate QR code.");
      } finally {
        setLoading(false);
      }
    };

    fetchSessionId();
  }, []);

  if (loading) {
    return <p>Loading QR Code...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <section className="home-section">
      <JParticlesEffect />
      <div style={styles.container}>
        <h2>Scan this QR Code</h2>
        <div style={styles.qrBox}>
          <QRCode value={sessionId || ""} size={400} />
        </div>
        <p>Session ID: {sessionId}</p>
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
