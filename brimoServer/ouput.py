import requests

userName = 'root'
passWord = 'root'
token = ''
deviceId = ''
headers = {'content-type': 'application/json'}

def login():
    data = {'username': userName, 'password': passWord}
    r = requests.post("https://localhost:3000/brimo/login-api/login", data=data, verify = False)
    global token 
    global headers
    token = r.json()['tkn_auth']
    headers = {'content-type': 'application/json', 
    'x-access-token': token}
    return

def register(ip=''):
    login()
    global headers
    data = {
        'name': 'LEDS DEVICE',
        'camera': False,
        'IP': 'localhost:8080',
        'freq': 30,
        'room': None
    }
    r = requests.post("https://localhost:3000/brimo/sensors-api/devices", data=data, headers=headers, verify = False)
    print(r.text)
    return

def updateInfo(updatedInfo):
    r = requests.get("https://localhost:3000/brimo/interface-api/locations", headers=headers, verify = False)
    print(r.text)
    return