

fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
.then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem');
                console.log(`Status Code: ${response.status}`);
                return;
            }
            return response.json();
        }
    )

    .then((beers) => {
         renderPage(beers);
        // что-то делаем с данными
    })

    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });

let listOfBeer = document.createElement("div");
document.body.appendChild(listOfBeer);


function renderPage(beers){
  beers.map(beer=>{
  console.log(beer)
        let newBeers = document.createElement('div');
        newBeers.classList.add('product_item');
        const nameing = document.createElement('div');
        nameing.classList.add('nameing');
        newBeers.insertAdjacentElement('afterbegin', nameing);
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img_product');
        nameing.insertAdjacentElement('afterbegin', imgContainer);
        const input = document.createElement('input');
        input.classList.add('card_id');
        input.type = 'hidden';
        imgContainer.insertAdjacentElement('afterbegin', input);
        const image = document.createElement('img');
        image.classList.add('img_card');
        image.src = beer.image_url;
        imgContainer.insertAdjacentElement('beforeend', image);
        const content = document.createElement('div');
        content.classList.add('content_product');
        imgContainer.insertAdjacentElement('afterend', content);
        const header = document.createElement('h3');
        header.innerHTML = beer.name;
        content.insertAdjacentElement('afterbegin', header);
        const stock = document.createElement('div');
        stock.classList.add('count_in_stock');
        content.insertAdjacentElement('afterend', stock);
        const par = document.createElement('p');
        par.innerHTML = beer.description;
        stock.insertAdjacentElement('afterbegin', par);

    listOfBeer.appendChild(newBeers)
})

}
