"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#090B10", color: "#F4F6F8", fontFamily: "sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem" }}>
          <div style={{ maxWidth: 520 }}>
            <p style={{ letterSpacing: "0.18em", textTransform: "uppercase", fontSize: 12, color: "#C7CDD6" }}>
              Silverbite Technologies
            </p>
            <h1 style={{ fontSize: "2.4rem", letterSpacing: "-0.04em", margin: "0.75rem 0" }}>Something went wrong.</h1>
            <p style={{ color: "#C7CDD6", lineHeight: 1.6 }}>
              The page could not be rendered. You can try again, or come back in a moment.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                marginTop: "1.5rem",
                background: "#00D5FF",
                color: "#090B10",
                border: 0,
                borderRadius: 999,
                padding: "0.8rem 1.2rem",
                fontWeight: 600,
              }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
