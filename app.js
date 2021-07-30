// const a = 10;
// const b = 2;
// let myName = "Sim";

// console.log(a+b);
// console.log(a*b);
// console.log("hello "+myName);

// myName = "Su"
// console.log("hello "+myName);

// let qwer = null
// console.log(qwer)

// const furniture = ["drawer", "closet", "desk"];
// console.log(furniture);
// console.log(furniture[0]);

// const player = {
//     name: ["sim", "su"],
//     level: [10, 15],
//     ability: [true, false],
// };
// console.log(player);
// console.log(player.name[0]);
// console.log(player.name[1]);
// console.log(player.level[0]);

// player.name = "sumin";
// console.log(player.name);

// function bb(C) {
//     console.log("Hello, world " + C);
// }
// bb("sim");
// bb("sumin");


// const play = {
//     bb: function(C){
//         console.log("Hello, world " + C);
//     },
// };
// play.bb("sim")

// const calculator = {
//     plus: function(a,b) {
//         return a+b;
//     },
//     mius: function(a,b) {
//         return a-b;
//     }, 
//     multiplication: function(a,b) {
//         return a*b;
//     }, 
//     divide: function(a,b) {
//         return a/b;
//     }, 
//     square: function(a,b) {
//         return a**b;
//     },
// };

// const pluss = calculator.plus(5,5);
// console.log(pluss);

// const age = parseInt(prompt("How old are you?"));
// if(isNaN(age) || age <1){
//     console.log("Please write a correct number");
// } else if(age < 18) {
//     console.log("넌 술못마셔 이자식아 !");
// } else if(age > 60 && age <80) {
//     console.log("그 나이에 음주는 위험합니다");
// } else if(age >= 80) {
//     console.log("You can do whatever you want");
// } else {
//     console.log("You can drink haha");
// }

// const h1 = document.querySelector("div.hello:first-child h1");

// function mc() {
//     h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", mc);

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log("hello", loginInput.value);
}
loginButton.addEventListener("click", onLoginBtnClick);