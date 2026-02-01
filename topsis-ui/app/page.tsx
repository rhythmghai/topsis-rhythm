"use client";

import React from "react";

export default function Home() {
  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://topsis-rhythm.onrender.com", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    alert(data.message || "Something went wrong. Please try again.");
  }

  return (
    <div style={styles.page}>
      <div style={styles.glow}></div>

      <div style={styles.card}>
        <h1 style={styles.title}>TOPSIS Decision Tool</h1>
        <p style={styles.subtitle}>
          Smart multi-criteria ranking • Results delivered to your inbox
        </p>

        <form onSubmit={submitForm} style={styles.form}>
          <label style={styles.label}>Upload CSV</label>
          <input type="file" name="file" required style={styles.inputFile} />

          <label style={styles.label}>Weights</label>
          <input
            type="text"
            name="weights"
            placeholder="1,1,1,1"
            required
            style={styles.input}
          />

          <label style={styles.label}>Impacts</label>
          <input
            type="text"
            name="impacts"
            placeholder="+,+,-,+"
            required
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Run TOPSIS
          </button>
        </form>

        <p style={styles.footer}>
          Built by Rhythm • Cloud-powered decision engine
        </p>
      </div>
    </div>
  );
}

const styles: {
  page: React.CSSProperties;
  card: React.CSSProperties;
  glow: React.CSSProperties;
  title: React.CSSProperties;
  subtitle: React.CSSProperties;
  form: React.CSSProperties;
  label: React.CSSProperties;
  input: React.CSSProperties;
  inputFile: React.CSSProperties;
  button: React.CSSProperties;
  footer: React.CSSProperties;
} = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e1b4b, #312e81)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "relative",
    overflow: "hidden"
  },

  glow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent 70%)",
    filter: "blur(100px)",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)"
  },

  card: {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(18px)",
    borderRadius: "22px",
    padding: "36px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
    textAlign: "center",
    animation: "float 6s ease-in-out infinite"
  },

  title: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#e0e7ff",
    marginBottom: "8px",
    letterSpacing: "0.5px"
  },

  subtitle: {
    fontSize: "13px",
    color: "#c7d2fe",
    marginBottom: "26px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },

  label: {
    textAlign: "left",
    color: "#e0e7ff",
    fontSize: "12px",
    fontWeight: "bold"
  },

  input: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(15,23,42,0.6)",
    color: "#e0e7ff",
    outline: "none",
    fontSize: "14px",
    transition: "all 0.2s ease"
  },

  inputFile: {
    padding: "8px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(15,23,42,0.6)",
    color: "#e0e7ff",
    fontSize: "13px"
  },

  button: {
    marginTop: "18px",
    padding: "12px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #6366f1, #818cf8)",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(99,102,241,0.5)",
    transition: "all 0.2s ease"
  },

  footer: {
    marginTop: "22px",
    fontSize: "11px",
    color: "#c7d2fe"
  }
};


if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    button:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 15px 40px rgba(99,102,241,0.8);
    }

    input:focus {
      border-color: #818cf8;
      box-shadow: 0 0 0 2px rgba(129,140,248,0.4);
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
      100% { transform: translateY(0px); }
    }
  `;
  document.head.appendChild(style);
}
