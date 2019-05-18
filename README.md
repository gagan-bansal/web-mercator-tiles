# web-mercator-tiles
Calculate map tiles for given map extent and zoom level. Considering map extent coordinates are in sperical (web) mercator projection.
## installation

```
npm install web-mercator-tiles
```

## usage
```
var webMercatorTiles = require('web-mercator-tiles');
function: webMercatorTiles(extent,zoom)
parameters:
  extent: map extent of window or div in spherical mercator projeection (meters)
    {
      left: coordinate in meter,
      right: coordinate in meter,
      bottom: coordinate in meter,
      top: coordinate in meter
    }
  zoom: zoom level as integer
output: array of tiles object, where tile object is 
  {
    X: tile number in x direction
    Y: tile number in y direction 
    Z: tile number for zoom
    top: top of tile image position in window as pixel
    left: left of tile image position in window as pixel
  }
```

**TileExtent**, a static funtion to get tile extent in web mercator coordinates

param: {z: zoom leve, x: x tile no, y: y tile no}

### example
```javascript
var webMercatorTiles = require('web-mercator-tiles'),
  mapExtent = {
    left:-7929831.7499857,
    bottom:5227055.1160079,
    right:-7910263.8707475,
    top:5236839.0556271
  },
  zoom = 12;
tiles = webMercatorTiles(mapExtent,zoom);
// tiles are
/*
[ { X: 1237, Y: 1512, Z: 12, top: -192, left: -129 },
  { X: 1237, Y: 1513, Z: 12, top: 64, left: -129 },
  { X: 1238, Y: 1512, Z: 12, top: -192, left: 127 },
  { X: 1238, Y: 1513, Z: 12, top: 64, left: 127 },
  { X: 1239, Y: 1512, Z: 12, top: -192, left: 383 },
  { X: 1239, Y: 1513, Z: 12, top: 64, left: 383 } ]
*/

// Tile Extent
var tile = {z:12, x: 2953, y: 1697}
var extent = webMercatorTiles.TileExtent(tile)

// extent is
/*
{
  left: 8844681.416934315,
  right: 8854465.356554817,
  bottom: 3434162.806796398,
  top: 3443946.746416901,
  res: 38.21851414258813
}
*/
```
## Similar
Check [map-the-tiles](https://www.npmjs.com/package/map-the-tiles) for projections other than spherical mercator, and having spherical mecator as default projection.
## developing
Once you run
 
```npm isntall```

then for running test 

```npm run test```

to create build

```npm run build```

## license
This project is licensed under the terms of the MIT license.
