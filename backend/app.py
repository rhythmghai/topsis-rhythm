from flask import Flask, request, jsonify
from flask_cors import CORS
import os, re, smtplib
from email.message import EmailMessage
from topsis_rhythm_102303707.engine import run_topsis

app = Flask(__name__)
CORS(app)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

EMAIL_REGEX = r'^[^@]+@[^@]+\.[^@]+$'

EMAIL_USER = os.environ.get("EMAIL_USER")
EMAIL_PASS = os.environ.get("EMAIL_PASS")

def send_email(to_email, file_path):
    if not EMAIL_USER or not EMAIL_PASS:
        raise Exception("Email credentials not configured on server")

    msg = EmailMessage()
    msg["Subject"] = "Your TOPSIS Result"
    msg["From"] = EMAIL_USER
    msg["To"] = to_email
    msg.set_content("Hi!\n\nYour TOPSIS result is attached.\n\nThanks for using the TOPSIS Decision Tool!")

    with open(file_path, "rb") as f:
        msg.add_attachment(
            f.read(),
            maintype="application",
            subtype="octet-stream",
            filename="result.csv"
        )

    server = smtplib.SMTP_SSL("smtp.gmail.com", 465, timeout=15)
    server.login(EMAIL_USER, EMAIL_PASS)
    server.send_message(msg)
    server.quit()

@app.route("/topsis", methods=["POST"])
def topsis_api():
    print("TOPSIS endpoint hit")
    if "file" not in request.files:
        return jsonify({"error": "File missing"}), 400

    weights = request.form.get("weights")
    impacts = request.form.get("impacts")
    email = request.form.get("email")

    if not re.match(EMAIL_REGEX, email):
        return jsonify({"error": "Invalid email format"}), 400

    file = request.files["file"]
    input_path = os.path.join(UPLOAD_DIR, file.filename)
    output_path = os.path.join(UPLOAD_DIR, "result.csv")

    file.save(input_path)

    try:
        print("Running TOPSIS...")
        run_topsis(input_path, weights, impacts, output_path)
        print("Sending email...")
        send_email(email, output_path)
        print("Email sent")

    except Exception as e:
        return jsonify({"error": str(e)}), 400

    return jsonify({"message": "TOPSIS completed and emailed successfully!"})
