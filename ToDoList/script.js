const titleInput = document.querySelector("#titleName");
const description = document.querySelector("#desc");
const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = titleInput.value.trim();
    let desc = description.value.trim();

    if (title === "" || desc === "") {
        alert("Please fill all inputs");
        return;
    }

    const li = document.createElement("li");

    const newTitle = document.createElement("h3");
    newTitle.innerText = title;

    const newDesc = document.createElement("p");
    newDesc.innerText = desc;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.style.backgroundColor = "black";
    deleteBtn.style.color = "white";

    li.appendChild(newTitle);
    li.appendChild(newDesc);
    li.appendChild(deleteBtn);


    todoList.appendChild(li);

    titleInput.value = "";
    description.value = "";
});