
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


## Customize access_log
Following is the configuration to log the real end user IP `$http_x_forwared_for` other than the upstream IP `$remote_addr`:
```conf
log_format main '$http_x_forwarded_for - $remote_user [$time_time] '
                '"$request" $status $body_bytes_sent '
                '"$http_referer" "$http_user_agent"';
access_log /var/log/nginx/access.log main;
```
