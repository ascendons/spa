import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

interface CookieConsentProps {
  onAccept: (consent: boolean) => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);
    onAccept(true);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);
    onAccept(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-content">
        <div className="cookie-consent-text">
          <h3>🍪 Cookie Consent</h3>
          <p>
            We use cookies to enhance your browsing experience, analyze site
            traffic, and personalize content. By clicking "Accept", you consent
            to our use of cookies.{" "}
            <button
              className="cookie-link"
              onClick={() => setShowDetails(!showDetails)}
            >
              Learn more
            </button>
          </p>
          {showDetails && (
            <div className="cookie-details">
              <p>
                <strong>What we collect:</strong>
              </p>
              <ul>
                <li>Browser and device information (anonymized)</li>
                <li>Page visits and navigation patterns</li>
                <li>Referrer URL and IP address (general location only)</li>
                <li>User preferences and consent choices</li>
              </ul>
              <p>
                <strong>Privacy:</strong> We respect your privacy. All data is
                stored securely and used only for analytics and site
                improvement. You can revoke consent at any time by clearing your
                browser cookies.
              </p>
            </div>
          )}
        </div>
        <div className="cookie-consent-buttons">
          <button
            className="cookie-btn cookie-btn-reject"
            onClick={handleReject}
          >
            Reject
          </button>
          <button
            className="cookie-btn cookie-btn-accept"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
