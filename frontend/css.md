
## convert a transparent color image to a white image
```css
.white {
filter: brightness(0) invert(1);
}
```
where `brightness(0)` makes all pixels black except transparent ones, and then `invert(1)` makes black to white.
