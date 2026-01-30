document.addEventListener('DOMContentLoaded', Initialrender);

class DisplayTable {
    constructor() {
        this.studentData = new StudentsData();
        this.tbody = document.querySelector('.tablebody');
    }

    displayData() {
        const data = this.studentData.getData();
        const submitbtn = document.getElementById("submit-btn");
        submitbtn.addEventListener("click",()=> this.addRow(data));
    }

    addRow(data) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.rollNo}</td>
            <td>${data.name}</td>
            <td>${data.age}</td>
            <td>${data.gender}</td>
            <td>${data.country}</td>
            <td>${data.education}</td>
        `;
        this.tbody.appendChild(row);
    }
}

class StudentsData {
    getData() {
        return {
            rollNo: document.getElementById("roll-no").value,
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            gender: document.querySelector('input[name="gender"]:checked')?.value || "Not selected",
            country: document.getElementById("Country").value,
            education: document.getElementById("Education").value
        };
    }
}

function Initialrender() {
    const table = new DisplayTable();
    table.displayData();
}

