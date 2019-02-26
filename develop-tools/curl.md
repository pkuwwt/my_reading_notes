
# cURL

## Use cURL to test backend API

### GET

```bash
curl --request GET http://myhost/notes/rest
```

### POST

#### Post JSON

```bash
curl --header "Content-type: application/json" \
--request POST --data '{"title": "Test Title", "note": "Test note"}' \
http://myhost/notes/rest?_dc=1379027286060
```

#### Post Form

```bash
curl -X POST -F 'username=davidwalsh' -F 'password=something' \
http://domain.tld/post-to-me.php
```

#### Post Querystring
```bash
curl --request POST --data "user=alvin&password=foobar" \
http://localhost:8888/finance/php/login.php
```

#### Post File
Files should be uploaded by form data. When `-F` is used, there will a `enctype="multipart/form-data"` added in header.

```bash
curl -X POST -F 'image=@/path/to/pictures/picture.jpg' \
http://domain.tld/upload
```

```bash
curl -F ‘data=@path/to/local/file’ UPLOAD_ADDRESS
```

```bash
curl -F 'img_avatar=@/home/petehouston/hello.txt' http://localhost/upload
```

Mulitple files can be uploaded by

```bash
curl -F 'fileX=@/path/to/fileX' -F 'fileY=@/path/to/fileY' ... http://localhost/upload
```

An array of files can be uploaded by

```bash
curl -F 'files[]=@/path/to/fileX' -F 'files[]=@/path/to/fileY' ... http://localhost/upload
```

The file contents are stored in `request.files`.


#### Show response for POST

```bash
curl -H "Accept application/json;*/*" -X POST http://localhost/upload
```

### DELETE

```bash
curl --header "Content-type: application/json" \
--request DELETE --data '{"id": 1, "title": "Test Title", "note": "Test note"}' \
http://myhost/notes/rest
```

### PUT

```bash
curl \
--header "Content-type: application/json" \
--request PUT \
--data '{"id": 100, "title": "Test Title", "note": "Test note"}' \
http://myhost/notes/rest?_dc=1379027286060
```

### Dump response header

```bash
curl --request POST --data "user=alvin&password=foobar" \
-D- \
http://localhost:8888/finance/php/login.php
```


## References

  * [How to use curl scripts to test RESTful web services](https://alvinalexander.com/web/using-curl-scripts-to-test-restful-web-services)
  * [POST Form Data with cURL](https://davidwalsh.name/curl-post-file)
  * [Upload files with cURL](https://medium.com/@petehouston/upload-files-with-curl-93064dcccc76)
