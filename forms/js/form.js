document.addEventListener("DOMContentLoaded", loaddatas);
 let users=[];
 function loaddatas(){
    users = JSON.parse(localStorage.getItem("users")) || [];
    const editIndex = localStorage.getItem("index");
    if (editIndex !== null) 
        {
        const index = parseInt(editIndex);
        const user = users[index];
        if (user) {
            document.getElementById("roll-no").value = user.rollNo;
            document.getElementById("name").value = user.name;
            document.getElementById("age").value = user.age;
            document.querySelector(`input[name="gender"][value="${user.gender}"]`).checked = true;
            document.getElementById("Country").value = user.country;
            document.getElementById("Education").value = user.education;
            localStorage.removeItem('editIndex');
        }
    }

    const submitBtn = document.getElementById("submit-btn");
    if (submitBtn){
    submitBtn.addEventListener("click",submitform);

    }
    const resetBtn = document.getElementById("reset-btn");
    if (resetBtn) {
    resetBtn.addEventListener("click",resetform);
 }
 }
 function submitform(){
       e.preventDefault();
       const rollNo= document.getElementById("roll-no").value;
       const name = document.getElementById("name").value;
       const age = document.getElementById("age").value;
       const gender = document.querySelector('input[name="gender"]:checked')?. value;
       const country =document.getElementById("Country").value;
       const education =document.getElementById("Education").value;

        if (!rollNo || !name || !age || !gender || !country || !education) {
            alert("Please fill all fields");
            return;
        }
        const editIndex = localStorage.getItem('editIndex');
        if (editIndex !== null) {
            const index = parseInt(editIndex);
            users[index] = { rollNo, name, age, gender, country, education };
            localStorage.removeItem('editIndex');
        } else {
            users.push({ rollNo, name, age, gender, country, education });
        }
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'index.html';
   }


function resetform() {
        e.preventDefault();

        document.getElementById("roll-no").value = "";
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("Country").value = "";
        document.getElementById("Education").value = "";
        
        const termsCheckbox = document.querySelector("terms-access");
        if (termsCheckbox) {
          termsCheckbox.checked = false;
        }
    
        const genders = document.querySelectorAll('input[name="gender"]');
        genders.forEach(input => {
            input.checked = false;
        });
     
}





