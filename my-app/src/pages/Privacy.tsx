import React from "react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "privacy_policy_accepted_v1";

const Privacy: React.FC = () => {
  const navigate = useNavigate();

  const acceptAndReturn = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch (err) {
        console.error(err);
    }
    navigate(-1);
  };

  return (
    <div className="max-w-screen-lg mx-auto my-24 px-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">Last updated: November 30, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          We respect your privacy. We use cookies and similar technologies to
          provide, protect and improve our services. This page describes how we
          collect and use personal data when you use our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What we collect</h2>
        <p>
          We collect information you provide directly (for example, when you
          contact us) and information automatically collected (for example,
          cookies and analytics). We do not sell personal information to
          third-parties.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How we use data</h2>
        <p>
          We use collected information to provide and improve our services,
          personalize content, and respond to requests. We may also use
          aggregated data for analytics and internal research.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>
          If you have privacy-related questions, reach out to
          contact@ascendons.com.
        </p>
      </section>

      <div className="flex gap-3">
        <button
          onClick={acceptAndReturn}
          className="bg-[#f1c40f] px-4 py-2 rounded-md font-semibold"
        >
          Accept and return
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-md border"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Privacy;
