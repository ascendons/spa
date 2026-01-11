# Google Apps Script Update for Cookie Analytics

## Overview

To store cookie/analytics data in Google Sheets, you need to update your existing Google Apps Script to handle analytics data.

## Step 1: Open Your Google Apps Script

1. Go to: https://script.google.com
2. Find your existing script (the one with URL: `AKfycbx_5H7euCkpYZ6Ozimb3aP2kr9vizl2MDTD9YGX3qpIBklOg6x0_wXMP6gKeXg8gXvLkg`)
3. Or create a new script if you prefer

## Step 2: Update the Code

Replace your existing `doPost` function with this updated version:

```javascript
function doPost(e) {
  try {
    // Check if it's analytics data (has "type" parameter) or form data
    const requestType = e.parameter.type;

    if (requestType === "analytics") {
      return handleAnalyticsData(e.parameter);
    } else {
      return handleFormData(e);
    }
  } catch (error) {
    Logger.log("Error in doPost: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle analytics/cookie data (receives FormData parameters)
function handleAnalyticsData(params) {
  try {
    // Replace with your Google Sheet ID
    const SHEET_ID = "YOUR_SHEET_ID_HERE";
    const SHEET_NAME = "Analytics"; // Or "Cookie Data"

    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);

      // Add headers
      const headers = [
        "Timestamp",
        "Consent Status",
        "Consent Date",
        "Browser",
        "Browser Version",
        "OS",
        "Device Type",
        "Screen Resolution",
        "Language",
        "Timezone",
        "Referrer",
        "Current Page",
        "Session ID",
        "User Agent (Partial)",
      ];
      sheet.appendRow(headers);

      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("#ffffff");
    }

    // Anonymize IP (if provided) - only keep first 2 octets
    // Note: IP might come from server-side processing

    // Append data (params come from FormData)
    const row = [
      params.timestamp || new Date().toISOString(),
      params.consent || "unknown",
      params.consentDate || "unknown",
      params.browser || "Unknown",
      params.browserVersion || "Unknown",
      params.os || "Unknown",
      params.deviceType || "Unknown",
      params.screenResolution || "Unknown",
      params.language || "Unknown",
      params.timezone || "Unknown",
      params.referrer || "direct",
      params.currentPage || "unknown",
      params.sessionId || "unknown",
      (params.userAgent || "").substring(0, 100), // Limit length
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Analytics data saved",
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log("Error handling analytics: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Keep your existing form handling function
function handleFormData(e) {
  try {
    // Your existing form submission code
    const SHEET_ID = "YOUR_FORM_SHEET_ID_HERE";
    const SHEET_NAME = "Form Responses"; // Or your existing sheet name

    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.getActiveSheet(); // Fallback to active sheet
    }

    // Parse form data
    const formData = e.parameter;
    const row = [
      new Date(),
      formData.name || "",
      formData.email || "",
      formData.company || "",
      formData.phone || "",
      formData.subject || "",
      formData.message || formData.problem || "",
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Form data saved",
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log("Error handling form: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Get Your Google Sheet ID

1. Create a new Google Sheet (or use existing one)
2. From the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
3. Copy the `SHEET_ID_HERE` part
4. Replace `YOUR_SHEET_ID_HERE` in the script with your actual Sheet ID

## Step 4: Set Permissions

1. In Google Apps Script, go to: **Project Settings** (gear icon)
2. Enable: **"Show 'appsscript.json' manifest file in editor"**
3. Go to: **Triggers** (clock icon)
4. Add trigger:
   - Function: `doPost`
   - Event source: **From web app**
   - Event type: **On form submit** (or manual)
5. **Save** and **Deploy** → **New deployment**
6. Set as: **Web app**
7. Execute as: **Me**
8. Who has access: **Anyone** (for public form)

## Step 5: Update Your Google Apps Script URL

If you create a new deployment, you'll get a new URL. Update it in:

- `/src/utils/userAnalytics.ts` (line with the fetch URL)

## Privacy & Compliance Notes

✅ **What this collects:**

- Browser/device info (anonymized)
- Page visits and navigation
- Referrer information
- Screen resolution
- Timezone and language
- Session ID (temporary)

❌ **What this does NOT collect:**

- Personal identifiable information (PII) without explicit consent
- Passwords or sensitive data
- Full IP addresses (anonymized on server if needed)
- Credit card or payment info

⚠️ **Important:**

- Users must consent before data collection
- Data is stored securely in Google Sheets
- Users can revoke consent by clearing cookies
- Consider adding a Privacy Policy page
- Ensure GDPR/CCPA compliance based on your location

## Testing

1. Clear localStorage: `localStorage.clear()` in browser console
2. Refresh page - you should see cookie banner
3. Click "Accept"
4. Check your Google Sheet - data should appear in "Analytics" sheet
5. Navigate between pages - each page view should create a new row

## Optional: Server-Side IP Anonymization

For better privacy, you can add IP anonymization on the server:

```javascript
function anonymizeIP(ip) {
  if (!ip) return "unknown";
  const parts = ip.split(".");
  if (parts.length === 4) {
    return parts[0] + "." + parts[1] + ".xxx.xxx";
  }
  return "unknown";
}
```

Call this in `handleAnalyticsData` before saving.
