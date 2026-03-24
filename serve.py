#!/usr/bin/env python3
"""Servidor local para el sitio FluxLine.
Uso: python3 serve.py [puerto]   (default: 8766)
Sirve desde website/ y redirige / → /index.html automáticamente.
"""
import sys
import os
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8766
WEBSITE_DIR = os.path.join(os.path.dirname(__file__), "website")


class FluxLineHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEBSITE_DIR, **kwargs)

    def log_message(self, format, *args):
        print(f"  {self.address_string()} → {format % args}")


if __name__ == "__main__":
    os.chdir(WEBSITE_DIR)
    server = HTTPServer(("", PORT), FluxLineHandler)
    print(f"\n  FluxLine Dev Server")
    print(f"  http://localhost:{PORT}/\n")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n  Servidor detenido.")
