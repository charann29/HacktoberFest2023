function Calculate(){
    var num1 = document.getElementsByName("num1")[0].value;
    var num2 = document.getElementsByName("num2")[0].value;
    var operator = document.getElementsByName("operator")[0].value;
    var ans = document.getElementsByName("ans")[0];
    var msg = document.getElementById("msg");
    if(msg.style.display == "block"){
        msg.style.display = "none";
    }
    if(num1 == "" || num2 == ""){
        msg.innerHTML = "Please enter both the numbers";
        msg.style.display = "block";
        return;
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(operator == "add"){
        ans.value = num1 + num2;
    }
    else if(operator == "sub"){
        ans.value = num1 - num2;
    }
    else if(operator == "mul"){
        ans.value = num1 * num2;
    }
    else if(operator == "div"){
        ans.value = num1 / num2;
    }
    else if(operator == "op"){
        msg.innerHTML = "Please select an operator";
        msg.style.display = "block";
        return;
    }
}