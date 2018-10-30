
# Recipes for CSS

## List without bullets

```CSS
 ul {
   list-style-type: none;
}
```

## Convert a transparent colored image to a black/white image
```CSS
.white {
  filter: brightness(0) invert(1);
}
```

where `brightness(0)` makes all pixels black except transparent ones, and then `invert(1)` makes black to white.


## Filter the color of image

```CSS
/*Filter styles*/
.saturate { filter: saturate(3); }
.grayscale { filter: grayscale(100%); }
.contrast { filter: contrast(160%); }
.brightness { filter: brightness(0.25); }
.blur { filter: blur(3px); }
.invert { filter: invert(100%); }
.sepia { filter: sepia(100%); }
.huerotate { filter: hue-rotate(180deg); }
.rss.opacity { filter: opacity(50%); }
```
`filter` is a relative new feature, you may need to use prefixed version like `-webkit-filter`.
