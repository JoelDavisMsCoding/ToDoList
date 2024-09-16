let taskTextBox = document.querySelector("#inputTextBox");
let addButton = document.querySelector(".ct2Col2 input");
let display = document.querySelector(".displaySection")

addButton.addEventListener("click", createTaskItem)

function createTaskItem() {
    // Adding classes that help with the alignment of elements being made.
    let task = document.createElement("div");
    task.classList.add("row");
    task.classList.add("todoItem");
    task.classList.add("d-flex");
    task.classList.add("justify-content-center");
    task.classList.add("mt-3");
    
    //Making the task appear on the page
    display.append(task);

    let checkBoxDiv = document.createElement("div");
    checkBoxDiv.classList.add("col-1");

    task.append(checkBoxDiv);
    
    //Creating Checkbox
    let checkBoxInput = document.createElement("input");
    checkBoxInput.type = "checkbox"

    checkBoxDiv.append(checkBoxInput);

    checkBoxInput.addEventListener("input", () => {
        if(checkBoxInput.checked == true) {
            pTag.classList.add("strikeThrough");
        } else {
            pTag.classList.remove("strikeThrough");
        }
    })

    //* CREATING TASK TITLE COLUMN
    let title = document.createElement("div")
    title.classList.add("col-6")
    title.classList.add("col-sm-4")

    task.append(title);

    //* CREATING P Tag as the element to hold the text inside the input box
    let pTag = document.createElement("p");
    pTag.innerHTML = taskTextBox.value
    title.append(pTag);

    //Making Button Div
    let buttonColumn = document.createElement("div")
    buttonColumn.classList.add("col-3");
    buttonColumn.classList.add("col-sm-2");
    task.append(buttonColumn);

    //Making Remove Button
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    buttonColumn.append(removeButton);
    
    removeButton.addEventListener("click", () => {
        task.remove();
    })

    //! CLEARING THE TEXT BOX
    taskTextBox.value = "";
}