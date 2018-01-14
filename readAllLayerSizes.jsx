var allLayers = new Array();
var theLayers = collectAllLayers(app.activeDocument, 0);


function collectAllLayers (theParent, level)
{
  for (var m = theParent.layers.length - 1; m >= 0; m--)
  {
    var theLayer = theParent.layers[m];
    if (theLayer.typename != "ArtLayer")
    {
      allLayers.push(level + theLayer.name);
      collectAllLayers(theLayer, level + 1)
    }
  }
}