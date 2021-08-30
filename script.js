const lodeQuote=()=>{
               fetch('https://api.kanye.rest/')
               .then(res=>res.json())
               .then(data=>displayQuote(data))

}
const displayQuote=(quote)=>{
               console.log(quote.quote)
               const myQuote=document.getElementById('quote')
               myQuote.innerText=quote.quote;
}
