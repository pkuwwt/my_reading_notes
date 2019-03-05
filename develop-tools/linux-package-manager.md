
# Package management in Linux

## apt

Packages in repository:

  * search: `apt-cache search package`
  * install: `sudo apt install package`
  * uninstall: `sudo apt remove package`
  * info: `apt-cache show package`

Local packages:

  * install: `sudo dpkg -i package.rpm`
  * uninstall: `sudo dpkg --remove package`
  * query file: `dpkg-query -S /path/to/file`
  * info: `dpkg -p package`
  * list files: `dpkg -L package`

## yum

Packages in repository:

  * search: `yum search package`
  * install: `sudo yum install package`
  * uninstall: `sudo yum remove package`
  * update: `sudo yum update package`
  * info: `yum info package`
  * list all available packages: `yum list | less`
  * list installed packages: `yum list installed | less`
  * query file: `yum provides /path/to/file`
  
Local packages:

  * install `sudo rpm -ihv package.rpm`
  * upgrade: `sudo rpm -Uhv package.rpm `
  * uninstall: `sudo rpm -e package`
  * list all installed: `rpm -qa`
  * query file: `rpm -qf /path/to/file`
  * query dependences: `rpm -qpR package.rpm`
  * query if installed: `rpm -q package`
  * list files: `rpm -ql package`
  
  
  ## References:
  
    * [20 Practical Examples of RPM Commands in Linux](https://www.tecmint.com/20-practical-examples-of-rpm-commands-in-linux/)
