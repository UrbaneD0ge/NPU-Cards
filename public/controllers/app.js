const btn = document.querySelector('#geo');
const addySearch = document.querySelector('#addySearch');

btn.addEventListener('click', (event) => {
  // // prevent form submission
  event.preventDefault();
  // Get the location of the user and put address in the input field
  const status = document.querySelector('#status');
  status.innerHTML = 'Getting Location...';
  if (!navigator.geolocation) {
    status.innerHTML = 'Geolocation is not supported by your browser';
    return;
  }
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // const lat = document.querySelector('#lat');
    // const lon = document.querySelector('#lon');
    // lat.value = latitude;
    // lon.value = longitude;
    status.innerHTML = "Location found: " + latitude + ", " + longitude;
    return latitude, longitude;
  }
  function error() {
    status.innerHTML = 'Unable to retrieve your location';
  }
  navigator.geolocation.getCurrentPosition(success, error);
});

addySearch.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(`https://services5.arcgis.com/5RxyIIJ9boPdptdo/arcgis/rest/services/Official_NPU/FeatureServer/?geometry=${latitude},${longitude}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&outFields=*&returnGeometry=false&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=}`)
    .then((response) => {
      console.log(response);
    });
});
