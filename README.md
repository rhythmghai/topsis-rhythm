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


## ✅ Verify Installation

### Command
```bash
topsis
Expected Output
Usage: topsis <InputFile.csv> <Weights> <Impacts> <OutputFile.csv>


⚙️ Backend (Local Setup)
Navigate to Backend Directory
cd backend
Install Dependencies
pip install -r requirements.txt
Start Server
gunicorn app:app
Backend Runs At
http://localhost:10000
🎨 Frontend (Local Setup)
Navigate to Frontend Directory
cd topsis-ui
Install Dependencies
npm install
Start Development Server
npm run dev
Frontend Runs At
http://localhost:3000
🧪 Usage
💻 CLI Usage
Command Format
topsis <InputFile.csv> <Weights> <Impacts> <OutputFile.csv>
Example
topsis data.csv "1,1,1,2" "+,+,-,+" result.csv
Output
TOPSIS Score
Rank of each alternative
🌐 Web Usage
Steps
Open the Frontend URL
Upload a CSV file
Enter:
Weights (comma-separated, e.g. 1,1,1,1)
Impacts (+ or -, e.g. +,+,-,+)
Email ID
Click Run TOPSIS
Receive result.csv via email 📬
📄 Input File Format
Rules
First column → Alternative Name
Remaining columns → Numeric Criteria Values Only
File must contain at least 3 columns
Example
Model,Price,Battery,Camera
A1,250,8,7
A2,300,9,8
A3,200,7,6
⚙️ Validation Rules
Number of weights = number of criteria
Number of impacts = number of criteria
Impacts must be either + or -
All criteria columns must be numeric
Email format must be valid
Input file must contain at least 3 columns
🔄 API Documentation
Endpoint
POST /topsis


