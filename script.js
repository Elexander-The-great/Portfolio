const username_input = document.getElementById("username").value;
const password_input = document.getElementById("password").value;
console.log(username_input);

//document.getElementById("submit-btn").addEventListener("click", function() {
//    alert("คุณคลิกปุ่มนี้โดยใช้ addEventListener!");
//});

//const username = Westside
//const password = Esanside
    const popup = document.getElementById('pop-up');
    const popupTitle = document.getElementById('popup-title');
    const popupDetail = document.getElementById('popup-detail');
    const overlay = document.getElementById('overlay');

     const checkUser = (username,password) => {
    if (username ==='' || password ===''){
        popupTitle.innerText = "ERROR";
        popupTitle.style.color = "red";
        popupDetail.innerText = "Please enter all";
        popupDetail.style.color = "Whitesmoke";
        popupDetail.style.textAlign = "center";
        popup.style.display = "block";
        overlay.style.display = "block";
        //alert('Enter all Dipshit')
    }else if (username !="Westside" || password !="Esanside"){
        popupTitle.innerText = "ERROR";
        popupTitle.style.color = "red";
        popupDetail.innerText = "Wrong username or password";
        popupDetail.style.color = "Whitesmoke";
        popupDetail.style.textAlign = "center";
        popup.style.display = "block";
        overlay.style.display = "block";
        //alert('Wrong motherf#cker')
    }else{
        popupTitle.innerText = "Sign in";
        popupTitle.style.color = "green";
        popupDetail.innerText = "You are already sign in";
        popupDetail.style.color = "Whitesmoke";
        popupDetail.style.textAlign = "center";
        popup.style.display = "block";
        overlay.style.display = "block";
        //alert('Congrat lazy f#ck')
    }
}

const closepopup = () =>{
    popup.style.display = "none";
    overlay.style.display = "none";

}

const login = () => {
    const username_input = document.getElementById("username").value;
    console.log("Username : "+ username_input);
    const password_input = document.getElementById("password").value;
    console.log("Password : "+ password_input);

    checkUser(username_input,password_input);

};