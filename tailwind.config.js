/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hc: {
          bg: "#f6f7fb",
          card: "#ffffff",
          pill: "#e2e8f0",
          slate: "#0f172a",      // text-hc-slate
          subtle: "#94a3b8",     // text-hc-subtle
          primary: "#5b6ef5",
          primaryDark: "#3e4ad8",
          deep: "#2a2e6f",
          violet: "#8b5cf6",
          success: "#29cc97",
          warning: "#ffb020",
          danger: "#ef4444"
        }
      },
      boxShadow: {
        soft: "0 8px 24px rgba(15, 23, 42, 0.06)",
        pill: "0 6px 16px rgba(91, 110, 245, 0.25)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}
