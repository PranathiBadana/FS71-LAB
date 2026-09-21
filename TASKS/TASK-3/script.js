class Student {
    constructor(name, rollNumber, department, cgpa) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.cgpa = cgpa;
    }
}

document.getElementById("showBtn").addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const rollNumber = document.getElementById("roll").value;
    const department = document.getElementById("department").value;
    const cgpa = document.getElementById("cgpa").value;

    if (name === "" || rollNumber === "" || department === "" || cgpa === "") {
        alert("Please fill in all fields.");
        return;
    }

    const student = new Student(name, rollNumber, department, cgpa);

    const profile = document.createElement("div");
    profile.className = "profile";

    const heading = document.createElement("h2");
    heading.textContent = "Student Profile";

    const nameText = document.createElement("p");
    nameText.textContent = "Name : " + student.name;

    const rollText = document.createElement("p");
    rollText.textContent = "Roll No : " + student.rollNumber;

    const departmentText = document.createElement("p");
    departmentText.textContent = "Department : " + student.department;

    const cgpaText = document.createElement("p");
    cgpaText.textContent = "CGPA : " + student.cgpa;

    profile.appendChild(heading);
    profile.appendChild(nameText);
    profile.appendChild(rollText);
    profile.appendChild(departmentText);
    profile.appendChild(cgpaText);

    const display = document.getElementById("profileDisplay");

    display.innerHTML = "";
    display.appendChild(profile);
});