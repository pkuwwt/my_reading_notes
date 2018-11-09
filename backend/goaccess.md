
# GoAccess

GoAccess is a log analysis tool, supporting various log format including Apache/Nginx, and it is configurable.

`goaccess` is a command line tool. You can navigation the output through terminal or output it as a HTML file.

## Usage

```bash
goaccess -f access.log -a > report.html
cat access.log | goaccess -a -d -o json > report.json
zcat access.log.1.gz | goaccess -a
zcat error.log | goaccess --config-file=error.conf -o csv > report .csv
```

Note that, goaccess first use configuration file `/etc/goaccess.conf` and then `~/.goaccessrc`. 
You can also specify a configuration by `--config-file=~/.goaccessrc`.

The most important configurations are `log-format`, `date-format` and `time-format`. 

The configuration for default Nginx access.log is
```conf
log-format %h %[%d:%t %^] "%r" %s %b "%R" "%u"
time-format %T
date-format %d/%b/%Y
```

The configuration for default Nginx error.log is
```conf
log-format %d %t [error] %^, client: %h, server: %^, request: "%r", host: "%v", referrer: "%R"
date-format %H:%M:%S
time-format %Y/%m/%d
```
where in log-format
  * `%d` and `%t` means date and time respectively
  * `%^` means ignoring the field
  * `%h` means the host
  * `%r` means the request
  * `%s` means the status code
  * `%b` means the size of object returned to the client
  * `%R` means Referrer HTTP request header
  * `%u` means the user-agent HTTP request header
  * `%v` means the sever name
and in time-format `%T% equals to the `%H:%M:%S`, and in date-format `%b` means abbreviated month name.

## Reference

  * [GoAccess Manual Page](https://goaccess.io/man#configuration)
  * [stfftime Manual Page](http://man7.org/linux/man-pages/man3/strftime.3.html)
  
