//
// Compile:
//    sudo apt install uuid-dev libcap-dev
//    uwsgi --dot-h >uwsgi.h
//    gcc -fPIC -shared -o uwsgi-hello.so `uwsgi --cflags` uwsgi-hello.c
// Run server:
//    uwsgi --dlopen ./uwsgi-hello.so --plugin symcall --symcall hello_uwsgi --http-socket :9090 --http-socket-modifier1 18
// Test client:
//    curl -i -H "Accept */*" http://127.0.0.1:9090/
//

#include "uwsgi.h"

int hello_uwsgi(struct wsgi_request *wsgi_req) {

     // read request variables
     if (uwsgi_parse_vars(wsgi_req)) {
             return -1;
     }

     // get REMOTE_ADDR
     uint16_t vlen = 0;
     char *v = uwsgi_get_var(wsgi_req, "REMOTE_ADDR", 11, &vlen);

     // send status
     if (uwsgi_response_prepare_headers(wsgi_req, "200 OK", 6)) return -1;
     // send content_type
     if (uwsgi_response_add_content_type(wsgi_req, "text/plain", 10)) return -1;
     // send a custom header
     if (uwsgi_response_add_header(wsgi_req, "Foo", 3, "Bar", 3)) return -1;

     // send the body
     if (uwsgi_response_write_body_do(wsgi_req, v, vlen)) return -1;

     return UWSGI_OK;
}
