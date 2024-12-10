/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./templates/**/*.html", "./static/**/*.js"],
    darkMode: "class",
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: "100ch",
                        h2: {
                            marginBottom: "1rem",
                            fontSize: "1.75rem",
                            color: "#1f2937",
                        },
                        "> div > div": {
                            marginBottom: "1.5rem",
                        },
                        color: "#374151",
                        strong: {
                            color: "#111827",
                        },
                        a: {
                            color: "#2563eb",
                        },
                        code: {
                            color: "#ef4444",
                            backgroundColor: "#fee2e2",
                            padding: "0.2em 0.4em",
                            borderRadius: "0.25rem",
                            fontWeight: "400",
                            "&::before": { content: "none" },
                            "&::after": { content: "none" },
                        },
                        pre: {
                            backgroundColor: "transparent",
                            padding: "0",
                            lineHeight: "1.5",
                            marginTop: "1.5em",
                            marginBottom: "1.5em",
                            borderRadius: "0.5rem",
                            overflow: "hidden",
                        },
                        "pre code": {
                            backgroundColor: "transparent",
                            borderWidth: "0",
                            borderRadius: "0",
                            padding: "0",
                            fontWeight: "400",
                            color: "#636b7b",
                            fontSize: "0.875em",
                            lineHeight: "1.7142857",
                            fontFamily:
                                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                            "&::before": { content: "none" },
                            "&::after": { content: "none" },
                        },
                    },
                },
                dark: {
                    css: {
                        color: "#9ca3af",
                        '[class~="lead"]': { color: "#9ca3af" },
                        a: { color: "#60a5fa" },
                        strong: { color: "#f9fafb" },
                        "ul > li::before": { backgroundColor: "#6b7280" },
                        hr: { borderColor: "#374151" },
                        blockquote: {
                            color: "#9ca3af",
                            borderLeftColor: "#374151",
                        },
                        h1: { color: "#f9fafb" },
                        h2: { color: "#f9fafb" },
                        h3: { color: "#f9fafb" },
                        h4: { color: "#f9fafb" },
                        code: {
                            color: "#fca5a5",
                            backgroundColor: "rgba(239, 68, 68, 0.1)",
                        },
                        "pre code": {
                            backgroundColor: "transparent",
                            color: "#e5e7eb",
                        },
                        pre: {
                            backgroundColor: "#1f2937",
                            color: "#e5e7eb",
                        },
                        thead: { color: "#f9fafb" },
                        "tbody tr": { borderBottomColor: "#374151" },
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
