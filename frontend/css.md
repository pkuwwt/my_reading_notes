
# Cascading Style Sheets (CSS)

## CSS Transitions

  * syntax: `transition: property duration transition-timing-function delay;`, where `delay` is optional
  * `transition` is just a shorthand of `transition-property`, `transition-duration`, `transition-timing-function` and `transition-delay`
    * [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property): the name of the CSS property to transition, e.g. `background-color`
    * [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration): how many seconds or milliseconds, e.g. `3s`, `100ms`
    * [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function): the name of preset functions, e.g. `linear`, `ease-in` (speed up), `ease-out` (slow down), `ease-in-out`, or a `cubic-bezier(x1,y1,x2,y2)` expression, which can be tuned by develop tools in Firefox or Chrome.
    * [`transition-dealy`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay): how long to wait before the starting the duration
  * Transitioning multiple properties: separate multiple `transition` quadruple by comma, or separate multiple properties of `transition-property` by comma
  * How to activate a transition: using pseudo classes like `:hover`, `:focus` or `:active`, or Javascript code: `el.classList.toggle('is-active')` to switch between `.button` and `.button.is-active`.
  * Reference: [CSS Transitions Explained](https://zellwk.com/blog/css-transitions/)

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
