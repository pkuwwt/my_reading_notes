
# nginx


## Reverse Proxy
```conf
location /api/ {
    proxy_pass http://actual-server.com/;
    proxy_set_header X-Real-IP $remote_address;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```
where the two `proxy_set_header` primitives are used to let the actual server know the address of the client. The `REMOTE_ADDR` header cannt be set here, so the actual server should not rely on this header.
