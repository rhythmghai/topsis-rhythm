"use client";

import React from "react";

export default function Home() {
  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://YOUR-RENDER-URL.onrender.com/topsis", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    alert(data.message || "Something went wrong. Please try again.");
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🌟 TOPSIS Decision Tool</h1>
        <p style={styles.subtitle}>
          Upload your dataset and get ranked results delivered to your email 📬
        </p>

        <form onSubmit={submitForm} style={styles.form}>
          <label style={styles.label}>Upload CSV File</label>
          <input type="file" name="file" required style={styles.inputFile} />

          <label style={styles.label}>Weights</label>
          <input
            type="text"
            name="weights"
            placeholder="Example: 1,1,1,1"
            required
            style={styles.input}
          />

          <label style={styles.label}>Impacts</label>
          <input
            type="text"
            name="impacts"
            placeholder="Example: +,+,-,+"
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
            🚀 Run TOPSIS & Send Email
          </button>
        </form>

        <p style={styles.footer}>
          Built by Rhythm • Full Stack TOPSIS SaaS 💙
        </p>
      </div>
    </div>
  );
}

const styles: {
  page: React.CSSProperties;
  card: React.CSSProperties;
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
    background:
      "linear-gradient(135deg, #667eea, #764ba2, #f7971e, #ffd200)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },
  card: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "32px",
    width: "100%",
    maxWidth: "380px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    textAlign: "center"
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "14px",
    color: "#f0f0f0",
    marginBottom: "25px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  label: {
    textAlign: "left",
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: "bold"
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "14px"
  },
  inputFile: {
    padding: "6px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ffffff",
    fontSize: "13px"
  },
  button: {
    marginTop: "15px",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #00f2fe, #4facfe)",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    transition: "transform 0.2s ease"
  },
  footer: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#eeeeee"
  }
};
