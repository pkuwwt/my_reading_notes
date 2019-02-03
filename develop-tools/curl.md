
# cURL

## Use cURL to test backend API

### GET

```bash
curl --request GET http://myhost/notes/rest
```

### POST

```bash
curl --header "Content-type: application/json" \
--request POST --data '{"title": "Test Title", "note": "Test note"}' \
http://myhost/notes/rest?_dc=1379027286060
```

```bash
curl --request POST --data "user=alvin&password=foobar" \
http://localhost:8888/finance/php/login.php
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
