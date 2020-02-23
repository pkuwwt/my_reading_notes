## How to configure static website using Nginx with MinIO ?

#### 1. Install [nginx](http://nginx.org/)
#### 2. Install [minio](https://github.com/minio/minio)
#### 3. Install [mc client](https://github.com/minio/mc)
#### 4. Create a bucket:

```
$ mc mb myminio/static
Bucket created successfully ‘myminio/static’.
```

#### 5. Make bucket public to host/access static content.

```
$ mc policy wnload myminio/static
Access permission for ‘myminio/static’ is set to ‘download’
```

#### 6. Upload a sample static HTML site to minio bucket, in my case i used example: http://www.oswd.org/user/profile/id/12362/

```
$ mc cp -r terrafirma/ myminio/static
...ma/readme.txt:  39.37 KB / 39.37 KB ┃▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓┃ 100.00% 31.94 KB/s 1s
```

Note: this is how my bucket content appears to me currently.

```
$ mc ls myminio/static
[2017-03-22 18:20:52 IST] 4.7KiB default.css
[2017-03-22 18:20:54 IST] 5.4KiB index.html
[2017-03-22 18:20:54 IST]   612B readme.txt
[2017-03-22 18:24:03 IST]     0B images/
```

#### 7. Configure Nginx as proxy to serve static pages from public bucket name ``static`` from  Minio. 

Remove default configuration and replace it with the below. Please change as per your local setup.

```
$ cat /etc/nginx/sites-enabled/default 
server {
 listen 80;
 server_name localhost;
 location / {
   rewrite ^/$ /static/index.html break;
   proxy_set_header Host $http_host;
   proxy_pass http://localhost:9000/static/;
 }
}

$ sudo service nginx reload
```

#### 8. Open your browser and type http://localhost
