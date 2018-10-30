
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
