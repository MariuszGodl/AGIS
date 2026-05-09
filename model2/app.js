Cesium.Ion.defaultAccessToken =           
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2Y2U0ZWU5ZC04OGI4LTRmZTUtOGE1NS03YTc5ZDg0MWFiMTEiLCJpZCI6NDI2MzU4LCJpc3MiOiJodHRwczovL2lvbi5jZXNpdW0uY29tIiwiYXVkIjoidW5kZWZpbmVkX2RlZmF1bHQiLCJpYXQiOjE3Nzc3MDQ5NjJ9.P4F-Kfl7axTX1rZ9ZNfA6hz0DLEhjmkgqpi3MS6CRDc";


const MODEL_SCALE = 1.6;
 
const LONGITUDE = 18.6496700; 
const LATITUDE  = 54.3542800;
const HEIGHT    = 35.45;

const MODEL_HEADING = Cesium.Math.toRadians(160);
const MODEL_PITCH   = Cesium.Math.toRadians(0);
const MODEL_ROLL    = Cesium.Math.toRadians(0);

const YEAR = 2026;
const MONTH = 4;
const DAY = 29;
const HOUR = 18;
const MINUTE = 0;

const viewer = new Cesium.Viewer("cesiumContainer", {
  terrain: Cesium.Terrain.fromWorldTerrain(),
  shadows: true,
  shouldAnimate: false
});


viewer.scene.globe.enableLighting = true;
viewer.scene.sun.show = true;
viewer.scene.moon.show = true;

viewer.scene.highDynamicRange = true;
viewer.shadows = true;

viewer.scene.shadowMap.darkness = 0.4;
viewer.scene.shadowMap.size = 2048;


const date = Cesium.JulianDate.fromDate(
  new Date(Date.UTC(YEAR, MONTH - 1, DAY, HOUR, MINUTE))
);

viewer.clock.currentTime = date;
viewer.clock.startTime = date;
viewer.clock.stopTime = Cesium.JulianDate.addHours(
  date,
  24,
  new Cesium.JulianDate()
);

viewer.clock.multiplier = 1;
viewer.clock.shouldAnimate = false;


const position = Cesium.Cartesian3.fromDegrees(
  LONGITUDE,
  LATITUDE,
  HEIGHT
);

const entity = viewer.entities.add({
  position: position,

  orientation: Cesium.Transforms.headingPitchRollQuaternion(
    position,
    new Cesium.HeadingPitchRoll(
      MODEL_HEADING,
      MODEL_PITCH,
      MODEL_ROLL
    )
  ),

  model: {
    uri: "assets/zegar.glb",
    scale: MODEL_SCALE,
    shadows: Cesium.ShadowMode.ENABLED
  }
});


viewer.zoomTo(entity);