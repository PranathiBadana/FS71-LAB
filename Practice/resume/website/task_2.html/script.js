// Student class
class Student {
    constructor(name, rollNo, department, cgpa) {
        this.name = name;
        this.rollNo = rollNo;
        this.department = department;
        this.cgpa = cgpa;
    }
}


// DOM selection
const showBtn = document.getElementById('showBtn');
const profileDisplay = document.getElementById('profileDisplay');


// Event handling
showBtn.addEventListener('click', function () {

    // Get user input
    const name = document.getElementById('name').value.trim();
    const rollNo = document.getElementById('roll').value.trim();
    const department = document.getElementById('dept').value.trim();
    const cgpa = document.getElementById('cgpa').value.trim();


    // Validation
    if (!name || !rollNo || !department || !cgpa) {
        alert('Please fill in all fields.');
        return;
    }


    // Create Student object
    const student = new Student(
        name,
        rollNo,
        department,
        cgpa
    );


    // Clear and display profile
    profileDisplay.innerHTML = '';


    const profileDiv = document.createElement('div');

    profileDiv.className = 'profile';


    const details = [
        ['Name', student.name],
        ['Roll No', student.rollNo],
        ['Department', student.department],
        ['CGPA', student.cgpa]
    ];


    details.forEach(function ([label, value]) {

        const p = document.createElement('p');

        p.innerHTML = `<span class="label">${label}</span> : ${value}`;

        profileDiv.appendChild(p);

    });


    profileDisplay.appendChild(profileDiv);

});