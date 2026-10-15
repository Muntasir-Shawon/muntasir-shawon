import emailjs from "@emailjs/browser";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  botcheck?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

/**
 * Sends a message transmission using configured provider (Web3Forms or EmailJS).
 */
export async function sendTransmission(payload: ContactPayload): Promise<ContactResponse> {
  // Check for honeypot bot trap
  if (payload.botcheck) {
    return { success: true, message: "Transmission received." };
  }

  const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // 1. Try Web3Forms if access key is available
  if (web3formsKey && web3formsKey !== "YOUR_WEB3FORMS_ACCESS_KEY" && web3formsKey.trim().length > 0) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: payload.name,
          email: payload.email,
          message: payload.message,
          subject: `🦇 WayneTech Intel Transmission from ${payload.name}`,
          from_name: `${payload.name} (WayneTech Portfolio)`,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        return {
          success: true,
          message: "Transmission received! Batcomputer uplink established.",
        };
      } else {
        return {
          success: false,
          message: data.message || "Bat-uplink encountered a transmission anomaly.",
        };
      }
    } catch (err: any) {
      console.error("Web3Forms transmission error:", err);
      return {
        success: false,
        message: "Network anomaly detected during signal broadcast.",
      };
    }
  }

  // 2. Try EmailJS if configured
  if (
    emailjsServiceId &&
    emailjsTemplateId &&
    emailjsPublicKey &&
    emailjsServiceId !== "YOUR_SERVICE_ID" &&
    emailjsPublicKey !== "YOUR_PUBLIC_KEY"
  ) {
    try {
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          name: payload.name,
          from_name: payload.name,
          email: payload.email,
          from_email: payload.email,
          message: payload.message,
          to_email: "muntasir.shawon78@gmail.com",
        },
        emailjsPublicKey
      );

      return {
        success: true,
        message: "Transmission received! Batcomputer uplink established.",
      };
    } catch (err: any) {
      console.error("EmailJS transmission error:", err);
      return {
        success: false,
        message: "EmailJS encryption signal failed.",
      };
    }
  }

  return {
    success: false,
    message: "Access Key missing. Please set VITE_WEB3FORMS_ACCESS_KEY in your .env file.",
  };
}
