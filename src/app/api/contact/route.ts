import { NextResponse } from "next/server";
import { budgetOptions, serviceOptions, validateContact, type ContactPayload } from "@/lib/contact";

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let raw: unknown;
  try {
    const text = await request.text();
    if (text.length > 20_000) {
      return NextResponse.json({ ok: false, error: "Message is too large." }, { status: 413 });
    }
    raw = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid message." }, { status: 400 });
  }

  if (!raw || typeof raw !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid message." }, { status: 400 });
  }

  const body = raw as Record<string, unknown>;
  if (typeof body.company_website === "string" && body.company_website.trim()) {
    return NextResponse.json({ ok: false, error: "Message could not be sent." }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: clean(body.name, 120),
    email: clean(body.email, 180),
    company: clean(body.company, 160),
    phone: clean(body.phone, 40),
    service: clean(body.service, 120),
    budget: clean(body.budget, 80),
    message: clean(body.message, 4000),
  };

  const errors = validateContact(payload);
  if (!serviceOptions.includes(payload.service)) errors.service = "Select a service.";
  if (!budgetOptions.includes(payload.budget as (typeof budgetOptions)[number])) {
    errors.budget = "Select a budget range.";
  }
  if (Object.keys(errors).length) {
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", errors },
      { status: 422 },
    );
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    return NextResponse.json(
      {
        ok: false,
        error: "Message delivery is not connected yet. Add CONTACT_WEBHOOK_URL to receive inquiries.",
      },
      { status: 503 },
    );
  }

  let url: URL;
  try {
    url = new URL(endpoint);
  } catch {
    return NextResponse.json({ ok: false, error: "The contact endpoint is misconfigured." }, { status: 500 });
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    return NextResponse.json({ ok: false, error: "The contact endpoint is misconfigured." }, { status: 500 });
  }

  try {
    const delivered = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...payload,
        source: "silverbite.website",
        submittedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(12000),
      cache: "no-store",
    });

    if (!delivered.ok) {
      return NextResponse.json(
        { ok: false, error: "We could not deliver your message. Please try again shortly." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "We could not deliver your message. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
