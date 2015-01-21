module.exports = function(extent,z) {
  // web mercator projection extent
  var projExtent = {
      left: -20037508.342789244,
      right: 20037508.342789244,
      bottom: -20037508.342789244,
      top: 20037508.342789244
    }, 
    //tile seize
    size = 256,
    // resolutions
    res = [156543.03392804097, 78271.51696402048, 39135.75848201024, 19567.87924100512, 9783.93962050256, 4891.96981025128, 2445.98490512564, 1222.99245256282, 611.49622628141, 305.748113140705, 152.8740565703525, 76.43702828517625, 38.21851414258813, 19.109257071294063, 9.554628535647032, 4.777314267823516, 2.388657133911758, 1.194328566955879, 0.5971642834779395, 0.29858214173896974, 0.14929107086948487, 0.07464553543474244, 0.03732276771737122, 0.01866138385868561],
    //coordinated in pixel
    lx = Math.floor((extent.left - projExtent.left)/res[z]),
    rx = Math.floor((extent.right - projExtent.left)/res[z]),
    by = Math.floor((projExtent.top - extent.bottom )/res[z]),
    ty = Math.floor((projExtent.top - extent.top )/res[z]),
    // tile numbers
    lX = Math.floor(lx/size),
    rX = Math.floor(rx/size),
    bY = Math.floor(by/size),
    tY = Math.floor(ty/size),
    //top left tile position of top-left tile with respect to window/div 
    top = topStart = (tY * size) - ty,
    left = (lX * size) - lx,
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
      top +=size;
    }
    left +=size;
  }
  return tiles;
};
