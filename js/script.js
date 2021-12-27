//Accesses the name field in the Dom
const nameField = document.getElementById('name');
//accesses the other-job-role field in the DOM
const otherJobRoleField = document.getElementById('other-job-role');
//accesses the job role dropdown DOM element
const jobRoleDropdown = document.getElementById('title');


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