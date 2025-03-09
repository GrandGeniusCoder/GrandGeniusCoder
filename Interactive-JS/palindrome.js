let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");
checkBtn.addEventListener("click",palindrome);

    function palindrome() {
        const lowerReplaced = textInput.value.toLowerCase().replace(/[^A-Za-z0-9]/g, "")
        if (textInput.value === "") {
alert("please input a value");
return;
        }else if (textInput.value.length === 1) {
            result.innerHTML = `${textInput.value} is a palindrome`
        }else if (lowerReplaced === [...lowerReplaced].reverse().join("")){
            result.innerText = `${textInput.value} is a palindrome`
        }else{
            result.innerHTML = `${textInput.value} is not a palindrome` 
        }
    } 