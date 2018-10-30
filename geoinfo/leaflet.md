
# Leaflet

## Preventing panning outside of bounds

```javascript
var map = new L.Map('map', {
  center: bounds.getCenter(),
  zoom: 5,
  layers: [osm],
  maxBounds: bounds,
  maxBoundsViscosity: 1.0
});
```
where `maxBoundsViscosity` has a value between 0 and 1 representing how much the map resists being dragged outside of bounds.
