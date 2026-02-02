# 🌟 TOPSIS Full-Stack Decision Engine  
**By Rhythm Ghai (Roll No: 102303707)**

A **cloud-deployed, full-stack Multi-Criteria Decision Making (MCDM) platform** built using the **TOPSIS (Technique for Order Preference by Similarity to Ideal Solution)** algorithm.

This project allows users to:
- Run TOPSIS locally via a **CLI tool (PyPI package)**
- Upload datasets via a **web interface**
- Receive ranked results automatically via **email**
- Access a **cloud-hosted backend API**

---

## 🚀 Live Demo

- **Frontend (Vercel):**  
  👉 *https://topsis-rhythm-git-main-okay10.vercel.app*

- **Backend API (Render):**  
  👉 https://topsis-rhythm.onrender.com  
  👉 Test endpoint: `POST /topsis`

- **PyPI Package:**  
  👉 https://pypi.org/project/topsis-rhythm-102303707/

---

## 📌 What is TOPSIS?

**TOPSIS (Technique for Order Preference by Similarity to Ideal Solution)** is a Multi-Criteria Decision Making (MCDM) method that ranks alternatives based on their distance from:
- The **ideal solution (best case)**
- The **negative ideal solution (worst case)**

The best alternative is the one **closest to the ideal solution and farthest from the worst solution**.

---

## ✨ Features

- ✅ Python CLI Tool (PyPI Package)  
- ✅ Web-Based UI (Next.js + Vercel)  
- ✅ Flask Backend API (Render)  
- ✅ Automated Email Delivery of Results  
- ✅ Input Validation (weights, impacts, email format)  
- ✅ Supports both **cost (-)** and **benefit (+)** criteria  
- ✅ Generates ranked output CSV file  

---

## 🏗️ System Architecture
User
│
▼
Frontend (Next.js / Vercel)
│
▼
Backend API (Flask / Render)
│
├── Validate Input
├── Run TOPSIS Engine
├── Generate result.csv
└── Send Email (Gmail SMTP)
│
▼
User Inbox 📧

## 🛠️ Installation

### CLI (PyPI Package)

#### Install
```bash
pip install topsis-rhythm-102303707

# ⚙️ Local Setup Guide

---

## 🖥️ Backend (Local)

### Step 1 — Navigate to Backend
```bash
cd backend
```

### Step 2 — Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 3 — Run Server
```bash
gunicorn app:app
```

### Backend Runs At
```
http://localhost:10000
```

---

## 🌐 Frontend (Local)

### Step 1 — Navigate to Frontend
```bash
cd topsis-ui
```

### Step 2 — Install Dependencies
```bash
npm install
```

### Step 3 — Start Development Server
```bash
npm run dev
```

### Frontend Runs At
```
http://localhost:3000
```

---

# 🧪 Usage

---

## 📌 CLI Usage

### Command Format
```bash
topsis <InputFile.csv> <Weights> <Impacts> <OutputFile.csv>
```

### Example
```bash
topsis data.csv "1,1,1,2" "+,+,-,+" result.csv
```

---

## 📤 Output

The output file will contain:
- ✅ **TOPSIS Score**
- 🏆 **Rank of each alternative**

---

# 🌐 Web Usage

### Steps
1. Open the Frontend URL
2. Upload a CSV file
3. Enter:
   - **Weights** (comma-separated)  
     Example:
     ```
     1,1,1,1
     ```
   - **Impacts** (`+` or `-`)  
     Example:
     ```
     +,+,-,+
     ```
   - **Email ID**
4. Click **Run TOPSIS**
5. Receive `result.csv` via email 📬

---

# 📄 Input File Format

---

## 📏 Rules
- First column → **Alternative Name**
- Remaining columns → **Numeric Criteria Values Only**
- File must contain **at least 3 columns**

---

## 📊 Example CSV
```csv
Model,Price,Battery,Camera
A1,250,8,7
A2,300,9,8
A3,200,7,6
```

---

# ⚙️ Validation Rules

The system ensures:
- ✔️ Number of weights = Number of criteria
- ✔️ Number of impacts = Number of criteria
- ✔️ Impacts must be either `+` or `-`
- ✔️ All criteria columns must be numeric
- ✔️ Email format must be valid
- ✔️ Input file must contain at least 3 columns

---

# 🔄 API Documentation

---

## 📍 Endpoint
```http
POST /topsis
```

---

## 📥 Request (Multipart Form Data)

| Field   | Type   | Description                  |
|---------|--------|------------------------------|
| file    | File   | Input CSV file              |
| weights | String | Comma-separated weights    |
| impacts | String | Comma-separated impacts    |
| email   | String | Email ID                   |

---

## ✅ Success Response
```json
{
  "message": "TOPSIS completed and emailed successfully!"
}
```

---

## ❌ Error Response
```json
{
  "error": "Invalid email format"
}
```

---

# 🔐 Email Configuration (Backend)

This project uses **Gmail SMTP with App Passwords**

---

## 🌍 Required Environment Variables (Render)

| Key         | Description                          |
|------------|--------------------------------------|
| EMAIL_USER | Your Gmail address                  |
| EMAIL_PASS | 16-character Gmail App Password    |

---

## 🔑 Steps to Generate App Password

1. Enable **2-Step Verification** on Gmail
2. Go to:
   ```
   https://myaccount.google.com/apppasswords
   ```
3. Select:
   - App → Mail
   - Device → Mac
4. Generate password
5. Add credentials to **Render Environment Variables**

---

# ☁️ Deployment Guide

---

## 🚀 Frontend (Vercel)
- Framework: **Next.js (App Router)**
- Root Directory:
  ```
  topsis-ui
  ```
- Auto-deploy on GitHub push

---

## ⚙️ Backend (Render)
- Server: **Gunicorn + Flask**
- Root Directory:
  ```
  backend
  ```

### Build Command
```bash
pip install -r requirements.txt
```

### Start Command
```bash
gunicorn app:app
```

---

# 📦 Package Distribution

### Platform: **PyPI**

### Install via:
```bash
pip install topsis-rhythm-102303707
```

---

# 📈 Performance Notes

- 📁 Supports CSV files up to **~5MB**
- ⚡ Average response time: **1–5 seconds**
- 📧 Email delivery: **10–30 seconds**

---

# 🔒 Security Considerations

- 🔐 Email credentials stored using **environment variables**
- 🚫 No secrets committed to GitHub
- 🛡️ Input validation on all user fields
- 🌍 CORS enabled for frontend communication

---

# 🧠 Learning Outcomes

- 📦 Built and published a Python package to **PyPI**
- ⚙️ Designed and deployed a **Flask REST API**
- 📧 Implemented **SMTP-based email automation**
- ☁️ Deployed backend on **Render**
- 🌐 Built frontend using **Next.js**
- 🚀 Deployed frontend on **Vercel**
- 🔄 Implemented **Full-stack CI/CD workflow**
- 🐞 Debugged **production cloud issues**

---

# 🌟 Author

**Rhythm Ghai**  
Second-Year Computer Science Student  
Thapar Institute of Engineering & Technology  
Full Stack | ML | AI | Cloud | DevOps

---

# ⭐ Support

If you found this project useful:
- Give it a ⭐ on GitHub
- Share it with your peers
- Use it in your academic and real-world decision-making projects!

---
