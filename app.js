const btn = document.querySelector('#geo');

btn.addEventListener('click', geoFindMe);

// prevent form submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Get the location of the user and put address in the input field
function geoFindMe() {
  const status = document.querySelector('#status');
  status.innerHTML = 'Getting Location...';
  if (!navigator.geolocation) {
    status.innerHTML = 'Geolocation is not supported by your browser';
    return;
  }
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const lat = document.querySelector('#lat');
    const lon = document.querySelector('#lon');
    lat.value = latitude;
    lon.value = longitude;
    status.innerHTML = "location found!";
    lat.innerHTML += latitude;
    lon.innerHTML += longitude;
    // get address from lat and lon
  }
  function error() {
    status.innerHTML = 'Unable to retrieve your location';
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

// send address to gis.atlantaga.gov/arcgis/rest/services/AGOL/AGOL_AddressLocator/GeocodeServer/findAddressCandidates
address = document.querySelector('#address').value;

// html encode address
const encodedAddress = encodeURIComponent(address);

// on address submit, get lat and lon from gis.atlantaga.gov/arcgis/rest/services/AGOL/AGOL_AddressLocator/GeocodeServer/findAddressCandidates
const addy = document.querySelector('form');
form.addEventListener('submit', (e) => {
  fetch(`https://gis.atlantaga.gov/arcgis/rest/services/AGOL/AGOL_AddressLocator/GeocodeServer/findAddressCandidates?SingleLine=${encodedAddress}&outFields=*&f=pjson`)
    .then(response => response.json())
    .then(data => console.log(data));
  // get NPU from response data and display it on the page
});
