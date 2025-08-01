document.addEventListener("DOMContentLoaded", function () {

var map = new sop.Map("map");
map.setView(sop.utmk(954553, 1955720), 8);

// GeoJSON 파일 불러오기
fetch("/static/map_viewer/data/jongno.geojson")
  .then(response => response.json())
  .then(geoData => {
    sop.geoJson(geoData, {
      style: function () {
        return {
          weight: 2,
          opacity: 1,
          color: "#565656",
          dashArray: "3",
          fillOpacity: 0.7
        };
      },
      onEachFeature: function (feature, layer) {
        layer.bindInfoWindow(feature.properties.Description);
      }
    }).addTo(map);
  });
});
