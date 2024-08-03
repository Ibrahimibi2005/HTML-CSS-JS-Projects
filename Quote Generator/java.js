const quoteContainer=document.getElementById("quote-container");
const quote=document.getElementById("quote");
const Author=document.getElementById("author");
const twitterButton=document.getElementById("twitter");
const newQuoteBtn=document.getElementById("new-quote");
const loader=document.getElementById('load');
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}
function complete(){
    if(!loader.hidden){
        loader.hidden=true;
        quoteContainer.hidden=false; 
    }
}
async function getQuote(){
    loading();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const apiurl='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response=await fetch(proxyurl + apiurl);
        const data=await response.json();
        if(data.quoteAuthor===""){
            Author.innerHTML="~UNKNOWN";
        }
        else{
        Author.innerHTML="~"+data.quoteAuthor;
    }
        if(data.quoteText.length >120){
            quote.classList.add("long-quote")
        }
        else{
            quote.classList.remove("long-quote")
    }
        quote.innerHTML=data.quoteText;
        console.log(data);
    }
    catch(error){
        console.log('whoops,no quote',error);
    }
    complete();
}
function TQ(){
    const Q=quote.innerText;
    const A=Author.innerText;
    tURL=`https://twitter.com/intent/tweet?text=${Q}-${A}`;
    window.open(tURL,"_blank");
}
newQuoteBtn.addEventListener('click',getQuote);
twitterButton.addEventListener('click',TQ);
getQuote()