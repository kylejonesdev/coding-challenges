import { fecAPI } from "../ignore/APIKeys";

const fecSearch = document.getElementById('fec-search').addEventListener('click', fetchFEC);

function fetchFEC() {
    let state = document.getElementById('state').value;
    let active = document.getElementById('active').checked;
    let activeURL = '';
    if(active) activeURL = '&candidate_status=C';
    let listNames = '';
    fetch(`https://api.open.fec.gov/v1/candidates/search/?page=1&state=${state}&sort_nulls_last=false${activeURL}&per_page=100&sort_null_only=false&api_key=${fecAPI}&sort_hide_null=false&sort=name`)
    .then(res => res.json())
    .then(data => {
        let arr = data.results;
        arr.sort((a, b) => b.active_through - a.active_through)
            .forEach(item => {
                listNames += '<li>' + item.name + ' ' + item.active_through + '</li>';
            }
        )
        document.getElementById('interesting-1').innerHTML = listNames;
        console.log(arr);
        //return (data.results);
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
    
}