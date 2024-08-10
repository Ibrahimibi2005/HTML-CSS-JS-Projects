const toggle=document.querySelector('input[type=checkbox]');
const nav=document.querySelector('nav');
const toggleText=document.getElementById('toggles-text');
const img1=document.getElementById('image1');
const img2=document.getElementById('image2');
const img3=document.getElementById('image3');
const symbol=document.getElementById('symbol');
function modeChange(Event){
    if(Event.target.checked){
        toggleText.innerHTML="Dark Mode";
        document.documentElement.setAttribute('data-theme','dark');

        img1.setAttribute('src',"./images/undraw_feeling_proud_light.svg");
        img2.setAttribute('src',"./images/undraw_conceptual_idea_light.svg");
        img3.setAttribute('src',"./images/undraw_proud_coder_light.svg");
        symbol.classList.replace('fa-sun','fa-moon');
        nav.classList.add('color');
    }
    else{
        toggleText.innerHTML="Light Mode";
        document.documentElement.setAttribute('data-theme','light');

        img1.setAttribute('src',"./images/undraw_feeling_proud_dark.svg");
        img2.setAttribute('src',"./images/undraw_conceptual_idea_dark.svg");
        img3.setAttribute('src',"./images/undraw_proud_coder_dark.svg");

        symbol.classList.replace('fa-moon','fa-sun');
        nav.classList.remove('color');
    }
}
toggle.addEventListener('change',modeChange);