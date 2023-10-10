function calculate() {
    const num1 = parseFloat(document.getElementsByName("num1")[0].value);
    const num2 = parseFloat(document.getElementsByName("num2")[0].value);
    const operator = document.getElementsByName("operator")[0].value;
    const ans = document.getElementsByName("ans")[0];
    const msg = document.getElementById("msg");

    // Reset error message
    msg.style.display = "none";

    if (isNaN(num1) || isNaN(num2)) {
        msg.innerHTML = "Please enter valid numbers";
        msg.style.display = "block";
    } else {
        switch (operator) {
            case "add":
                ans.value = num1 + num2;
                break;
            case "sub":
                ans.value = num1 - num2;
                break;
            case "mul":
                ans.value = num1 * num2;
                break;
            case "div":
                if (num2 === 0) {
                    msg.innerHTML = "Division by zero is not allowed";
                    msg.style.display = "block";
                } else {
                    ans.value = num1 / num2;
                }
                break;
            default:
                msg.innerHTML = "Please select a valid operator";
                msg.style.display = "block";
                break;
        }
    }
}
