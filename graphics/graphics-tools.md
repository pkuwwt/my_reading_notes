
# Graphics Tools

## ImageMagick

### Replace color in an image

```bash
convert input.png -fuzz 50% -opaque red -fill white output.png
```
which convert all matched `red` pixels (with `50%` fuzziess) to `white` color.

### Replace black background to transparent

```bash
convert input.jpg -fuzz 50% -transparent black output.png
```

### Generating GIF from images

```bash
convert -loop 0 -delay 100 input1.png input2.png output.gif
```
which create an endless GIF with interval `100ms`.

## GraphicsMagick
