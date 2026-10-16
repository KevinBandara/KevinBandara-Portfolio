import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Kevin Bandara — Full-Stack Software Developer, AI Systems Builder & Founder of Corvento Technologies";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const portraitBuffer = await readFile(
    join(process.cwd(), "public", "KevinPortrait.jpg")
  );
  const portraitBase64 = `data:image/jpeg;base64,${portraitBuffer.toString(
    "base64"
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#06070B",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(56, 189, 248, 0.22), transparent 45%), radial-gradient(circle at 85% 80%, rgba(129, 140, 248, 0.22), transparent 45%)",
          padding: "48px 56px",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Left Column: Branding, Headline, Ventures & Contact */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "720px",
            height: "534px",
            paddingRight: "28px",
          }}
        >
          {/* Top Status Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                backgroundColor: "rgba(56, 189, 248, 0.16)",
                border: "2px solid rgba(56, 189, 248, 0.55)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: 800,
                color: "#38BDF8",
              }}
            >
              KB
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 16px",
                borderRadius: "999px",
                backgroundColor: "rgba(16, 185, 129, 0.14)",
                border: "1px solid rgba(16, 185, 129, 0.45)",
                color: "#6EE7B7",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              OPEN TO SOFTWARE ENGINEERING & FULL-STACK ROLES
            </div>
          </div>

          {/* Main Name & Role */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: "66px",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              Kevin Bandara
            </div>
            <div
              style={{
                fontSize: "27px",
                fontWeight: 700,
                lineHeight: 1.28,
                color: "#38BDF8",
              }}
            >
              Full-Stack Software Developer, AI Systems Builder & Founder of
              Corvento Technologies
            </div>
            <div
              style={{
                fontSize: "18px",
                lineHeight: 1.45,
                color: "#CBD5E1",
              }}
            >
              Architecting production Next.js & AI/RAG platforms, Google Play
              Android apps, Telegram/Discord bots, and a 74,000+ subscriber
              digital media network.
            </div>
          </div>

          {/* Key Ecosystem Badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {[
              "DanumaAI (Web • Play Store • TG)",
              "MemoAI (206K+ Users)",
              "Quizzygram Senior Dev",
              "74K+ Media Network",
              "UCSC BIT",
            ].map((badge) => (
              <div
                key={badge}
                style={{
                  padding: "8px 14px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#E2E8F0",
                }}
              >
                {badge}
              </div>
            ))}
          </div>

          {/* Footer Domain & Direct Contact */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "16px",
              borderTop: "1px solid rgba(255, 255, 255, 0.14)",
              fontSize: "17px",
              fontWeight: 700,
              color: "#94A3B8",
            }}
          >
            <div style={{ color: "#38BDF8" }}>kevinbandara.is-a.dev</div>
            <div>Colombo, Sri Lanka</div>
            <div style={{ color: "#6EE7B7" }}>+94 71 851 1165</div>
          </div>
        </div>

        {/* Right Column: Portrait Card */}
        <div
          style={{
            width: "340px",
            height: "534px",
            borderRadius: "28px",
            padding: "10px",
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            border: "2px solid rgba(56, 189, 248, 0.45)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
          }}
        >
          <img
            src={portraitBase64}
            alt="Kevin Bandara"
            width={320}
            height={514}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
