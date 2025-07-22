import requests

def get_all_dealers():
    try:
        response = requests.get('http://localhost:5000/api/dealers')
        if response.ok:
            return response.json()
    except:
        pass
    return []