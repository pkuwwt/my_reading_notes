
const express = require('express');
const serveIndex = require('serve-index');
const path = require('path');
const minimist = require('minimist');

const app = express()

const args = minimist(process.argv.slice(2), {
    alias: {
        h: 'help',
        p: 'port',
        d: 'directory'
    },
    default: {
        port: 8100,
        directory: '.'
    }
});
if (args.help) {
    console.log(`A simple file server with CORS
      -h,--help\thelp
      -p,--port\tport (default:8100)
      -d,--directory\tbase directory (default: .)`)
    process.exit()
}

const get_path = p => {
    if (path.isAbsolute(p)) return p;
    return path.join(__dirname, p);
};

const port = args['port'];
const dir = get_path(args['directory'])

const setHeaders = (res, path, stat) => {
    res.set('Access-Control-Allow-Origin', '*');
};

app.use(express.static(dir, {setHeaders}))
app.use(serveIndex(dir))

app.listen(port, () => console.log(`File server listening on port ${port}`))
