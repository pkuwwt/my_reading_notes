

# Linux Command Lines

## System

  * CPU info: `lscpu` or `cat /proc/cpuinfo`
  * CPU cores: `lscpu | grep -E '^Thread|^Core|^Socket|^CPU\('`
  * GPU rendering info: `glxinfo | grep -i render`
  * Linux version: `uname -a`
  * Linux distribution: `cat /etc/lsb-release`
  * 
  
## User

  * change password: `sudo passwd user`

## Text Processing

### Count the number of lines of code
```bash
find . -regex '.*\.\(cpp\|c\|h\)$' -exec wc -l {} \; | awk '{sum += $1}END{print sum}'
```
where `find . -regex` used to find all filenames in current dir ending with .cpp/.c/.h, and use `wc -l` to count the LOC of each file, and then use awk to add the numbers in the first column of the output of `wc -l`.
