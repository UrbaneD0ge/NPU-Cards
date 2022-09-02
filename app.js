const btn = document.querySelector('#geo');

btn.addEventListener('click', geoFindMe);

// prevent form submission

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
    status.innerHTML = '';
  }
  function error() {
    status.innerHTML = 'Unable to retrieve your location';
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

