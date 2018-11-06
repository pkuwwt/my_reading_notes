
# Graphics Tools

## ImageMagick

### Replace color in an image

```bash
convert input.png -fuzz 50% -opaque red -fill white output.png
```
which convert all matched `red` pixels (with `50%` fuzziess) to `white` color.

## GraphicsMagick
