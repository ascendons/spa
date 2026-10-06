const LEAD_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbx_5H7euCkpYZ6Ozimb3aP2kr9vizl2MDTD9YGX3qpIBklOg6x0_wXMP6gKeXg8gXvLkg/exec";

export type SubmitStatus = "idle" | "sending" | "success" | "error";

// Posts a form to the Google Apps Script endpoint shared by all lead forms.
export const submitLead = async (body: FormData): Promise<boolean> => {
  try {
    const response = await fetch(LEAD_ENDPOINT, { method: "POST", body });
    return response.ok;
  } catch (error) {
    console.error("Lead submission failed:", error);
    return false;
  }
};
