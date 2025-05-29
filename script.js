'use strict';
'use strict';
const fileInput = document.getElementById('avatar');

const uploadedImg = document.querySelector('.change-avatar img');

const newImage = document.getElementById('other-avatar');

const removeImage = document.querySelector('.remove');

const nameInput = document.getElementById('u-name');

const emailInput = document.getElementById('u-email');

const githubInput = document.getElementById('u-github');

const errorMessage = document.querySelector('.error');

const ticketContent = document.querySelector('.ticket-content');


const submitButton = document.querySelector('.submit-form-btn');
let symbol = String.fromCodePoint(0x24D8);

const fileValidation = () => {
    if (!uploadedImg.getAttribute('src')) {
        document.querySelectorAll('.error')[0].textContent = `${symbol}  File too large. Please upload a photo under 500kB`;
    } else if ((fileInput.files.length > 0 || newImage.files.length > 0) && (fileInput.files[0].size > 500000 || fileInput.files[0].size == 500000)) {

        document.querySelectorAll('.error')[0].textContent = `${symbol}  File too large. Please upload a photo under 500kB`;


    } else {
       document.querySelectorAll('.error')[0].textContent = null;
        fileInput.style.border = null;
        return true;
    }
};


const nameValidation = () => {
    if (!nameInput.value) {
        nameInput.nextElementSibling.textContent = `${symbol}  Please enter your name`;
        nameInput.style.border = '1.7px solid rgb(175, 61, 61)';

    } else {
        nameInput.nextElementSibling.textContent = null;
        nameInput.style.border = null;
        return true;

    }
};

const emailValidation = () => {
    const PATTERN = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailInput.value) {
        emailInput.nextElementSibling.textContent = `${symbol}  Please enter your email`;
        emailInput.style.border = '1.7px solid rgb(175, 61, 61)';
    } else if (!PATTERN.test(emailInput.value)) {
        emailInput.nextElementSibling.textContent = `${symbol}  Enter valid email`;
        emailInput.style.border = '1.7px solid rgb(175, 61, 61)';


    } else {
        emailInput.nextElementSibling.textContent = null;
        emailInput.style.border = null;
        return true;

    }
};

const githubValidation = () => {
    if (!githubInput.value) {
        githubInput.nextElementSibling.textContent = `${symbol}  Please enter your github username`;
        githubInput.style.border = '1.7px solid rgb(175, 61, 61)';

    } else {
        githubInput.nextElementSibling.textContent = null;
        githubInput.style.border = null;
        return true;

    }
};

const generateRandomSerial =()=>{
     let gRandom = Math.floor(Math.random() * 100000);
     return gRandom;
};

const generateTicket = () => {
     let ticketUsername = document.querySelector('.ticket-title-username');
        let ticketEmail = document.querySelector('.ticket-title-email');
    if (fileInput.files.length > 0) {
        let fileLink = URL.createObjectURL(fileInput.files[0]);
       
        let contentsHtml = ` <div class="grid">
  <div class="cell t-title">
     <h2><img src="./assets/images/logo-mark.svg" alt="logo-mark">Coding Conf</h2>
    <p> Jan 31, 2025 / Austin, TX</p> 
  </div>
  <div class="cell t-info">
     <div class="flex">
      <img src="${fileLink}" alt="person photo" class="t-image">

      <address>
      <div class="info"><span>${nameInput.value}</span><br><p><img src="./assets/images/icon-github.svg" alt="github logo"><span>@${githubInput.value}</span></p></div>
      </address>
    </div> 
  </div>
  <div class="cell t-serial">
    <p>#${generateRandomSerial()}</p>
  </div>
</div>`;
        ticketContent.innerHTML = contentsHtml;
    }
    document.querySelector('.title').classList.add('hidden');
     document.querySelector('.ticket-title').classList.remove('hidden');
     document.querySelector('#user-form').classList.add('hidden');
     document.querySelector('#user-ticket').classList.remove('hidden');
     ticketUsername.textContent = nameInput.value;
     ticketEmail.textContent = emailInput.value;
}


fileInput.addEventListener('change', () => {
    uploadedImg.src = URL.createObjectURL(fileInput.files[0]);
    document.querySelector('.change-avatar').classList.remove('hidden');
    document.querySelectorAll('.user-image label')[1].style.display = 'none';


});

newImage.addEventListener('change', () => {
    uploadedImg.src = URL.createObjectURL(newImage.files[0]);
    document.querySelector('.change-avatar').classList.remove('hidden');

});
removeImage.addEventListener('click', () => {
    fileInput.value = '';
    newImage.value = '';
    uploadedImg.src = '';
    document.querySelector('.change-avatar').classList.add('hidden');
    document.querySelectorAll('.user-image label')[1].style.display = 'block';


})
submitButton.addEventListener('click', () => {
     if(fileValidation() && nameValidation() && emailValidation() && githubValidation()){
        generateTicket();
    }else{
        fileValidation()
         nameValidation ()
         emailValidation()
         githubValidation ()
    } 
   
})