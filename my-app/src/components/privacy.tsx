import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> [Insert Date]
      </p>
      <p className="mb-4">
        Ascendons Technologies (“we,” “our,” or “us”) respects your privacy and
        is committed to protecting the personal information you share with us
        through our website, <a href="https://ascendons.in" className="text-blue-600 underline">https://ascendons.in</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        We collect personal information only when you voluntarily fill out the
        contact form on our website. This may include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Subject and message content</li>
      </ul>
      <p className="mb-4">
        We do not collect payment details, sensitive personal data, or any other
        personally identifiable information through our website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Responding to your inquiries or requests</li>
        <li>Providing information about our services</li>
        <li>Internal record-keeping and communication</li>
      </ul>
      <p className="mb-4">
        We do <strong>not</strong> sell, rent, or trade your information to any third party.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Cookies and Analytics</h2>
      <p className="mb-4">
        Our website may use standard analytics tools (such as Google Analytics)
        to understand visitor behavior and improve user experience. These tools
        may collect non-personal data like browser type, pages visited, and time
        spent on the site. You can disable cookies through your browser settings
        if you prefer not to share this data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect the information you share with
        us. However, please note that no method of internet transmission or
        electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party sites. We are not
        responsible for the content or privacy practices of these external
        websites.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to request access, correction, or deletion of your
        personal information held by us. You can do so by contacting us at:
      </p>
      <p className="mb-4">
        📧 <a href="mailto:contact@ascendons.in" className="text-blue-600 underline">contact@ascendons.in</a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">7. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy periodically to reflect changes in our
        practices or for other operational, legal, or regulatory reasons. The
        latest version will always be available on this page.
      </p>

      <p className="mt-8">
        By using our website, you consent to the terms of this Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
