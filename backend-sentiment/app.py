from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    review = data.get('review', '')
    review_lower = review.lower()
    if 'love' in review_lower:
        return jsonify({'sentiment': 'positive'})
    elif 'hate' in review_lower:
        return jsonify({'sentiment': 'negative'})
    else:
        return jsonify({'sentiment': 'neutral'})

if __name__ == '__main__':
    app.run(port=5000)

dealers = [
    {"id": 1, "name": "Speed Motors", "city": "NYC", "state": "NY"},
    {"id": 2, "name": "Drive Auto", "city": "Austin", "state": "TX"}  # ← ini wajib
]