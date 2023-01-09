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
    status.innerHTML = "Location found! " + latitude + ", " + longitude;
  }
  function error() {
    status.innerHTML = 'Unable to retrieve your location';
  }
  navigator.geolocation.getCurrentPosition(success, error);
}
);

addySearch.addEventListener('click', (event) => {
  fetch