
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
