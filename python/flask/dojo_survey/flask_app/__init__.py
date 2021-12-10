from flask import Flask, session  # session is used by flash
app = Flask(__name__)

app.secret_key = "whisper whisper hush hush paella"
