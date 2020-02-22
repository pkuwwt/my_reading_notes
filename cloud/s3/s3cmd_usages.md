
# Usage of s3cmd

## Install

```
pip install s3cmd
```

We can view the help by

```
s3cmd --help
man s3cmd
```

## Setup a server

We can easily setup a [minio](minio.io) server or a [cloudserver](https://www.zenko.io/cloudserver/) server.

### minio

```
docker pull minio/minio
docker run -p 9000:9000 minio/minio server /data
```

The S3 host url is `127.0.0.1:9000`. And `minio` also provides a file browser by `http://127.0.0.1:9000`.

### cloudserver

```
docker pull zenko/cloudserver
docker run -p 8000:8000 -e S3BACKEND=mem zenko/cloudserver
```

or

```
git clone https://github.com/scality/S3.git
cd S3
yarn install --frozen-lock-file
yarn start
```

The host url is `127.0.0.1:8000`. However, there is no file browser.

## Usage

### Connect to the S3 server

We can use `~/.s3cfg` file or pass the credential through the command line options.

Take `cloudserver` for example, the basic `~/.s3cfg`

```conf
[default]
access_key = accessKey1
secret_key = verySecretKey1
host_base = 127.0.0.1:8000
host_bucket = %(bucket).localhost:8000
use_https = False
```

Then we can use the commands

```bash
s3cmd mb s3://my-bucket
s3cmd ls
```

We can also pass the credential through command line

```bash
s3cmd --host=127.0.0.1:8000 \
      --host-bucket='127.0.0.1:8000/%(bucket)' \
      --access_key=accessKey1 \
      --secret_key=verySecretKey1 \
      mb s3://my-bucket
```

The `127.0.0.1:8000/%(bucket)` is equivalent to `%(bucket).localhost:8000`.

