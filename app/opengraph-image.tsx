import { ImageResponse } from "next/og";

export const alt =
  "Brandon McCarthy portfolio with Workbench and Pulse project screens";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const siteUrl = "https://portfolio-coral-pi-56.vercel.app";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#090f1e",
        color: "white",
        padding: "50px 58px 42px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ color: "#a5b4fc", fontSize: 25, fontWeight: 700 }}>
          Brandon McCarthy
        </div>
        <div style={{ marginTop: 8, fontSize: 43, fontWeight: 700 }}>
          AI Solutions &amp; Implementation Engineer
        </div>
      </div>

      <div style={{ display: "flex", gap: 22, marginTop: 32 }}>
        <div
          style={{
            width: 532,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid #334155",
            borderRadius: 18,
            background: "#111827",
          }}
        >
          <img
            src={`${siteUrl}/projects/enterprise-workbench.png`}
            alt=""
            width={532}
            height={235}
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
          <div style={{ display: "flex", padding: "13px 18px", fontSize: 22 }}>
            Enterprise AI Implementation Workbench
          </div>
        </div>

        <div
          style={{
            width: 532,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid #334155",
            borderRadius: 18,
            background: "#111827",
          }}
        >
          <img
            src={`${siteUrl}/projects/pulse-recruiter-landing.png`}
            alt=""
            width={532}
            height={235}
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
          <div style={{ display: "flex", padding: "13px 18px", fontSize: 22 }}>
            Pulse
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 24,
          color: "#cbd5e1",
          fontSize: 21,
        }}
      >
        <div style={{ display: "flex" }}>314 automated tests in Pulse</div>
        <div style={{ display: "flex" }}>
          15 cases × 3 Workbench prompt versions
        </div>
      </div>
    </div>,
    size,
  );
}
