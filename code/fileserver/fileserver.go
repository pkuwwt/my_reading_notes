/**
 * go build fileserver.go
 * ./fileserver -p=8100 -d="."
 */

package main

import (
	"flag"
	"net/http"
	"log"
)

func cors_wrapper(handler http.Handler) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		handler.ServeHTTP(w, r)
	}
}

func main() {
	port := flag.String("p", "8100", "port to serve on")
	directory := flag.String("d", ".", "the directory of static file to host")
	flag.Parse()
	http.HandleFunc("/", cors_wrapper(http.FileServer(http.Dir(*directory))))
	log.Printf("Serving %s on HTTP port: %s\n", *directory, *port)
	log.Fatal(http.ListenAndServe(":" + *port, nil))
}
