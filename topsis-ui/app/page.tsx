"use client";

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
    alert(data.message || data.error);
  }

  return (
    <div style={styles.container}>
      <h2>TOPSIS Decision Tool</h2>

      <form onSubmit={submitForm} style={styles.form}>
        <input type="file" name="file" required />

        <input
          type="text"
          name="weights"
          placeholder="Weights: 1,1,1,1"
          required
        />

        <input
          type="text"
          name="impacts"
          placeholder="Impacts: +,+,-,+"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "320px",
    margin: "120px auto",
    textAlign: "center",
    fontFamily: "Arial"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }
};
