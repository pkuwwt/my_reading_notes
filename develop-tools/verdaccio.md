
# Offline npm registry

Verdaccio is a proxy server for npm registry, which can cache packages and be used offline.

## Install

  * Create a project for server
  
```bash
mkdir verdaccio_server
cd verdaccio_server
npm init
npm install verdaccio
```

  * Start server: `node_modules/.bin/verdaccio`
  * Start server offline: comment out `proxy: npmjs` under `packages` section of `~/.config/verdaccio/config.yaml`, to forbid internet connection
  * Setup path for cached packages: set `storage` of `config.yaml`. It is `~/.local/share/verdaccio/storage` by default.
  
Then we can use the server on both the internet machine and offline machine by
```
npm install -i http://127.0.0.1:4873 vue
```

or set it globally by 
```
npm config set registry http://127.0.0.1:4873
```

We can use `-c` to specify `config.yaml` and `-l 0.0.0.0:4873` to specify host and port for `verdaccio`.
