#!/usr/local/bin/python3

# Simplest server:
#     python -m http.server 8100
# This version add CORS

from http.server import HTTPServer, SimpleHTTPRequestHandler
import http.server
from functools import partial
import os

class MyHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='A simple python file server with CORS')
    parser.add_argument('-p', dest='port', default=8100, type=int, help="port of the server (default: 8100)")
    parser.add_argument('-d', dest='dir', default='.', help="base dir of the file server (default: .)")
    args = parser.parse_args()
    HTTPServer(('0.0.0.0', args.port), partial(MyHandler, directory=args.dir)).serve_forever()

