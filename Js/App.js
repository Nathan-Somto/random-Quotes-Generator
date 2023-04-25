const generateQuote= document.querySelector(".btn");
const quoteText =document.querySelector("#quoteText");
const quoteAuthor =document.querySelector("#quoteAuthor");
const loader = document.querySelector('.loader');
const container = document.querySelector('.container');
/**
 * 
 * @param {number} number 
 * @returns a random number from 0 to number
 */
function random(number){
    return Math.floor(Math.random()*number);
}

/**
 * @description - fetches a random quote in the array of objects and prints the quote and author.
 */

async function getQuote(){
container.classList.add( 'none');
loader.classList.remove('none');

try{    
let response = await fetch("https://type.fit/api/quotes");
let data = await response.json();
container.classList.remove( 'none');
const{text,author} = data[random(data.length)];
quoteText.textContent =`${text}`;
quoteAuthor.textContent=`${author ?? 'no author'}`;
}
catch(err){
    console.log(err);
}
finally{
    loader.classList.add("none");
}

}

generateQuote.addEventListener('click',getQuote);