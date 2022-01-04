//references the name field in the Dom
const nameField = document.getElementById('name');
//references the other-job-role field in the DOM
const otherJobRoleField = document.getElementById('other-job-role');
//references the job role dropdown DOM element
const jobRoleDropdown = document.getElementById('title');
//references the color DOM element
const colorElement = document.getElementById('color');
//references the design DOM element
const designElement = document.getElementById('design');

//////////////////NAME FIELD/////////////////////////////////////////////////////////////////////////

//assigns the name input focus state
nameField.focus();

//////////////////////JOB ROLE SECTION/////////////////////////////////////////////////////////////

//hides the "other job role" field upon page load
otherJobRoleField.setAttribute('type', 'hidden');

//Hides or displays the "other job role" field based on user selection
jobRoleDropdown.addEventListener('change', (e) => {
    if(e.target.value === 'other'){
        otherJobRoleField.setAttribute('type', 'text')
    } else {
        otherJobRoleField.setAttribute('type', 'hidden')
    }
});
////////////////////////T-SHIRT INFO SECTION/////////////////////////////////////////////////////

//hides the color element upon page load
colorElement.disabled = true;

//design element event listener
designElement.addEventListener('change', (e) => {
    colorElement.disabled = false;
//for loop that iterates through the color options and hides or shows them based on user selection
    for(let i = 0; i < colorElement.length; i++) {
        const eventTarget = e.target.value;
        const optionTheme = colorElement[i].getAttribute('data-theme');
        
        if( eventTarget === optionTheme) {
            colorElement[i].hidden = false;
            colorElement[i].selected = true;
        } else {
            colorElement[i].hidden = true;
            colorElement[i].selected = false;
        };
    };   
});
////////////////////REGISTER FOR ACTIVITIES SECTION//////////////////////////////////////////////////////////////

//reference to the activities element
const activitiesElement = document.getElementById('activities');


//reference to the p element
const pElement = document.getElementById('activities-cost');
//variable to store the total cost
var totalCost = 0;

//activities element event handler
activitiesElement.addEventListener('change', (e) => {
    const activityCost = e.target.getAttribute('data-cost');
    const convActivityCost = +activityCost
//if statement updates the total cost in the p element if an activity is checked or unchecked
    if(e.target.checked) {
        totalCost += convActivityCost
        pElement.innerHTML = `Total: $${totalCost}`
    } else {
        totalCost -= convActivityCost
    }   pElement.innerHTML = `Total: $${totalCost}` 
});
///////////////////////////PAYMENT INFO SECTION///////////////////////////////////////////////////////

//references the payment select and displays 'credit card' by default
const paymentSelect  = document.getElementById('payment');
paymentSelect.children[1].setAttribute('selected', 'true');

//references the credit card div
const creditCard = document.getElementById('credit-card')

//references the paypal div and hides it by default
const paypal = document.getElementById('paypal');
paypal.hidden = true;

//references the bitcoin div and hides it by default
const bitcoin = document.getElementById('bitcoin');
bitcoin.hidden = true;

paymentSelect.addEventListener('change', (e) => {
    
    if(e.target.value === 'paypal' ) {
        paypal.hidden = false;
        bitcoin.hidden = true;
        creditCard.hidden = true;
    } else if(e.target.value === 'bitcoin'){
        paypal.hidden = true;
        bitcoin.hidden = false;
        creditCard.hidden = true;
    } else {
        paypal.hidden = true;
        bitcoin.hidden = true;
        creditCard.hidden = false;
    }
});
///////////////////////////FORM VALIDATION SECTION///////////////////////////////////////////////////////

//reference to the form element
const form = document.querySelector('form');
//reference to the email field
const emailField = document.getElementById('email');


//function that verifies the name field is not blank
const nameValidator = () => {
    const nameFieldValue = nameField.value;
    return /\w+/i.test(nameFieldValue)
};

//function that validates the email field
const emailValidator = () => {
    const emailFieldValue = emailField.value;
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailFieldValue);  
};

