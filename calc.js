const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;
       
        // Clear
        if (value === "C") {
            input.value = "";
            return;
        }
        // Calculate
        if (value === "=") {
            try {
                input.value = eval(input.value.replace("x", "*"));
            } catch {
                input.value = "Error";
            }
            return;
        }

        input.value += value;
    });
});