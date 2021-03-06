
# Cesium.js


## Cesium Rendering Pipeline

### How does the ImageryProvider work?

The call stack of `ImageryProvider.prototype.requestImagery`:

  * viewer.scene: `Scene.prototype.render`
  * scene.globe: `Globe.prototype.endFrame`
  * globe.surface: `QuadtreePrimitive.prototype.endFrame`
  * surface.tileProvider: `GlobeSurfaceTileProvider.prototype.loadTile(frameState, tile)`
  * `GlobeSurfaceTile.processStateMachine(tile,...)`
  * QuadtreeTile.data.imagery: `TileImagery.prototype.processStateMachine(tile, frameState)`
  * tileImagery.loadingImagery: `Imagery.prototype.processStateMachine(frameState,...)`
  * imagery.imageryLayer: `ImageryLayer.prototype._requestImagery`
  * imageryLayer.imageryProvider: `ImageryProvider.prototype.requestImagery`
  
So basically, `QuadtreePrimitive` will determine if current rendered tile need to be refined. There is an instance of `TileReplacementQueue` in `QuadtreePrimitive` used to maintain a list of cache.

`GlobeSurfaceTileProvider` uses the `TilingScheme` of the terrain provider, i.e. `GeographicTilingScheme` by default.

## Cesium Data Types

## References

  * [Cesium Tutorials](https://cesiumjs.org/tutorials/)
  * [Graphics Tech in Cesium - Rendering a Frame](https://cesium.com/blog/2015/05/14/graphics-tech-in-cesium/)
  * [Performance Tips for Visualizing Lots of Points](https://cesium.com/blog/2016/03/02/performance-tips-for-points/)
  * [cesium编程入门(十一)常见问题](https://www.kancloud.cn/elusive/ceshi/544168)
  * [Cesium Blogs](https://www.cnblogs.com/fuckgiser/tag/Cesium/default.html?page=2) and its [Demos](https://pasu.github.io/ExamplesforCesium/examples/examples.html#Primer)
