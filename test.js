// I am a Comment. I do Nothing

// How to Declare variables:
let x = 5;
let y = 6; 
// y = 10; 會出現錯誤
// How to Compute values:
let z = x + y;

// How to Output values:
console.log(z);

alert('hello world');
//建立自訂函式

function hello(){      
    alert('hello world');
}
function hello2(name){  
    let n = prompt("請輸入暱稱");
    alert('hello, '+name+'你的暱稱是'+n);
}
function over18(){      
    let randomNum = Math.floor(Math.random() * (500000 - 200000 + 1)) + 200000;
    alert('You can watch p0rN, here you go ｢  nhentai.net/g/' + randomNum + '  ｣');
}
function below18(){      
    alert('Get out! Kid');
    window.close();
}
function sum(x,y){
    let s = x + y;
    return s;
}
console.log(sum(4,5));

const bntn1 = document.getElementById("btn1");  //取得ID
const btn2 = document.getElementById("btn2");  //取得ID
const btn3 = document.getElementById("btn3");  //取得ID
const btn4 = document.getElementById("btn4");  //取得ID
const img = document.getElementById("img");  //取得ID
let q = 20;
let p = "block";

bntn1.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    document.getElementById("demo1").innerHTML = "Hello JavaScript";
})
btn2.addEventListener("click",function(){  //監聽事件，點擊，執行函式
x = x + 10;
document.getElementById("demo2").style.fontSize=x + "px";
})
btn3.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    alert("沒事");
    this.innerText = "沒事";
    this.style.color = "red";
})
btn4.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    y = (y=="none")? "block" : "none";
    document.getElementById("demo1").style.display = y;
    document.getElementById("demo2").style.display = y;
})
img.addEventListener("mouseover",function(){  //監聽事件，滑鼠懸浮上面
    this.src = "Xi Winnie.png";
})
img.addEventListener("mouseout",function(){  //監聽事件，滑鼠懸浮離開
    this.src = "Xi Jinping.png";
})

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");

let countNum =0;   //廣域變數
function checkGuess() {
    countNum++;
    count.textContent = "猜測次數："+countNum;
    //guessField.focus();       //游標焦點預設在輸入欄位裡
}
guessSubmit.addEventListener("click", checkGuess);   //當按鈕被點擊，執行函式

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("觀察隨機的數字：", randomNumber);

const userGuess = Number(guessField.value);  //取得欄位值，並轉為數字
if  (userGuess === randomNumber ) {
    result.textContent = "猜測結果：Congratulations!" ;
    result.textContent += "遊戲結束";
    result.style.backgroundColor="red";
    alert("遊戲結束");
    setGameOver();
}
else if (userGuess  < randomNumber ) {
    result.textContent = "猜測結果：數字太小!" ;
}
else if (userGuess  >  randomNumber ) {
    result.textContent = "猜測結果：數字太大!";
}

function setGameOver() {
        guessField.disabled = true; //停止輸入功能
        guessSubmit.disabled = true;    //停止按鈕功能
}
