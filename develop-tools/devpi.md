
# Offline Pypi server

`devpi` is a proxy server for pypi, which can cache the pip packages and be used offline.

## Install

  * Create a virtual environment
```
sudo apt install virtualenv
virtualenv --python=/usr/bin/python3 devpi_server
. ./devpi_server/bin/activate
pip install devpi-server devpi-web
```

  * Start server: `devpi-server --start`
  * Stop server: `devpi-server --stop`
  * Start offline server: `devpi-server --start --offline-mode`
  
After the server is started, user can install packages by `pip install -i http://127.0.0.1:3141/root/pypi/+simple/ requests`, 
or configure it in `~/.pip/pip.conf`:

```
[global]
index-url = http://127.0.0.1:3141/root/pypi/+simple/
```

By default, all the cached packages are stored in `~/.devpi/server`, which can be specified by option `--serverdir`.

So we can write a script `devpi_server/start.sh` on offline machine as

```bash
BASE=$(dirname $(readlink -f $0))
SERVER_DIR=~/.devpi/server
. $BASE/bin/activate
nohup devpi-server --start --serverdir $SERVER_DIr --offline-mode --host 0.0.0.0 --port 3141
```

The `SERVER_DIR` points to the path of the cached packages.
