const openModal = document.getElementById("open-modal");
openModal.addEventListener("click",()=>{
loginModal.showModal();
})


const loginModal = document.querySelector("#login-modal");
const signupModal = document.querySelector("#signup-modal");
const loginBtn = document.getElementById("login-btn");
const singupBtn = document.getElementById("signup-btn");
const closeSignup = document.getElementById("close-signup");
const closeLogin = document.getElementById("close-login");

// signupModal.showModal();



singupBtn.addEventListener("click",()=>{
    loginModal.close();
    signupModal.showModal();
});


loginBtn.addEventListener("click",()=>{
    loginModal.showModal();
  signupModal.close();
});

closeLogin.addEventListener("click",()=>{
    loginModal.close();
})
closeSignup.addEventListener("click",()=>{
    signupModal.close();
})