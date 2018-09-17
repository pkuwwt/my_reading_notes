
# Four ways to circumvent the SOP

There are four ways to circumvent the [Same Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
enforced by browsers, i.e. you can't request resources in another domain programmatically.

They are:

  * Proxy: setup a server in your domain to forward resources in other domain. There is no SOP in backend。
  * Jsonp: 
    - `<script>` is one of the places where we can load resources in other domains, 
    -  except that you can pass the name of a defined function `f` to the url,
    - then the server can return the code `f(resources)`, so that you can handle `resources` in your own functio `f`
    - Limitation: you can only GET but not POST; you need a Jsonp-supported server
  * CORS: Cross Origin Resource Sharing
    - Add `Access-Control-Allow-Origin` HTTP header in server response
    - Limitation: not supported by legacy browser; you need to own the server
    - refer to [Cross Domain Requests in JavaScript](https://jvaneyck.wordpress.com/2014/01/07/cross-domain-requests-in-javascript/)
  * `iframe` and `postMessage`: 
    - the origin of `<iframe src="http://xxx.com">` is specified by its `src` `http://xxx.com`, 
    - so you can request resources in the domain of `http://xxx.com` in the iframe page
    - then you can send message from your main page to the iframe page by `postMessage`
    - refer to [Cross Domain Messaging with posgMessage](http://blog.teamtreehouse.com/cross-domain-messaging-with-postmessage)
    
The SOP has nothing to do with the server, which is the limitation of browsers used to ensure security. 
