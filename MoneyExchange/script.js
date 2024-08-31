const exchange=document.getElementById("btn");
const currency=document.getElementById("currency");
const flag1=document.getElementById("flag1");
const flag2=document.getElementById("flag2");
const from=document.getElementById("from2");
const to=document.getElementById("to2");
const rate=document.getElementById("rates");
const dropdown=document.querySelectorAll(".dropdown select")
for (let select of dropdown){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        select.append(newOption);
    }
    select.addEventListener("click",(e)=>{
        updateFlag(e.target);
    });
}
function updateFlag(e){
    let currCode=e.value;
    let countryCode=countryList[currCode];
    img=e.parentElement.querySelector("img");
    img.setAttribute('src',`https://flagsapi.com/${countryCode}/flat/64.png`);
}
async function convertor(e){
    e.preventDefault();
    let country1=from.value.toLowerCase();
    let country2=to.value.toLowerCase();
    let val=currency.value;
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${country1}.json`);
        const data = await response.json();
        let amt=(data[country1][country2]);
        amt=amt.toFixed(4);
        let num=val*amt;
        rate.innerHTML=`${val+" "+country1.toUpperCase()} = ${num+" "+country2.toUpperCase()}`;
}
exchange.addEventListener('click',(e)=>{
    convertor(e);
});
window.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        convertor(e);
    }
});