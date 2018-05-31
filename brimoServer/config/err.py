#!/usr/bin/env python
"""
    Python custom logging module. Same use as default logging module.
    To use: import * from err => logging = Logger()
"""

import logging
import datetime

_author__ = "Ignacio Pallares Jimenez"
__license__ = "GPL"
__version__ = "1.0.0"
__email__ = "nachopallaj@gmail.com"

fileLog = './logs/logs.txt'

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
class levels:
    CRITICAL = 	50
    ERROR = 40
    WARNING = 30
    INFO = 20
    DEBUG = 10
    NOTSET = 0

class log:
	def __init__(self, msg):
		self.msg = msg
		self.date = datetime.datetime.now()
		self.err = str(self.date) + ': ' + self.msg

class Logger:
    def __init__(self, log_level=0):
        self.logging = logging
        self.logger = logging.getLogger()
        self.level = log_level
        self.logging.basicConfig(filename=fileLog, filemode='w')
        self.logger.setLevel(log_level)

    def warning(self, msg):
        err_msg = log(msg).err
        self.logging.warning(err_msg)
        print bcolors.WARNING + 'WARNING: ' + err_msg + bcolors.ENDC

    def debug(self, msg):
        err_msg = log(msg).err
        self.logging.debug(err_msg)
        if self.level <= levels.DEBUG:
            print bcolors.OKGREEN + 'DEBUG: ' + err_msg + bcolors.ENDC

    def info(self, msg):
        err_msg = log(msg).err
        self.logging.info(err_msg)
        if self.level <= levels.INFO:
            print bcolors.OKBLUE + 'INFO: ' + err_msg + bcolors.ENDC

    def error(self, msg):
        err_msg = log(msg).err
        self.logging.error(err_msg)
        if self.level <= levels.ERROR:
            print bcolors.FAIL + 'ERROR: ' + err_msg  + bcolors.ENDC

    def critical(self, msg):
        err_msg = log(msg).err
        self.logging.critical(err_msg)
        if self.level <= levels.CRITICAL:
            print bcolors.FAIL + 'CRITICAL: ' + err_msg + bcolors.ENDC

def main():
    logger_def = Logger()
    logger_def.warning('This is a warning')
    logger_def.debug('This is some debug')
    logger_def.info('This is some info')
    logger_def.error('This is an error')
    logger_def.critical('This is a critical')
if __name__ == '__main__':
    main()


