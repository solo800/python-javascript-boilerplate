from flask import jsonify

def handle_api_test(app):
    """Handle test connection endpoint"""
    return jsonify({
        'message': 'Backend connection successful!',
        'status': 'connected',
        'backend': 'Python Flask'
    })