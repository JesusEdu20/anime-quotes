async function getQuoteByAnimeName(name){
    console.log(name)
    const response = await fetch(`https://animechan.xyz/api/random/anime?title=${name}`)
    const quotes = await response.json()
     
    return quotes
}
 

async function displayQuote(animeTitle, quoteElement){
    const {anime, character, quote} = await getQuoteByAnimeName(animeTitle)

    const result = `<div class="quote__item">
    <h2 class="quote__anime-title">${anime}</h2>
      <p class="quote__anime-character">${character}</p>
      <p class="quote__anime-quote">${quote}</p>
    </div>` 

    quoteElement.innerHTML = result
}

function getElements (...classes){
    const elementList = classes.map(cls => document.querySelector(`.${cls}`));
    return elementList
}

async function generateQuoteHandler(containerClass, inputClass, btnClass){
    const [quoteElement, inputElement, buttonElement] = getElements(containerClass, inputClass, btnClass);
    buttonElement.addEventListener("click", () => {displayQuote(inputElement.value, quoteElement)})
}

generateQuoteHandler("quote-container", "search-bar__input", "search-bar__btn");

/* 
{anime: 'Naruto', 
character: 'Pain', 
quote: 'Even children are forced to grow up in the face of pain.'}
*/
