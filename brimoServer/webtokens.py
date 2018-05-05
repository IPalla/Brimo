#!/usr/bin/env python
"""
    Python webtokens auth module. Easy to use webtokens python module.
    Just set jwt_secret and jwt_exp_delta_seconds.
"""

_author__ = "Ignacio Pallares Jimenez"
__license__ = "GPL"
__version__ = "1.0.0"
__email__ = "nachopallaj@gmail.com"


from jwcrypto import jwt, jwk
from datetime import datetime, timedelta
import jwt

JWT_SECRET = 'bbrrIII'
JWT_ALGORITHM = 'HS256'
JWT_EXP_DELTA_SECONDS = 3600

def createToken(id):
  payload = {
    'user_id': id,
    'exp': datetime.utcnow() + timedelta(seconds=JWT_EXP_DELTA_SECONDS)
  }
  jwt_token = jwt.encode(payload, JWT_SECRET, JWT_ALGORITHM)
  return jwt_token

def validToken(token):
  try:
    payload = jwt.decode(token, JWT_SECRET,algorithms=[JWT_ALGORITHM])
    return payload

  except (jwt.DecodeError, jwt.ExpiredSignatureError):
    return -1