//function that verifies that an activity has been selected
const activityValidator = () => {
    const activityBoxes = document.querySelectorAll('input[type=checkbox]')
    var checked = 0;
    for( let i = 0; i < activityBoxes.length; i++) {
        if(activityBoxes[i].checked) {
            checked += 1;
        }   
    };
    return checked
};
//function that verifies that the credit card number, zip code, & CVV field values are acceptable.
const creditCardValidator = () => {
    const cardNumber = document.getElementById('cc-num');
    const zipCode = document.getElementById('zip');
    const cvv = document.getElementById('cvv');
    const cardRegex = /^\d{13,16}$/;
    const zipCodeRegex = /^\d{5}$/;
    const cvvRegex = /^\d{3}$/;
    var cardInfoValid;

    if(cardRegex.test(cardNumber.value) && zipCodeRegex.test(zipCode.value) && cvvRegex.test(cvv.value)) {
        cardInfoValid = true;   
    } else {
        cardInfoValid = false;
    };

    if(!cardRegex.test(cardNumber.value)) {
        cardNumber.parentElement.classList.add('not-valid');
        cardNumber.parentElement.classList.remove('valid');
        cardNumber.parentElement.lastElementChild.style.display = 'block';    
    } else {
        cardNumber.parentElement.classList.add('valid');
        cardNumber.parentElement.classList.remove('not-valid');
        cardNumber.parentElement.lastElementChild.style.display = 'none';
    }
    if(!zipCodeRegex.test(zipCode.value)) {
        zipCode.parentElement.classList.add('not-valid');
        zipCode.parentElement.classList.remove('valid');
        zipCode.parentElement.lastElementChild.style.display = 'block';
    } else {
        zipCode.parentElement.classList.add('valid');
        zipCode.parentElement.classList.remove('not-valid');
        zipCode.parentElement.lastElementChild.style.display = 'none';
    }
    if(!cvvRegex.test(cvv.value)) {
        cvv.parentElement.classList.add('not-valid');
        cvv.parentElement.classList.remove('valid');
        cvv.parentElement.lastElementChild.style.display = 'block';
    } else {
        cvv.parentElement.classList.add('valid');
        cvv.parentElement.classList.remove('not-valid');
        cvv.parentElement.lastElementChild.style.display = 'none';
    }
    return cardInfoValid;
};
    

//form validator event handler that prevents form from submitting if any validation or accessibility requirements are not met.
form.addEventListener('submit', (e) => {
    
    if(!nameValidator()) {
        e.preventDefault();
        nameField.parentElement.classList.add('not-valid');
        nameField.parentElement.classList.remove('valid');
        nameField.parentElement.lastElementChild.style.display = 'block';
    } else {
        nameField.parentElement.classList.add('valid');
        nameField.parentElement.classList.remove('not-valid');
        nameField.parentElement.lastElementChild.style.display = 'none';
    }

    if(!emailValidator()) {
        e.preventDefault();
        emailField.parentElement.classList.add('not-valid');
        emailField.parentElement.classList.remove('valid');
        emailField.parentElement.lastElementChild.style.display = 'block';
    } else {
        emailField.parentElement.classList.add('valid');
        emailField.parentElement.classList.remove('not-valid');
        emailField.parentElement.lastElementChild.style.display = 'none'
    }
    if(activityValidator() <= 0) {
        e.preventDefault();
        activitiesElement.classList.add('not-valid')
        activitiesElement.classList.remove('valid');
        activitiesElement.lastElementChild.style.display = 'block';
    }  else {
        activitiesElement.classList.add('valid');
        activitiesElement.classList.remove('not-valid');
        activitiesElement.lastElementChild.style.display = 'none';
    }    
    if(paymentSelect.value === 'credit-card'){
        if(!creditCardValidator()) {
            e.preventDefault();
            
        }
    }
});

/////////////////ACCESSIBILITY SECTION/////////////////////////////////////////////////////////////////////////

//reference to the activity checkboxes
const activityCheckboxes = document.querySelectorAll('input[type=checkbox]');

//for loop to add or remove the focus class from the checkboxes' parent element
for( let i = 0; i < activityCheckboxes.length; i++) {
    activityCheckboxes[i].addEventListener('focus', (e) => {
        e.target.parentNode.classList.add('focus')
    });

    activityCheckboxes[i].addEventListener('blur', (e) => {
        e.target.parentNode.classList.remove('focus')
    });
};

