
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

Anothre way
```javascript
var map = L.map('map').setView([51.505, -0.09], 3);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var southWest = L.latLng(-89.98155760646617, -180),
northEast = L.latLng(89.99346179538875, 180);
var bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});
```
