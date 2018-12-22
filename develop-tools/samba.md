
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

## Client

### Linux

### Windows
Access the shared samba dir by `\\host_ip_address\samba`.

## Reference

  * [How to Create a Network Share Via Samba Via CLI](https://help.ubuntu.com/community/How%20to%20Create%20a%20Network%20Share%20Via%20Samba%20Via%20CLI%20%28Command-line%20interface/Linux%20Terminal%29%20-%20Uncomplicated%2C%20Simple%20and%20Brief%20Way%21)
