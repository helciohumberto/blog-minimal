"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title={dark ? "Switch to light" : "Switch to dark"}
      style={{
        background: "none",
        border: "1px solid var(--border)",
        color: "var(--fg)",
        cursor: "pointer",
        padding: "4px 8px",
        fontFamily: "inherit",
        fontSize: "0.75rem",
        letterSpacing: "0.05em",
        borderRadius: "3px",
        transition: "opacity 0.15s",
      }}
    >
      {dark ? "◑ light" : "◐ dark"}
    </button>
  );
}
