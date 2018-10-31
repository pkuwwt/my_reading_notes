
# Simple HTTP Servers

## Python Servers

For Python2
```python
python -m SimpleHTTPServer 8080
```

For Python3
```python
python -m http.server 8080
```

## lighttpd proxy
Given a configuration file `lighttpd.conf` as follows:
```lighttpd lighttpd.conf
#! /usr/sbin/lighttpd -Df
server.document-root = "/dev/null"
server.modules = ("mod_proxy")
server.kbytes-per-second = env.LIGHTTPD_THROTTLE
server.port = env.LIGHTTPD_PORT
proxy.server = ("" => (( "host" => "127.0.0.1", "port" => env.LIGHTTPD_PROXY )))
```

Then we can proxy external network at port `8001` to `127.0.0.1:8000` with limited bandwidth `60K` by
```bash
python -m SimpleHTTPServer 8000 & 
LIGHTTPD_THROTTLE=60 LIGHTTPD_PORT=8001 LIGHTTPD_PROXY=8000 ./lighttpd.conf
```
