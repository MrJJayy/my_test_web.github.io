// 样例1
// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// 样例2
// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("我最喜欢巧克力冰淇淋了。");
// } else {
//   alert("但是巧克力才是我的最爱呀……");
// }

// 样例3
// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕疼。");
//   });

// 自主测试4
// let para = document.querySelector("p");
// para.textContent = "只有第一次出现才被替换";

// 样例5
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
    setUserName();
};
