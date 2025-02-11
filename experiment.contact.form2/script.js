//prwta 8a kanw validate
function validationForm(event){
    event.preventDefault();
    const username = document.getElementById('name').value.trim();
    const errorMessage = document.getElementById('error-message');
    const email = document.getElementById('email').value.trim();
    const errorEmail = document.getElementById('error-email');
    const phone = document.getElementById('phone').value.trim();
    const errorPhone = document.getElementById('error-phone');
    const address = document.getElementById('address').value.trim();
    const errorAddress = document.getElementById('error-address');
    const message = document.getElementById('message').value.trim();
    const errorMessageContent = document.getElementById('error-message-msg');

    
console.log('validationForm');
    if(username.length < 6 ){
        errorMessage.textContent = 'required 6 characters at least'
        
        //alert('few characters');
        }else{
            errorMessage.textContent = '';
        }

        // const emailPattern = '';
        if(email.length < 8 && !email.includes('@')){
            errorEmail.textContent = 'please enter an email'
        }else{
            errorEmail.textContent = '';

        }
    
        if(phone.length > 10){
            errorPhone.textContent = 'your phone number is incorrect'
    
        } else{
            errorPhone.textContent = '';
        }
        if (address.length == 0){
            errorAddress.textContent = 'address not valid';
        }else{errorAddress.textContent = '';

        }
        if (message.length < 15){
            errorMessageContent.textContent = 'your message is too short'
        }else{
            errorMessageContent.textContent = '';
        }




}



document.getElementById('contact-form').addEventListener('submit', validationForm);
