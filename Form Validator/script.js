const form=document.getElementById('form');
const pass1=document.getElementById('password1');
const pass2=document.getElementById('password2');
const message=document.getElementById('message');
const messageContainer=document.querySelector('.message-container');
let valid=false;
let pass=false;
function validateForm(){
    valid=form.checkValidity();
}
form.addEventListener('submit',function ProcessData(e){
    e.preventDefault();
    validateForm();
       if(!valid){  message.style.color="red";
         message.textContent="Please Fill Out All Fields";
         messageContainer.style.borderColor='red';
        }
        if(valid && pass1.value===pass2.value){
            pass1.style.border='1px solid green';
            pass2.style.border='1px solid green';
            messageContainer.style.borderColor='green';
            message.textContent="Registered Successfully";  
            message.style.color='green';          
        }
        else if(valid&& pass1.value!=pass2.value){
            pass1.style.border='1px solid red';
            pass2.style.border='1px solid red';
            messageContainer.style.borderColor='red';
            message.textContent="Password Mismatched!";  
            message.style.color='red';           
        }

})