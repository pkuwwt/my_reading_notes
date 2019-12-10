
# Samba

Samba is the free re-implementation of Server Message Block (SMB) protocol.

## Server

First, install `samba`
```shell
sudo apt install samba
```

Second, set password for user
```shell
sudo smbpasswd -a <USER>
```
here assuming `<USER>` is the current user name.

Thrid, create a shared dir
```shell
mkdir /home/<USER>/samba
```
here `samba` can be any dir name.

Fourth, Edit `/etc/samba/smb.conf`, add
```conf
[samba]
    path = /home/<USER>/samba
    valid users = <USER>
    read only = false
```
the `path` should be the dir we just created.

Fifth, restart `smbd` service
```shell
sudo service smbd restart
```

By default, samba use `smb ports = 445 139`, we can change it to other ports by setting it in `/etc/samba/smb.conf`

```
smb ports = 5445 5139
```

## Client

### Linux

```
smbclient \\host_or_ip\samba
```

### Windows
Access the shared samba dir by `\\host_ip_address\samba`.

If the samba server `192.168.1.12` has changed its port to `5139`, then we can bind it to windows disk drive by

```
netsh interface portproxy add v4tov4 listenaddress=127.0.0.1 listenport=445 connectaddress=192.168.1.12 connectport=5139
REM reboot machine
net use Z: \\127.0.0.1\samba
```

## Reference

  * [How to Create a Network Share Via Samba Via CLI](https://help.ubuntu.com/community/How%20to%20Create%20a%20Network%20Share%20Via%20Samba%20Via%20CLI%20%28Command-line%20interface/Linux%20Terminal%29%20-%20Uncomplicated%2C%20Simple%20and%20Brief%20Way%21)
