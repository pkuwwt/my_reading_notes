
# Secure Shell (SSH)

## Basic Usage

  * install
    * Ubuntu: `sudo apt-get install openssh`
    * Windows: best solution is [Git for Windows](https://gitforwindows.org/), it contains both client and server, and a terminal.
  * start server
    * Linux: `sudo service sshd start`
    * Git for Windows: 
      * generate key: `ssh-keygen`
      * prepare key for server: `cp ~/.ssh/id_rsa /etc/ssh/ssh_host_rsa_key`
      * start server: `/usr/bin/sshd`
  * client operations
    * login: `ssh username@server-host`
    * copy local files to server: `scp local-files username@server-host:/host/path`
    * copy local dirs to server: `scp -r local-dirs username@server-host:/host/path`
    * copy remote files to local: `scp username@server-host:/host/path local-path`
    * copy remote dirs to local: `scp -r username@server-host:/host/path local-path`
    * execute remote command: `ssh username@server-host 'echo'`
    * execute local script on remote server: `ssh username@server-host 'bash -s' < local_script.sh`
    * execute multiple commands on remote server:
```bash
ssh username@server-host 'bash-s' <<EOF
command1
command2
EOF
```

### Resume copy of partial file

```
rsync -P -e ssh remoteuser@remotehost:/remote/path /local/path
```

where `-P` is equal to `--partial --progress`.

### Shortcuts for SSH
Add shortcut in `~/.ssh/config` as follows: 
```conf
Host myserver
    HostName server-host
    User username
```
Then you can use `myserver` instead of `username@server-host` in commands `ssh` and `scp`.

### login without password
  * generate key for client (don't provide any password): `ssh-keygen`
  * copy public key to server `~/.ssh/authorized_keys`: 
```bash
scp ~/.ssh/id_rsa.pub myserver:/tmp/
ssh myserver 'cat /tmp/id_rsa.pub >>~/.ssh/authorized_keys
```
  * Now, you are ready to use `myserver` without password. If you provide password for `ssh-keygen`, then you still need to input that password each time.

## SSH Tunnel

### Local port forwarding

A way to access serverC from localA through serverB:
```
ssh -L portA:serverC:portC serverB
```
User of `localA` executes this command to map `localA:portA` to `serverC:portC` through `serverB:22`, so we can access `localA:portA` now as if we are accessing `serverC:portC`.

This command will invoke a TTY on `serverB`. We can avoid that by `ssh -nNT -L`.

### Remote port forwarding

A way to expose your the port `portA` on your own machine `localA` behind `serverB` to outside as `serverB:portB`:
```
ssh -R portB:localA:portA serverB
```
Now, we can access `serverB:portB` as if we are accessing `localA:portA`.

Similary, we can avoid the invoking of tty on `serverB` by `ssh -nNT -R`.

## Allow only specified IPs

In `/etc/hosts.allow`

```
sshd: 192.168.3.15
sshd: 192.168.2.0/255.255.255.0
sshd: 127.0.0.1
sshd: [::1]
```

In `/etc/hosts.deny`

```
sshd: ALL
```

The change will take effects immediately, so be CAREFULL.

### Reference
  * [SSH Tunnel - Local and Remote Port Forwarding Explained With Examples](https://blog.trackets.com/2014/05/17/ssh-tunnel-local-and-remote-port-forwarding-explained-with-examples.html)
