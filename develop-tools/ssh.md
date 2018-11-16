
# Secure Shell (SSH)

## Basic Usage

  * install
    * Ubuntu: `sudo apt-get install openssh`
    * Windows: best solution is [Git for Windows](https://gitforwindows.org/), it contains both client and server, and a terminal.
  * start server
    * Linux: `service sshd start`
    * Git for Windows: 
      * generate key: `ssh-keygen`
      * prepare key for server: `cp ~/.ssh/id_rsa /etc/ssh/ssh_host_rsa_key`
      * start server: `/usr/bin/sshd`
  * operations
    * login: `ssh username@server-host`
    * execute remote command: `ssh username@server-host 'echo'`
    * execute local script on remote server: `ssh username@server-host 'bash -s' < local_script.sh`
    * execute multiple commands on remote server:
```bash
ssh username@server-host 'bash-s' <<EOF
command1
command2
EOF
```
  * login without password
    * generate key for client (don't provide any password): `ssh-keygen`
    * copy public key to server `~/.ssh/authorized_keys`: 
```bash
scp ~/.ssh/id_rsa.pub username@server-host:/tmp/
ssh username@server-host 'cat /tmp/id_rsa.pub >>~/.ssh/authorized_keys
```
