from handlers.api_test_handler import handle_api_test

def configure_routes(app):
    @app.route('/api-test', methods=['GET'])
    def api_test():
        return handle_api_test(app)