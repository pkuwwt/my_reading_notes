

# Linux Command Lines

## System

  * CPU info: `lscpu` or `cat /proc/cpuinfo`
  * CPU cores: `lscpu | grep -E '^Thread|^Core|^Socket|^CPU\('`
  * GPU rendering info: `glxinfo | grep -i render`
  * Linux version: `uname -a`
  * Linux distribution: `cat /etc/lsb-release`
  * Memory usage: `free` or `top` or `htop`
  
## User

  * change password: `sudo passwd user`

## Text Processing

### Count the number of lines of code
```bash
find . -regex '.*\.\(cpp\|c\|h\)$' -exec wc -l {} \; | awk '{sum += $1}END{print sum}'
```
where `find . -regex` used to find all filenames in current dir ending with .cpp/.c/.h, and use `wc -l` to count the LOC of each file, and then use awk to add the numbers in the first column of the output of `wc -l`.

## File System

  * Find files excluding a subdir: `find -name '*.js' -not -path './dir/*'`


### Relocate /var to a different partition

  * assume there is new disk device, find out the UUID by `sudo blkid /dev/sdc1`
  * mount the partiton on a temp dir: `mount /dev/sdc1 /tmp/newvar`
  * copy /var to the temp dir: `rsync -aqxP /var/* /tmp/newvar/`
  * umount the temp dir: `umount /tmp/newvar`
  * revise `/etc/fstab`: `UUID=xxxx /var ext4 `
  
### Pipe

  * Combine multiple commands' output in pipe: `{ cmd1; cmd2; } | cmd3` 
  
## Resources

### sysctl

  * list all variables: `sysctl -a`
  * list a specific variable: `sysctl vm.max_map_count`
  * list with pattern `sysctl -a -r vm`
  * revise virtual machine max map size: `sudo sysctl -w vm.max_map_count=262144`
  
## Compression

  * Find files modified in 30 minutes and save it to a tarball: `find dir -type f -cmin -30 -print0 | tar czvf out.tar.gz --null -T -`
  
  
## Network

### Three ways to check if a port is open

```bash
# z means zero I/O mode to scan, v means verbose, w3 means timeout with 3s
nc -zvw3 ip port

nmap ip -p port

telnet ip port
```
