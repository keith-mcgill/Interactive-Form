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

//assigns the name input focus state
nameField.focus();

//hides the other job role field upon page load
otherJobRoleField.setAttribute('type', 'hidden');

//Hides or displays the other job role field based on user selection
jobRoleDropdown.addEventListener('change', (e) => {
    if(e.target.value === 'other'){
        otherJobRoleField.setAttribute('type', 'text')
    } else {
        otherJobRoleField.setAttribute('type', 'hidden')
    }
});
/////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////
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
        console.log(totalCost)
        pElement.innerHTML = `Total: $${totalCost}`
    } else {
        totalCost -= convActivityCost
        console.log(totalCost)
    }   pElement.innerHTML = `Total: $${totalCost}` 
});
//////////////////////////////////////////////////////////////////////////////////
const paymentSelect  = document.getElementById('payment')
console.log(paymentSelect)