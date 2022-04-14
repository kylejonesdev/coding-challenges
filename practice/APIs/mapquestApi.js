import mapquestAPI from '../ignore/APIKeys';

document.getElementById('search').addEventListener('click', doFetch);

let lat = 0;
let lng = 0;

//Get API from city, state combo
function doFetch() {
    let location = document.querySelector('input').value;
    fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=${mapquestAPI}&location=${location}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        lat = data.results[0].locations[0].latLng.lat;
        lng = data.results[0].locations[0].latLng.lng;
        console.log(`${lat} ${lng}`);
        document.getElementById('lat').innerText = lat;
        document.getElementById('lng').innerText = lng;
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })
}

