import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import img02 from "../images/bhole.png";
import img03 from "../images/blackline.png";
import img04 from "../images/github.png";

/* ─── Inline styles as a JS object map ─── */
const S = {
  root: {
    minHeight: "100vh",
    background: "#07090f",
    color: "#e8eaf0",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  hero: {
    width: "100%",
    maxWidth: 720,
    padding: "72px 24px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },

  logoWrap: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  glowRing: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0) 70%)",
    animation: "pulse 3s ease-in-out infinite",
    pointerEvents: "none",
  },

  logoImg: {
    width: 90,
    height: 90,
    objectFit: "contain",
    position: "relative",
    filter: "drop-shadow(0 0 18px rgba(99,102,241,0.45))",
    animation: "floatY 4s ease-in-out infinite",
  },

  siteTitle: {
    fontSize: 54,
    fontWeight: 700,
    letterSpacing: "-0.5px",
    background:
      "linear-gradient(135deg, #a5b4fc 0%, #818cf8 50%, #6366f1 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: 0,
    lineHeight: 1.1,
  },

  tagline: {
    fontSize: 13,
    color: "#6b7280",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    margin: 0,
    fontWeight: 400,
  },

  /* Search form */
  form: {
    width: "100%",
    maxWidth: 680,
    padding: "0 24px",
    display: "flex",
    gap: 10,
    alignItems: "stretch",
  },

  inputWrap: {
    flex: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  searchIcon: {
    position: "absolute",
    left: 16,
    color: "#4b5563",
    pointerEvents: "none",
    fontSize: 16,
    lineHeight: 1,
  },

  input: {
    width: "100%",
    height: 50,
    background: "#111827",
    border: "1.5px solid #1f2937",
    borderRadius: 12,
    color: "#e8eaf0",
    fontSize: 15,
    padding: "0 20px 0 44px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },

  btn: {
    height: 50,
    padding: "0 28px",
    background: "linear-gradient(135deg, #6366f1, #818cf8)",
    border: "none",
    borderRadius: 12,
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer",
    letterSpacing: "0.03em",
    transition: "opacity 0.2s, transform 0.15s",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },

  divider: {
    width: "100%",
    maxWidth: 680,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, #1f2937 20%, #1f2937 80%, transparent)",
    margin: "32px 24px 0",
  },

  results: {
    width: "100%",
    maxWidth: 680,
    padding: "24px 24px 48px",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },

  resultsMeta: {
    fontSize: 16,
    color: "#6b737d",
    marginBottom: 12,
    fontWeight: 600,
    letterSpacing: "0.04em",
  },

  card: {
    background: "#0d1117",
    border: "1px solid #1a2234",
    borderRadius: 14,
    padding: "20px 22px",
    marginBottom: 12,
    transition: "border-color 0.2s, background 0.2s",
    cursor: "default",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: "#c7d2fe",
    margin: "0 0 6px",
    lineHeight: 1.4,
  },

  cardUrl: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    color: "#6366f1",
    textDecoration: "none",
    marginBottom: 10,
    letterSpacing: "0.02em",
    transition: "color 0.15s",
    wordBreak: "break-all",
    fontFamily: "monospace",
    opacity: 0.85,
  },

  cardDesc: {
    fontSize: 14,
    color: "#9ca3af",
    lineHeight: 1.65,
    margin: 0,
  },

  loadingWrap: {
    width: "100%",
    maxWidth: 680,
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  skeleton: {
    background: "#111827",
    borderRadius: 14,
    padding: 22,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    animation: "shimmer 1.4s ease-in-out infinite",
  },

  skBar: (w, h = 12) => ({
    height: h,
    width: w,
    background: "#1f2937",
    borderRadius: 6,
  }),

  footer: {
    marginTop: "auto",
    width: "100%",
    borderTop: "1px solid #111827",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 14,
  },

  footerRow: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  footerLink: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    color: "#4b5563",
    textDecoration: "none",
    fontSize: 13,
    transition: "color 0.15s",
  },

  footerContact: {
    fontSize: 13,
    color: "#4a5a72",
    display: "flex",
    alignItems: "center",
    gap: 6,
  },

  copyright: {
    fontSize: 11,
    color: "#4a4aae",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  gitImg: { width: 14, height: 14, opacity: 0.6 },
};

/* ─── Keyframe injection (once) ── */

const injectKeyframes = () => {
  if (document.getElementById("bh-kf")) return;
  const style = document.createElement("style");
  style.id = "bh-kf";
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(1.18); opacity: 1; }
    }
    @keyframes floatY {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .bh-input:focus {
      border-color: #4f46e5 !important;
      box-shadow: 0 0 0 3px rgba(99,102,241,0.15) !important;
    }
    .bh-btn:hover { opacity: 0.88; transform: translateY(-1px); }
    .bh-btn:active { transform: scale(0.97); }
    .bh-btn:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }

    .bh-card:hover {
      border-color: #827ef9 !important;
      background: #0f0f20 !important;
    }
    .bh-card {
      animation: fadeSlideIn 0.35s ease both;
    }
    .bh-url:hover { color: #a5b4fc !important; opacity: 1 !important; }
    .bh-footer-link:hover { color: #9ca3af !important; }
  `;
  document.head.appendChild(style);
};

/* ── Skeleton loader ─*/
function SkeletonCards() {
  return (
    <div style={S.loadingWrap}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ ...S.skeleton, animationDelay: `${i * 0.15}s` }}>
          <div style={S.skBar("55%", 14)} />
          <div style={S.skBar("32%", 10)} />
          <div style={S.skBar("90%", 11)} />
          <div style={S.skBar("75%", 11)} />
        </div>
      ))}
    </div>
  );
}

function ResultCard({ item, delay, onCrawl }) {
  return (
    <div className="bh-card" style={{ ...S.card, animationDelay: `${delay}s` }}>
      <h3 style={S.cardTitle}>{item.Title}</h3>
      <a
        href={item.Url}
        target="_blank"
        rel="noopener noreferrer"
        className="bh-url"
        style={S.cardUrl}
        onClick={() => onCrawl(item.Url)}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M1 9L9 1M9 1H3M9 1V7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {item.Url}
      </a>
      <p style={S.cardDesc}>{item.Description}</p>
    </div>
  );
}

export default function SE() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    injectKeyframes();
    inputRef.current?.focus();
  }, []);

  async function submit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    setData([]);
    try {
      const response = await axios.get(
        "https://blackhole-search-engine-wnt6.onrender.com/search",
        { params: { name: query } },
      );
      if (response.data === "fail") {
        setData([]);
      } else {
        setData(response.data);
      }
    } catch (err) {
      console.error("Error:", err);
    }
    setLoading(false);
  }

  const crawl = async (url) => {
    if (!url) return;
    try {
      await axios.post(
        "https://blackhole-search-engine-wnt6.onrender.com/crawl",
        { url },
      );
    } catch (error) {
      console.log("Crawling error at client side", error.message);
    }
  };

  return (
    <div style={S.root}>
      <section style={S.hero}>
        <div style={S.logoWrap}>
          <div style={S.glowRing} />
          <img src={img02} alt="Blackhole logo" style={S.logoImg} />
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={S.siteTitle}>Blackhole</h1>
          <p style={S.tagline}>Search the indexed universe</p>
        </div>
      </section>

      <form style={S.form} onSubmit={submit}>
        <div style={S.inputWrap}>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="bh-input"
            style={S.input}
            placeholder="Search anything …"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="bh-btn"
          style={S.btn}
          disabled={loading}
        >
          {loading ? "Searching…" : "Search"}
        </button>
      </form>

      {(loading || data.length > 0 || searched) && <div style={S.divider} />}

      {loading && <SkeletonCards />}

      {!loading && data.length > 0 && (
        <div style={S.results}>
          <p style={S.resultsMeta}>
            {data.length} result{data.length !== 1 ? "s" : ""} found
          </p>
          {data.map((item, i) => (
            <ResultCard
              key={item._id}
              item={item}
              delay={i * 0.06}
              onCrawl={crawl}
            />
          ))}
        </div>
      )}

      {!loading && searched && data.length === 0 && (
        <div
          style={{
            padding: "48px 24px",
            textAlign: "center",
            color: "#474f5b",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            style={{ marginBottom: 16, opacity: 0.4 }}
          >
            <circle cx="17" cy="17" r="12" stroke="#6366f1" strokeWidth="2" />
            <path
              d="M26 26L35 35"
              stroke="#6366f1"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 17h10M17 12v10"
              stroke="#6366f1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <p style={{ fontSize: 15, color: "#4b5563", margin: 0 }}>
            No results found. Try a different keyword.
          </p>
        </div>
      )}

      <footer style={S.footer}>
        <div style={S.footerRow}>
          <a
            href="https://github.com/mysteriork"
            target="_blank"
            rel="noopener noreferrer"
            className="bh-footer-link"
            style={S.footerLink}
          >
            <img
              src={img04}
              alt="GitHub"
              style={{ ...S.gitImg, filter: "invert(1) brightness(0.4)" }}
            />
            GitHub
          </a>
          <span style={S.footerContact}>✉ callmerachit145@gmail.com</span>
          <span style={S.footerContact}>📞 +123 456 7890</span>
        </div>
        <p style={S.copyright}>
          © {new Date().getFullYear()} Blackhole · All rights reserved
        </p>
      </footer>
    </div>
  );
}
