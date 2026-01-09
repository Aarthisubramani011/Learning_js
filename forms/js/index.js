document.addEventListener("DOMContentLoaded", loaddatas);
 let users=[];
//  displayUsers();
 function loaddatas(){
    users = JSON.parse(localStorage.getItem("users")) || [];
    displayUsers();
    
    const deleteBtn = document.querySelector(".nav-btns.delete");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", deletetable);
    }
    const sortAZ_btn = document.querySelector(".nav-btns.sort");
    if(sortAZ_btn){
        sortAZ_btn.addEventListener("click", SortbyAz);

    }
 
}

function displayUsers() {
    const tableBody = document.querySelector(".tablebody");
    if (tableBody== null){
          return;
    }

    tableBody.innerHTML = "";

    if (users.length === 0){
        return;
    }

    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.rollNo}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.country}</td>
            <td>${user.education}</td>
            <td>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


function deletetable() {
    users.splice(0, users.length);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}



function SortbyAz() {
    users.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}


function SortbyZa() {
    users.sort((a, b) => b.name.localeCompare(a.name));
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}


document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const index = parseInt(e.target.getAttribute('data-index'));
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        displayUsers();
    }
    if (e.target.classList.contains("edit-btn")){
        const index = parseInt(e.target.getAttribute('data-index'));
        localStorage.setItem("index",index);
        window.location.href="./form.html";
    }


}

);
