import { ImageResponse } from "next/og";

export const alt = "Temitope Aiyegbusi — Product Designer X Agentic Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand dot-cluster mark (a diamond of dots), recreated with flex.
function DotMark() {
  const dot = (opacity: number) => (
    <div
      style={{
        width: 22,
        height: 22,
        borderRadius: 22,
        background: "#2f5bff",
        opacity,
      }}
    />
  );
  const row = (opacities: number[]) => (
    <div style={{ display: "flex", gap: 14 }}>
      {opacities.map((o, i) => (
        <div key={i} style={{ display: "flex" }}>
          {dot(o)}
        </div>
      ))}
    </div>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {row([0.25, 1, 0.25])}
      {row([1, 1, 1])}
      {row([0.25, 1, 0.25])}
    </div>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f4f4",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <DotMark />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 600,
              color: "#171717",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Temitope Aiyegbusi
          </div>
          <div style={{ fontSize: 38, color: "#737373" }}>
            Product Designer × Agentic Engineer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a3a3a3",
          }}
        >
          Building beautiful software that people love to use.
        </div>
      </div>
    ),
    { ...size }
  );
}
