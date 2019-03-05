
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

## Setup browser-cache in nginx

```
# Expires map
map $sent_http_content_type $expires {
    default                    off;
    text/html                  epoch;
    text/css                   max;
    application/javascript     max;
    ~image/                    max;
}

server {
    ...
    expires $expires;
```

Then there will be `Cache-Control: max=xxxx` in response header of request for css/js or image files, while html file will be requested from server each time.

## References

  * [How to Implement Browser Caching with Nginx's header Module on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-implement-browser-caching-with-nginx-s-header-module-on-centos-7)
  * [Module ngx_http_headers_module](http://nginx.org/en/docs/http/ngx_http_headers_module.html)
  
