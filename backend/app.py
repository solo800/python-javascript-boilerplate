from flask import Flask
from flask_cors import CORS
from routes import configure_routes
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

configure_routes(app)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)