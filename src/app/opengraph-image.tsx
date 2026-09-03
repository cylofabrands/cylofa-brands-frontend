import { ImageResponse } from "next/og";
import { SITE } from "@/lib/seo";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111827",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "22px",
              height: "56px",
              background: "#dc2626",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              color: "#ffffff",
              fontSize: "34px",
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            Cylofa Brands
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            Corporate Branding, Signage &amp;
          </div>
          <div
            style={{
              color: "#f87171",
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            Office Supplies
          </div>
        </div>

        <div
          style={{
            color: "#9ca3af",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          Ruiru Town, Kiambu · Serving businesses across Kenya · cylofabrands.co.ke
        </div>
      </div>
    ),
    { ...size },
  );
}
