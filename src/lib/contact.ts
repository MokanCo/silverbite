import { services } from "@/content/services";

export const budgetOptions = [
  "Not sure yet",
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
] as const;

export const serviceOptions = services.map((service) => service.title);

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactPayload): FieldErrors {
  const errors: FieldErrors = {};

  if (input.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }

  if (!emailPattern.test(input.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (input.phone.trim()) {
    const digits = input.phone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) {
      errors.phone = "Enter a phone number we can dial, or leave it blank.";
    }
  }

  if (!serviceOptions.includes(input.service)) {
    errors.service = "Select a service.";
  }

  if (!budgetOptions.includes(input.budget as (typeof budgetOptions)[number])) {
    errors.budget = "Select a budget range.";
  }

  if (input.message.trim().length < 20) {
    errors.message = "Describe the project in at least a few sentences.";
  }

  return errors;
}
