
# Apache

## How to use symlinks to host files in different directories?

Just make sure all the parent paths of the destination path of the symlink are accessible by Apache.

```
sudo ln -s /path/to/data /var/www/html/data
sudo chmod a+rx /path /path/to /path/to/data
```
## Enable CORS in Apache

  * load `mod_headers.so`
    * check if it is loaded: `apache2ctl -M | grep headers`
    * if not, find its path, usually `/usr/lib/apache2/modules/mod_headers.so`
    * append `LoadModule headers_module /usr/lib/apache2/modules/mod_headers.so` in `apache2.conf`
    * add `Header set Access-Control-Allow-Origin "*"` in `<Directory /var/www/>` section
    * restart apache: `sudo service apache2 restart`
