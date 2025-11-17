"use client";

import { useState, FormEvent } from "react";
import { FormField } from "@/components/molecules/FormField";
import { Input } from "@/components/atoms/Input";
import { Textarea } from "@/components/atoms/Textarea";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { track } from "@/lib/analytics";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const AppointmentForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    track("contact_submit_attempt", {
      valid: validateForm(),
      error_count: Object.keys(errors).length,
    });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        track("contact_submit_success", {
          source_page: "contact",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Full Name"
        htmlFor="name"
        required
        error={errors.name}
      >
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField
        label="Email Address"
        htmlFor="email"
        required
        error={errors.email}
      >
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField
        label="Phone Number"
        htmlFor="phone"
        required
        error={errors.phone}
        helper="We'll use this to schedule your appointment"
      >
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          error={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : "phone-helper"}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField
        label="Message"
        htmlFor="message"
        required
        error={errors.message}
        helper="Tell us a bit about what brings you here and any preferences for scheduling"
      >
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          error={!!errors.message}
          aria-describedby={errors.message ? "message-error" : "message-helper"}
          disabled={isSubmitting}
          rows={5}
        />
      </FormField>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Request Appointment"}
      </Button>

      {submitStatus === "success" && (
        <div
          role="alert"
          className="p-4 bg-success/10 border border-success/20 rounded-lg"
        >
          <Text className="text-success">
            <strong>Thank you!</strong> We've received your request and will be in touch soon.
          </Text>
        </div>
      )}

      {submitStatus === "error" && (
        <div
          role="alert"
          className="p-4 bg-error/10 border border-error/20 rounded-lg"
        >
          <Text className="text-error">
            <strong>Something went wrong.</strong> Please try again or contact us directly.
          </Text>
        </div>
      )}
    </form>
  );
};
