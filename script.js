const username_input = document.getElementById("username").value;
const password_input = document.getElementById("password").value;
console.log(username_input);

//document.getElementById("submit-btn").addEventListener("click", function() {
//    alert("คุณคลิกปุ่มนี้โดยใช้ addEventListener!");
//});

//const username = Westside
//const password = Esanside
const checkUser = (username,password) => {
    if (username ==='' || password ===''){
        alert('Enter all Dipshit')
    }else if (username !="Westside" || password !="Esanside"){
        alert('Wrong motherf#cker')
    }else{
        alert('Congrat lazy f#ck')
    }
}



const login = () => {
    const username_input = document.getElementById("username").value;
    console.log("Username : "+ username_input);
    const password_input = document.getElementById("password").value;
    console.log("Password : "+ password_input);

    checkUser(username_input,password_input);

};