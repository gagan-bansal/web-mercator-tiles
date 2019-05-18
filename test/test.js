var expect = require('chai').expect,
  webMercatorTiles = require('../');

describe('Calculate set of tiles for given map extent', function() {
  it('test case 1', function() {
    var expected = [
      {left:127, top:64, Z:12, X:1238, Y:1513},
      {left:127, top:-192, Z:12, X:1238, Y:1512},
      {left:383, top:64, Z:12, X:1239, Y:1513},
      {left:-129, top:64, Z:12, X:1237, Y:1513},
      {left:383, top:-192, Z:12, X:1239, Y:1512},
      {left:-129, top:-192, Z:12, X:1237, Y:1512}
    ],
    mapExt = {"left":-7929831.7499857,"bottom":5227055.1160079,"right":-7910263.8707475,"top":5236839.0556271},
    zoom = 12;
    expect(webMercatorTiles(mapExt,zoom)).to.deep.include.members(expected);
  });
  it('test case 2', function() {
    var expected = [
      {left:404, top:127, Z:13, X:2477, Y:3026},
      {left:148, top:127, Z:13, X:2476, Y:3026},
      {left:404, top:383, Z:13, X:2477, Y:3027},
      {left:404, top:-129, Z:13, X:2477, Y:3025},
      {left:148, top:383, Z:13, X:2476, Y:3027},
      {left:148, top:-129, Z:13, X:2476, Y:3025},
      {left:660, top:127, Z:13, X:2478, Y:3026},
      {left:-108, top:127, Z:13, X:2475, Y:3026},
      {left:660, top:383, Z:13, X:2478, Y:3027},
      {left:660, top:-129, Z:13, X:2478, Y:3025},
      {left:-108, top:383, Z:13, X:2475, Y:3027},
      {left:-108, top:-129, Z:13, X:2475, Y:3025}
    ];
      mapExt = {"left":-7927815.723365,"bottom":5227064.6706365,"right":-7912279.8973682,"top":5236829.5009985}
      zoom = 13;
    expect(webMercatorTiles(mapExt,zoom)).to.deep.include.members(expected);
  });

  it('TileExtent', function() {
		var tile = {z:12, x: 2953, y: 1697}
		var expected = {
			left: 8844681.416934315,
			right: 8854465.356554817,
			bottom: 3434162.806796398,
			top: 3443946.746416901,
      res: 38.21851414258813
    }
		expect(webMercatorTiles.TileExtent(tile)).to.deep.equal(expected);
  })

});
