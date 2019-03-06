
# Apache

## How to use symlinks to host files in different directories?

Just make sure all the parent paths of the destination path of the symlink are accessible by Apache.

```
sudo ln -s /path/to/data /var/www/html/data
sudo chmod a+rx /path /path/to /path/to/data
```
