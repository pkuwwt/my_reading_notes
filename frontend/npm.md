
# npm

`npm` means **Node Package Manager**. It is also a command line for node.js based project.

## npm usages

### npm bin

You can use `npm bin` in any sub-directory of a node.js project to get the `node_modules/.bin` directory.

So instead of executing `../node_modules/.bin/mocha`, we can do it by `PATH=$(npm bin):$PATH mocha` in Linux. 
So you can configure your `.vimrc` to run-by-one-key as
```
func! RunCode()
if &filetype=="javascript" && expand("%:t")=~".spec.js$"
  exec "!PATH=$(npm bin):$PATH mocha %"
elseif %filetype=="javascript"
  exec "!node %"
endif
endfunc

map <F5> :call RunCode()<CR>
```

For windows, we can use `for /f %i in ('npm bin') do %i\mocha`, which seems not very useful though. A solution for `vim` in
windows and any other systems is:
```
let bin = substitude(system('npm bin'), '\(\n\|\r\|\s\)*$', '', 'g');
exec "!" . bin . "/mocha"
```

So a cross platform solution is
```
func! RunCode()
if &filetype=="javascript" && expand("%:t")=~".spec.js$"
  let bin = substitude(system('npm bin'), '\(\n\|\r\|\s\)*$', '', 'g');
  exec "!" . bin . "/mocha"
elseif %filetype=="javascript"
  exec "!node %"
endif
endfunc

map <F5> :call RunCode()<CR>
```
