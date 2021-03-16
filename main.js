document.querySelector("span.mess-with-me").style.fontSize = '40px';
document.querySelector("p.mess-with-me").style.background = "green";
document.querySelector("#hide-me-area").style.display = 'none';
document.querySelector("#triceratops").style.width = '324px';

const span = document.querySelector("span.mess-with-me");
span.addEventListener('click', () => span.style.color = 'orange')

const firstDino = document.querySelector("#triceratops");
firstDino.addEventListener('click', () => firstDino.style.border = "1px solid red")

const feathers = document.querySelector("#feathers");
feathers.addEventListener('click', () => document.querySelector("#row").style.background = "slateblue")

const bigDino = document.querySelector("#biggify");
bigDino.addEventListener('mouseover', () => bigDino.style.width = "200px")
bigDino.addEventListener('mouseout', () => bigDino.style.width = "162px")

const button = document.querySelector("button");
button.addEventListener('click', () => {
    if(document.querySelector("body").style.background !== "lightgray"){
        document.querySelector("body").style.background = "lightgray";
    }else document.querySelector("body").style.background = "white";
})

