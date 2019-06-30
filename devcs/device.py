import requests



print("Hello World")


userName = 'root'
passWord = 'root'
token = ''
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

def logout():
    r = requests.get("https://localhost:3000/brimo/interface-api/locations", headers=headers, verify = False)
    print(r.text)
    return

def imlog():
    print(token)

login()    
logout()