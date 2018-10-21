
# Cascading Style Sheets (CSS)

## CSS Transitions

  * Syntax: `transition: property duration transition-timing-function delay;`, where `delay` is optional
  * `transition` is just a shorthand of `transition-property`, `transition-duration`, `transition-timing-function` and `transition-delay`
    * [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property): the name of the CSS property to transition, e.g. `background-color`
    * [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration): how many seconds or milliseconds, e.g. `3s`, `100ms`
    * [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function): the name of preset functions, e.g. `linear`, `ease-in` (speed up), `ease-out` (slow down), `ease-in-out`, or a `cubic-bezier(x1,y1,x2,y2)` expression, which can be tuned by develop tools in Firefox or Chrome.
    * [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay): how long to wait before the starting the duration
  * Transitioning multiple properties: separate multiple `transition` quadruple by comma, or separate multiple properties of `transition-property` by comma
  * How to activate a transition: using pseudo classes like `:hover`, `:focus` or `:active`, or Javascript code: `el.classList.toggle('is-active')` to switch between `.button` and `.button.is-active`.
  * Browser compatibility:
```CSS
.box {
    background: #2db34a;
    -webkit-transition-property: background;
       -moz-transition-property: background;
         -o-transition-property: background;
            transition-property: background;
}
```
  * Reference: 
    * [CSS Transitions Explained](https://zellwk.com/blog/css-transitions/)
    * [Lesson 8 Transitions & Animations](https://learn.shayhowe.com/advanced-html-css/transitions-animations/)
  
## CSS Transforms

  * Syntax: `transform: scaleX(0.5) translate(20px,10%) skew(5deg,2deg);`
  * Browser compatibility:
```CSS
div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
}
```
  * Reference: [Lesson 7 Transforms](https://learn.shayhowe.com/advanced-html-css/css-transforms/)
  
## CSS Animations

  * Syntax: 
```CSS
@keyframes slide {
  0% {
    left: 0;
    top: 0;
  }
  50% {
    left: 244px;
    top: 100px;
  }
  100% {
    left: 488px;
    top: 0;
  }
}
.stage:hover .ball {
  animation: slide 2s ease-in-out .5s infinite alternate;
}
.stage:active .ball {
  animation-play-state: paused;
}
```
  * `animation` is shorthand of `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode` and `animation-play-state`.
  * Browser compatibility: `@-moz-keyframes`, `@-o-keyframes`, `@-webkit-keyframes`
  * Reference: [Lesson 8 Transitions & Animations](https://learn.shayhowe.com/advanced-html-css/transitions-animations/)

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
