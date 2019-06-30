
# The encoding and decoding of URL

## What is URL encoding?

According to [URLEncoding](http://www.genome.iastate.edu/community/angenmap/URLEncoding.html)

    URL Encoding is the process of converting string into valid URL format.  
    Valid URL format means that the URL contains only what is termed
    "alpha | digit | safe | extra | escape" characters.  

You can read more about the what and the whys of these terms on the [World Wide Web Consortium site](http://www.w3.org/Addressing/URL/url-spec.htmlandhttp://www.w3.org/International/francois.yergeau.html).
 
URL encoding is normally performed to convert data passed via html forms, because such data may contain special character, 
such as "/", ".", "#", and so on, which could either: 

  1. have special meanings; 
  2. is not a valid character for an URL;
  3. could be altered during transfer. 
  
For instance, 

  * the "#" character needs to be encoded because it has a special meaning of that of an html anchor.
  * The <space> character also needs to be encoded because is not allowed on a valid URL format.   
  * Also, some characters, such as "~" might not transport properly across the internet.

## The rules of urlencode
We refer to [JDK URLEncoder utility class for HTML form encoding](http://docs.oracle.com/javase/1.5.0/docs/api/java/net/URLEncoder.html)
which contains static methods for converting a String to the `application/x-www-form-urlencoded` MIME format. For more information about HTML form encoding, consult the HTMLspecification.

When encoding a String, the following rules apply:
  * The alphanumeric characters "a" through "z", "A" through "Z" and "0" through "9" remain the same.
  * The special characters ".", "-", "*", and "_" remain the same.
  * The space character " " is converted into a plus sign "+".
  * All other characters are unsafe and are first converted into one or more bytes using some encoding scheme. Then each byte is represented by the 3-character string "%xy", wherexyis the two-digit hexadecimal representation of the byte. The recommended encoding scheme to use is UTF-8. However, for compatibility reasons, if an encoding is not specified, then the default encoding of the platform is used.

For example using UTF-8 as the encoding scheme the string "The string ü@foo-bar" would get converted to "The+string+%C3%BC%40foo-bar" because in UTF-8 the character ü is encoded as two bytes C3 (hex) and BC (hex), and the character @ is encoded as one byte 40 (hex).

## Shell commands for URL encoding

```shell
urlencode(){
	declare args=${*:-$(</dev/stdin)};
	echo $args | tr -d '\n' | xxd -plain | sed 's/\(..\)/%\1/g'
}

urldecode(){
	declare args=${*:-$(</dev/stdin)};
	printf $(echo -n $args | sed 's/\\/\\\\/g;s/\(%\)\([0-9a-fA-F][0-9a-fA-F]\)/\\x\2/g')"\n"
}
```

For example:
By executing following command,
```shell
echo '手机' | urlencode
```
we get (assuming it is encoded as UTF8):
```
%e6%89%8b%e6%9c%ba
```
