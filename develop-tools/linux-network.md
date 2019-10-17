
# Network utils for Linux 

## Set IP by command line

### CentOS

  * List network devices: `ip link show` or `ifstat`
  * Add/edit the conf file `/etc/sysconfig/network-scripts/ifcfg-eth0` for device `eth0`, with the following lines
```
DEVICE=eth0
BOOTPROTO=static
ONBOOT=yes
IPADDR=192.168.2.203
GATEWAY=192.168.2.24
NETMASK=255.255.255.0
```
  * Restart `network` service: `sudo systemctl restart network`

### Ubuntu

  * Disable `network-manager`
```
# If not work, try: sudo stop network-manager
sudo /etc/init.d/NetworkManager stop 

sudo chmod -x /etc/init.d/NetworkManager
# or
sudo update-rc.d -f NetworkManager remove
# or
sudo aptitude purge network-manager
```
  * Edit `/etc/network/interfaces`
```
## To configure a dynamic IP address
auto eth1
iface eth1 inet dhcp

## Or configure a static IP
auto eth0
iface eth0 inet static
  address 192.168.1.14
  gateway 192.168.1.1
  netmask 255.255.255.0
  network 192.168.1.0
  broadcast 192.168.1.255
```
  * Restart network service: `sudo /etc/init.d/networking restart`

