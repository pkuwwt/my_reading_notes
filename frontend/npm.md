
# npm

`npm` means **Node Package Manager**. It is also a command line for node.js based project.

## npm usages

### npm bin

You can use `npm bin` in any sub-directory of a node.js project to get the `node_modules/.bin` directory.

So instead of executing `../node_modules/.bin/mocha`, we can do it by `PATH=$(npm bin):$PATH mocha` in Linux. 
So you can configure your `.vimrc` as
```
func! RunCode()
if &filetype=="javascript" && expand("%:t")=~".spec.js$"
  exec "!PATH=$(npm bin):$PATH mocha %"
elseif %filetype=="javascript"
  exec "!node %"
endif
endfunc
```

For windows, we can use `for /f %i in ('npm bin') do %i\mocha`, which seems not very useful though.
