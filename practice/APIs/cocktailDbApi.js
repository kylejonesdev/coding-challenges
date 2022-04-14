document.getElementById('search').addEventListener('click', getFetch)
document.getElementById('rotate').addEventListener('click', startRotation)
document.getElementById('pause').addEventListener('click', stopRotation)
let runningInterval;

function startRotation() {
    getFetch();
    runningInterval = setInterval(getFetch, 10000);
}

function stopRotation() {
    clearInterval(runningInterval);
}

function getFetch() {
    const choice = document.querySelector('input').value
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + choice;
    let resultingID = 0;
    let relatedDrink = fetch(url)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * (data.drinks.length - 1));
            resultingID = data.drinks[randomIndex].idDrink;
            return fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + resultingID)
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
    relatedDrink.then(res => res.json())
    .then(data => {
        console.log(data);
        let sel = data.drinks[0];
        document.getElementById('drink-name').innerText = sel.strDrink;
        document.getElementById('drink-image').src = sel.strDrinkThumb;

        function listIngredients() {
            let ingredients = ''
            for(let i = 1; i <= 15; i++) {
                let tempIngredient = data.drinks[0]['strIngredient' + i];
                if(tempIngredient) ingredients += '<li>' + tempIngredient + '</li>';
            }
            return ingredients;
        }
        document.getElementById('ingredients').innerHTML = listIngredients();
        document.getElementById('instructions').innerText = sel.strInstructions;
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
}
