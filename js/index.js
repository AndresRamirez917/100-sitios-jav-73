async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const coctails = await result.json();
    console.log(coctails);
    //const randCoctail = coctails.drinks.sort(()=> 0.5 - Math.random()).slice(0,6);
    const coctilSlice = coctails.drinks.slice(0, 3);
    coctilSlice.forEach(element => {
        const box = document.createRange().createContextualFragment(`
            
                <div class="box box-1">
                    <img src="${element.strDrinkThumb}" alt="">
                    <a href="dinner.html" class="btn">dinner</a>
                </div>
            
            `)
            const gift_flex = document.querySelector('.gift-flex');
            gift_flex.append(box);
    });
}
getData()