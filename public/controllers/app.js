const btn = document.querySelector('#geo');
// const addySearch = document.querySelector('#addySearch');

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
    status.innerHTML = "Location found: " + latitude + ", " + longitude;
    getNPU(latitude, longitude);
  }
  function error() {
    status.innerHTML = 'Unable to retrieve your location';
  }
  navigator.geolocation.getCurrentPosition(success, error);
  return;
});

function getNPU(latitude, longitude) {
  let results = document.getElementById('results');
  let npuCard = document.getElementById('npuCard');
  let npuLink = document.getElementById('npuLink');
  fetch(`https://services5.arcgis.com/5RxyIIJ9boPdptdo/arcgis/rest/services/Official_NPU/FeatureServer/0/query?where=1%3D1&outFields=NAME&geometry=${longitude}%2C${latitude}%2C${longitude}%2C${latitude}&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&returnGeometry=false&outSR=4326&f=json`)
    .then(response => response.json())
    .then(data => {
      console.log(data.features[0].attributes.NAME);
      const npu = data.features[0].attributes.NAME;
      results.innerText = npu;
      npuCard.style.display = 'block';
      npuLink.href = `/npu?NPU=${npu}`;
    });
}

