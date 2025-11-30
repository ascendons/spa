import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const STORAGE_KEY = "privacy_policy_accepted_v1";

const PrivacyPolicy: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setVisible(true);
    } catch (err) {
      console.error(err);
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch (err) {
      console.error(err);
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="privacy-banner" role="dialog" aria-live="polite">
      <div className="privacy-content">
        <div className="privacy-text">
          <strong>Privacy notice:</strong> We use cookies and similar
          technologies to personalize content, measure and improve our site. By
          continuing to browse you consent to our use of such technologies.
        </div>

        <div className="privacy-actions">
          <Link
            to="/privacy"
            className="privacy-more"
            aria-label="Read our full privacy policy"
          >
            Read full policy
          </Link>
          <button
            onClick={accept}
            className="privacy-accept"
            aria-label="Accept privacy policy"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
