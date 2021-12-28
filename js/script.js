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

//hides the color element upon page load
colorElement.disabled = true;

//design element event listener
designElement.addEventListener('change', (e) => {
    colorElement.disabled = false;
//for loop that iterates through the color options and hides or shows them based on user selection
    for(let i = 1; i < colorElement.length; i++) {
        const eventTarget = e.target.value;
        const optionTheme = colorElement[i].getAttribute('data-theme');
        
        if( eventTarget === optionTheme) {
            colorElement[i].hidden = false;
        } else {
            colorElement[i].hidden = true;
        };
    };   
});
