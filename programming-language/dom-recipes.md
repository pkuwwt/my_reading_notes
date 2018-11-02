
# DOM Recipes

## Is it a HTML Element
```javascript
const isHTMLElement = el => el instanceof HTMLElement;
```

## Remove all children nodes
```javascript
function removeAllChildren (elem) {
    while(elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}
```
which is much faster than `el => el.innerHTML = ''`
