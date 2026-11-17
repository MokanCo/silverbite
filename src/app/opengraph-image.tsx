import { ImageResponse } from "next/og";

export const alt = "Silverbite Technologies — Big Ideas Deserve Powerful Technology.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#090B10",
          color: "#F4F6F8",
          padding: "72px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "70%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ width: 56, height: 4, background: "#00D5FF" }} />
            <div style={{ marginTop: 28, fontSize: 22, letterSpacing: 4, color: "#C7CDD6" }}>SILVERBITE TECHNOLOGIES</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05 }}>
            <div>Big Ideas Deserve</div>
            <div style={{ color: "#00D5FF" }}>Powerful Technology.</div>
          </div>
          <div style={{ fontSize: 24, color: "#C7CDD6", maxWidth: 640 }}>We build what moves your business forward.</div>
        </div>
        <div style={{ display: "flex", position: "relative", width: 280, height: 280, marginTop: 80 }}>
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 999,
              border: "18px solid #C7CDD6",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 20,
              top: 10,
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#090B10",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 8,
              top: 0,
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#00D5FF",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
