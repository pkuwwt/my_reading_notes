

# Linux Command Lines

## System

  * CPU info: `lscpu` or `cat /proc/cpuinfo`
  * CPU cores: `lscpu | grep -E '^Thread|^Core|^Socket|^CPU\('`
  * GPU rendering info: `glxinfo | grep -i render`
  * Linux version: `uname -a`
  * Linux distribution: `cat /etc/lsb-release`
  * 
