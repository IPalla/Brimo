#!/usr/bin/env python
"""
    Python cache logging module. Easy to use, based on dict object
    To use: from cache import Caches => cache = Caches()
"""

_author__ = "Ignacio Pallares Jimenez"
__license__ = "GPL"
__version__ = "1.0.0"
__email__ = "nachopallaj@gmail.com"

class Cache:
  def __init__(self, response):
    self.response = response
    

class Caches:
  def __init__(self, logging = None):
    self.caches = {}
    self.logging = logging

  def getResponse(self, url):
    if self.caches.has_key(url) == False:
      return None
    cacheObject = self.caches[url]
    if cacheObject:
      if cacheObject.response:
        if self.logging:
          self.logging.debug('Response from cache: /' + url)
        return cacheObject.response
    return None
  
  def setResponse(self, url, response):
    self.caches[url] = Cache(response)
    if self.logging:
      self.logging.debug('Initialized cache: /' + url)

  def unsetResponse(self, url):
    if self.caches.has_key(url) == False:
      return
    self.caches[url] = None
    if self.logging:
      self.logging.debug('Deleted cache: /' + url)
  
  def clearAll(self):
    self.caches.clear()
    return

if __name__ == '__main__':
    caches = Caches()
    print caches.getResponse('/devices')
    caches.setResponse('/devices', 'Response to devices!')
    print caches.getResponse('/devices')
    caches.unsetResponse('/devices')
    print caches.getResponse('/devices')
    
