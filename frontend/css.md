
# Cascading Style Sheets (CSS)

## CSS recipes

### convert a transparent color image to a white image
```css
.white {
filter: brightness(0) invert(1);
}
```
where `brightness(0)` makes all pixels black except transparent ones, and then `invert(1)` makes black to white.


## CSS Preprocessors
A CSS preprocessor is a scripting language that extends CSS and then compiles to CSS. There are three main CSS preprocessors:

  * Sass or SCSS
  * [Less](http://lesscss.org/): Leaner Style Sheets
  * Stylus
  
### Examples

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

### Sass vs. LESS

### Sass vs. SCSS
