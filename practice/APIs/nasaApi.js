//import nasaAPI from '../ignore/APIKeys';
//https://api.nasa.gov/planetary/apod?api_key=${nasaAPI}

let listOfStorms = '';
fetch(`https://eonet.gsfc.nasa.gov/api/v3/events?days=30&category=severeStorms`)
.then(res => res.json())
.then(data => {
    console.log(data);
    data.events.map((item, index) => listOfStorms += `<li>${item.title}</li>`);
    document.querySelector('ul').innerHTML = listOfStorms;
})
.catch(err => {
    console.log(`Error: ${err}`);
})