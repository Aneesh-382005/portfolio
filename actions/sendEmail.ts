"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "aneesh.grover03@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    console.error("Error sending email (attempt 1):", error);
    // Retry once if it fails (often fixes cold start suspension issues)
    try {
      data = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "aneesh.grover03@gmail.com",
        subject: "Message from contact form",
        replyTo: senderEmail as string,
        react: React.createElement(ContactFormEmail, {
          message: message as string,
          senderEmail: senderEmail as string,
        }),
      });
    } catch (retryError: unknown) {
      console.error("Error sending email (attempt 2):", retryError);
      return {
        error: getErrorMessage(retryError),
      };
    }
  }

  return {
    data,
  };
};