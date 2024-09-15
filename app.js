let inputInfo = document.getElementById("userInput");
console.log(inputInfo);
let addTaskButton = document.getElementById("addTask");
console.log(addTaskButton);
let displayCheckBox = document.querySelector(".displayCheckBox");
let holdCheckBox = document.createElement("p");
holdCheckBox.classList.add(".d-inline-block")
let ulTag = document.createElement("ul");
ulTag.classList.add(".d-flex");
ulTag.style.listStyle = "none";
ulTag.style.paddingLeft = "1rem";
let displayUL = document.querySelector(".displayList");
console.log(displayUL);
console.log(ulTag);
let userText = "";

inputInfo.addEventListener("input", () =>
{
    userText = inputInfo.value;
})

addTaskButton.addEventListener("click", () =>
{
    //debugger
    for (let i = 0; i < 1; i++)
    {
        let checkBox = document.createElement("input");
        checkBox.classList.add(".d-inline-`block")
        checkBox.setAttribute("type", "checkbox");
        // checkBox.style.marginTop = "35px";
        holdCheckBox.append(checkBox);
        let addedTask = document.createElement("li");
        addedTask.style.paddingRight = "10px";
        addedTask.style.paddingTop = "10px";
        addedTask.style.paddingBottom = "10px";
        let removeButton = document.createElement("button");
        removeButton.style.marginLeft = "20px";
        removeButton.textContent = "Remove";

        if (userText == "") {}
        else
        {
            holdCheckBox.append(checkBox)
            displayCheckBox.append(holdCheckBox);
            addedTask.innerText = userText;
            ulTag.append(addedTask);
            addedTask.append(removeButton);
            displayUL.append(ulTag);
            inputInfo.value = "";
            userText = "";
        }

        removeButton.addEventListener("click", () =>
        {
            ulTag.removeChild(addedTask);
            ulTag.removeChild(removeButton);
            inputInfo.value = "";
            userText = "";
        })
    }
})
