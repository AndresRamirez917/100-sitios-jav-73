async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const coctails = await result.json();
    console.log(coctails);
    const namesArr = ["Dinner", "Gift", "Show"];
    const linksArr = ["dinner", "gift", "show"];
    //const randCoctail = coctails.drinks.sort(()=> 0.5 - Math.random()).slice(0,6);
    const coctilSlice = coctails.drinks.slice(0, 3);
    coctilSlice.forEach((element, index) => {
        //const nombre = namesArr[index % namesArr.length]; // Asigna un nombre del array
        const box = document.createRange().createContextualFragment(`
            
                <div class="box box-1">
                    <img src="${element.strDrinkThumb}" alt="">
                    <a href="${linksArr[index]}.html?img=${encodeURIComponent(element.strDrinkThumb)}" class="btn" onclick="saveImage('${element.strDrinkThumb}')">${namesArr[index]}</a>
                </div>
            
            `)
            const gift_flex = document.querySelector('.gift-flex');
            gift_flex.append(box);
    });
}

function saveImage(imgUrl) {
    localStorage.setItem('savedImage', imgUrl);
}

getData()