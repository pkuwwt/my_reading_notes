
# WebMercator

WebMercator is a transformation between uniform square [0,1]x[0,1] and the global interval [-pi,pi]x[-0.5pi,0.5pi]. The main usage of WebMercator is to encode the tiling map service as a quad tree. Otherwise, we need two quad trees if we use geographic coordinates to divide the globe.

## Uniform to radian
```
lon = (x - 0.5) * 2 * pi
y1 = (y - 0.5) * 2 * pi
y2 = exp(2 * y1)
y3 = (y2 - 1) / (y2 + 1)
lat = arcsin(y3)
```

After the transformation, we can get the interval [-85.05112, 85.05112] of the latitude. So in WebMercator, the polar regions are disgarded.

## Radian to uniform

```
x = lon * 0.5 / pi + 0.5
y1 = sin(lat)
y2 = (1 + y1) / (1 - y1)
y = ln(y2) * 0.25 / pi + 0.5
```
