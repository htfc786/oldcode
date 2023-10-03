def init(app):
    @app.route("/lt")
    def index():
        return render_template("lt.html")
