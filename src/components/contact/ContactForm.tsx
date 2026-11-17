"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { budgetOptions, serviceOptions, validateContact, type ContactPayload, type FieldErrors } from "@/lib/contact";
import { cn } from "@/lib/cn";

const empty: ContactPayload = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const fieldClass =
  "dark-field w-full border border-silver/25 bg-ice/[0.04] px-4 py-3 text-[15px] text-ice outline-none transition placeholder:text-silver focus:border-cyan";

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(empty);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, company_website: honeypot }),
      });
      const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string; errors?: FieldErrors } | null;
      if (!response.ok || !data?.ok) {
        setStatus("error");
        setFormError(data?.error || "The message could not be sent.");
        if (data?.errors) setErrors(data.errors);
        return;
      }
      setValues(empty);
      setStatus("success");
    } catch {
      setStatus("error");
      setFormError("The message could not be sent. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-silver/25 bg-ice/[0.04] p-8 sm:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">Delivered</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Your message was sent.</h3>
        <p className="mt-4 max-w-md text-silver">
          The inquiry reached the configured endpoint. We will review it and reply with next steps.
        </p>
        <button
          type="button"
          className="mt-8 text-sm font-semibold text-ice underline decoration-silver/40 underline-offset-4"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={status === "sending"} className="relative border border-silver/25 bg-titanium p-5 sm:p-8">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Company website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </label>
      </div>
      {formError ? (
        <p role="alert" className="mb-5 border border-bite bg-bite/10 px-4 py-3 text-sm text-ice">
          {formError}
        </p>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} required>
          <input className={fieldClass} autoComplete="name" value={values.name} onChange={(event) => update("name", event.target.value)} />
        </Field>
        <Field label="Email" error={errors.email} required>
          <input className={fieldClass} type="email" autoComplete="email" value={values.email} onChange={(event) => update("email", event.target.value)} />
        </Field>
        <Field label="Company" error={errors.company} hint="Optional">
          <input className={fieldClass} autoComplete="organization" value={values.company} onChange={(event) => update("company", event.target.value)} />
        </Field>
        <Field label="Phone" error={errors.phone} hint="Optional">
          <input className={fieldClass} type="tel" autoComplete="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} />
        </Field>
        <Field label="Service required" error={errors.service} required>
          <div className="relative">
            <select className={cn(fieldClass, "appearance-none pr-10")} value={values.service} onChange={(event) => update("service", event.target.value)}>
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <Caret />
          </div>
        </Field>
        <Field label="Project budget" error={errors.budget} required>
          <div className="relative">
            <select className={cn(fieldClass, "appearance-none pr-10")} value={values.budget} onChange={(event) => update("budget", event.target.value)}>
              <option value="">Select a range</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <Caret />
          </div>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Project description" error={errors.message} required>
            <textarea
              className={cn(fieldClass, "min-h-36 resize-y")}
              value={values.message}
              onChange={(event) => update("message", event.target.value)}
            />
          </Field>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" withArrow={status !== "sending"} disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Start Your Project"}
        </Button>
        <p className="text-xs leading-relaxed text-muted">We read every inquiry. A project starts only after scope is agreed.</p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline justify-between gap-3 text-sm text-silver">
        <span>
          {label}
          {required ? <span className="text-cyan"> *</span> : null}
        </span>
        {hint ? <span className="text-xs text-muted">{hint}</span> : null}
      </span>
      {children}
      {error ? (
        <span role="alert" className="mt-2 block border-l-2 border-bite pl-3 text-sm text-ice">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function Caret() {
  return (
    <svg viewBox="0 0 16 16" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-silver" aria-hidden>
      <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
