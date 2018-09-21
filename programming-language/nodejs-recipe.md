
# Node.js 

## How to get the path of a module

```
require.resolve('axios');               // return xxx/node_modules/axios/index.js
require.resolve('assert/package.json'); // return xxx/node_modules/assert/package.json
```

Note that `require.resolve('assert')` doesn't work. So `path.dirname(require.resolve('moduleName/package.json'))` is a better option.
