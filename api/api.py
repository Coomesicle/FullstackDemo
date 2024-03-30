from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# dict to store Candy
candy = {}



# Uses put method to update BPM and get method to retrieve.
@app.route("/candy", methods=["POST", "GET", "DELETE"])
def get_candy():
    if request.method == "POST":
        new_data = request.get_json()
        if ("Name" in new_data and "Candy" in new_data):
            candy[new_data["Name"]] = new_data["Candy"]
            return jsonify({"message": "Candy updated successfully"}), 200
        return jsonify({"error": "JSON not given in correct format, use \"Candy\" as key."})
    
    if request.method == "GET":
        if candy is not None:
            return jsonify(candy), 200
        return jsonify({'error': 'Candy currently empty.'}), 400

    if request.method == "DELETE":
        new_data = request.get_json()
        if ("Name" in new_data):
            if new_data["Name"] in candy:
                del candy[new_data["Name"]]
                return jsonify({"message": "Candy deleted successfully"}), 200
            return jsonify({"error": "Candy not found."})
    return jsonify({"message":  "Not valid HTTP method."}), 400


if __name__ == "__main__":
    app.run(debug=True)