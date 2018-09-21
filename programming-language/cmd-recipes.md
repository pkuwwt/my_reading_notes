
# CMD

## CMD Basic

  * List all commands: `help`
  * Help for a command: `your_command /?`, for example `netstat /?`

## How to list all open ports

```
netstat -abno
```

## How to find string

```
findstr "abc" file.txt
```

You can also use it in pipe. For example, checking if 404 port is open

```
netstat -ano | findstr 404
```

## Set IP address

```
netsh interface ip set address "Local Network" static 192.168.1.200 255.255.255.128 192.168.1.1
netsh int ip show config
pause
```

where "Local Network" is your network interface name.
