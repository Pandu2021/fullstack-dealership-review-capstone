import requests

def analyze_sentiment(text):
    try:
        response = requests.post(
            'http://localhost:5000/analyze',
            json={'review': text},
            headers={'Content-Type': 'application/json'}
        )
        if response.ok:
            return response.json().get('sentiment')
        return 'error'
    except Exception as e:
        return 'error'