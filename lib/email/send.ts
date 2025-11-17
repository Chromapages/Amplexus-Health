interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface EmailResult {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<EmailResult> {
  const { name, email, phone, message } = data;

  // Check if Resend is configured
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    try {
      // Use Resend API
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Amplexus Health <noreply@amplexushealth.com>",
          to: ["hello@amplexushealth.com"], // Replace with actual contact email
          replyTo: email,
          subject: `New Appointment Request from ${name}`,
          html: `
            <h2>New Appointment Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      });

      if (response.ok) {
        return { success: true };
      } else {
        const errorData = await response.json();
        console.error("Resend API error:", errorData);
        return { success: false, error: "Failed to send via Resend" };
      }
    } catch (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Email service error" };
    }
  } else {
    // Development mode: log to console
    console.log("=== Contact Form Submission (Development Mode) ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);
    console.log("================================================");

    // Return success in development
    return { success: true };
  }
}
