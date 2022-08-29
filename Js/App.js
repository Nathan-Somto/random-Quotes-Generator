const generateQuote= document.querySelector(".btn");
const quoteText =document.querySelector("#quoteText");
const quoteAuthor =document.querySelector("#quoteAuthor");
function random(number){
    return Math.floor(Math.random()*number);
}
function getQuote(){
    let quoteNumber;
fetch("https://type.fit/api/quotes").then((response)=>response.json())
.then((data)=>{
    quoteNumber=random(data.length);
    quoteText.textContent=" "+data[quoteNumber].text;
    quoteAuthor.textContent=data[quoteNumber].author;
})
}
generateQuote.addEventListener('click',getQuote);