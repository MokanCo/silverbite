import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#090B10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", position: "relative", width: 24, height: 24 }}>
          <div
            style={{
              width: 18,
              height: 18,
              marginTop: 5,
              marginLeft: 1,
              borderRadius: 999,
              border: "3px solid #C7CDD6",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 1,
              top: 1,
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#090B10",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 4,
              height: 4,
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
