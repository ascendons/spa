/**
 * User Analytics Utility
 * Collects anonymized user information with proper consent
 */

interface UserData {
  timestamp: string;
  consent: string;
  consentDate: string;
  userAgent: string;
  browser: string;
  browserVersion: string;
  os: string;
  deviceType: string;
  screenResolution: string;
  language: string;
  timezone: string;
  referrer: string;
  currentPage: string;
  sessionId: string;
  ipAddress?: string; // Will be anonymized by server
}

// Generate a session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem("sessionId");
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem("sessionId", sessionId);
  }
  return sessionId;
};

// Extract browser info from user agent
const getBrowserInfo = (
  userAgent: string,
): { browser: string; version: string; os: string; deviceType: string } => {
  let browser = "Unknown";
  let version = "Unknown";
  let os = "Unknown";
  let deviceType = "Desktop";

  // Detect OS
  if (userAgent.includes("Windows")) os = "Windows";
  else if (userAgent.includes("Mac")) os = "macOS";
  else if (userAgent.includes("Linux")) os = "Linux";
  else if (userAgent.includes("Android")) {
    os = "Android";
    deviceType = "Mobile";
  } else if (
    userAgent.includes("iOS") ||
    userAgent.includes("iPhone") ||
    userAgent.includes("iPad")
  ) {
    os = "iOS";
    deviceType = userAgent.includes("iPad") ? "Tablet" : "Mobile";
  }

  // Detect Browser
  if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
    browser = "Chrome";
    const match = userAgent.match(/Chrome\/(\d+)/);
    version = match ? match[1] : "Unknown";
  } else if (userAgent.includes("Firefox")) {
    browser = "Firefox";
    const match = userAgent.match(/Firefox\/(\d+)/);
    version = match ? match[1] : "Unknown";
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    browser = "Safari";
    const match = userAgent.match(/Version\/(\d+)/);
    version = match ? match[1] : "Unknown";
  } else if (userAgent.includes("Edg")) {
    browser = "Edge";
    const match = userAgent.match(/Edg\/(\d+)/);
    version = match ? match[1] : "Unknown";
  }

  return { browser, version, os, deviceType };
};

/**
 * Collect user analytics data (with consent)
 */
export const collectUserData = (): UserData | null => {
  // Check if user has consented
  const consent = localStorage.getItem("cookieConsent");
  if (consent !== "accepted") {
    return null; // Don't collect data without consent
  }

  const userAgent = navigator.userAgent;
  const browserInfo = getBrowserInfo(userAgent);

  const data: UserData = {
    timestamp: new Date().toISOString(),
    consent: consent || "unknown",
    consentDate: localStorage.getItem("cookieConsentDate") || "unknown",
    userAgent: userAgent.substring(0, 200), // Limit length
    browser: browserInfo.browser,
    browserVersion: browserInfo.version,
    os: browserInfo.os,
    deviceType: browserInfo.deviceType,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language || "unknown",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown",
    referrer: document.referrer || "direct",
    currentPage: window.location.pathname + window.location.search,
    sessionId: getSessionId(),
  };

  return data;
};

/**
 * Send user data to Google Sheets via Google Apps Script
 * Uses FormData to match existing script format, but includes type identifier
 */
export const sendUserDataToSheets = async (
  data: UserData,
): Promise<boolean> => {
  try {
    // Convert to FormData format that works with existing Google Apps Script
    const formData = new FormData();
    formData.append("type", "analytics"); // Identifier for analytics data
    formData.append("timestamp", data.timestamp);
    formData.append("consent", data.consent);
    formData.append("consentDate", data.consentDate);
    formData.append("browser", data.browser);
    formData.append("browserVersion", data.browserVersion);
    formData.append("os", data.os);
    formData.append("deviceType", data.deviceType);
    formData.append("screenResolution", data.screenResolution);
    formData.append("language", data.language);
    formData.append("timezone", data.timezone);
    formData.append("referrer", data.referrer);
    formData.append("currentPage", data.currentPage);
    formData.append("sessionId", data.sessionId);
    formData.append("userAgent", data.userAgent.substring(0, 100)); // Limit length

    await fetch(
      "https://script.google.com/macros/s/AKfycbx_5H7euCkpYZ6Ozimb3aP2kr9vizl2MDTD9YGX3qpIBklOg6x0_wXMP6gKeXg8gXvLkg/exec",
      {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        body: formData,
      },
    );

    // With no-cors mode, we can't read the response, but we assume success
    console.log("User analytics data sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending user analytics:", error);
    return false;
  }
};

/**
 * Track page view
 */
export const trackPageView = () => {
  const data = collectUserData();
  if (data) {
    sendUserDataToSheets(data);
  }
};

/**
 * Initialize analytics (call this after consent)
 */
export const initializeAnalytics = () => {
  const consent = localStorage.getItem("cookieConsent");
  if (consent === "accepted") {
    // Track initial page view
    trackPageView();

    // Track page views on navigation (for React Router)
    window.addEventListener("popstate", () => {
      setTimeout(trackPageView, 500);
    });
  }
};
