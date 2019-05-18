!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.webMercatorTiles=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// web mercator projection extent
var ProjExtent = {
  left: -20037508.342789244,
  right: 20037508.342789244,
  bottom: -20037508.342789244,
  top: 20037508.342789244
}
//tile seize
var  TileSize = 256
// resolutions
var Resolutions = [
  156543.03392804097, 78271.51696402048, 39135.75848201024,
  19567.87924100512, 9783.93962050256, 4891.96981025128, 2445.98490512564,
  1222.99245256282, 611.49622628141, 305.748113140705, 152.8740565703525,
  76.43702828517625, 38.21851414258813, 19.109257071294063, 9.554628535647032,
  4.777314267823516, 2.388657133911758, 1.194328566955879, 0.5971642834779395,
  0.29858214173896974, 0.14929107086948487, 0.07464553543474244,
  0.03732276771737122, 0.01866138385868561]


var getTiles = function(extent,z) {
  //coordinated in pixel
  lx = Math.floor((extent.left - ProjExtent.left)/Resolutions[z]),
  rx = Math.floor((extent.right - ProjExtent.left)/Resolutions[z]),
  by = Math.floor((ProjExtent.top - extent.bottom )/Resolutions[z]),
  ty = Math.floor((ProjExtent.top - extent.top )/Resolutions[z]),
  // tile numbers
  lX = Math.floor(lx/TileSize),
  rX = Math.floor(rx/TileSize),
  bY = Math.floor(by/TileSize),
  tY = Math.floor(ty/TileSize),
  //top left tile position of top-left tile with respect to window/div
  top = topStart = (tY * TileSize) - ty,
  left = (lX * TileSize) - lx,
  tiles = [];
  for (var i=lX; i<=rX; i++) {
    top = topStart;
    for(var j=tY; j<=bY; j++) {
      tiles.push({
        X:i,
        Y:j,
        Z:z,
        top: top,
        left: left
      });
      top +=TileSize;
    }
    left +=TileSize;
  }
  return tiles;
};


// Static funtion to get tile extent in web mercator coordinates
// params: {z: zoom leve, x: x tile no, y: y tile no}
getTiles.TileExtent = function (tile) {
  var right = ProjExtent.left + tile.x * TileSize * Resolutions[tile.z]
  var left = right - TileSize * Resolutions[tile.z]
  var bottom = ProjExtent.top - tile.y * TileSize * Resolutions[tile.z]
  var top = bottom + TileSize * Resolutions[tile.z]
  return {left: left, right: right, bottom: bottom, top: top,
    res: Resolutions[tile.z]
  }
}

module.exports = getTiles

},{}]},{},[1])(1)
});


//# sourceMappingURL=web-mercator-tiles.js.map