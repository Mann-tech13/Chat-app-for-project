const nandan = document.querySelector("#nandan");
const aniket = document.querySelector("#aniket");
const mohit = document.querySelector("#mohit");
const aryan = document.querySelector("#aryan");
const mann = document.querySelector("#mann");


function chatStarted() {
    const chatList = document.querySelector("#chatList");
    if (chatList.classList.contains('clicked') == false) {
        chatList.className += "clicked";
    }
}

function myfunct() {
    chatStarted();
}