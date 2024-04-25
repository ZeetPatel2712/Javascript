const todo_box = document.querySelector(".input_field textarea");
let todo_lists = document.querySelector(".todo_lists");
const panding_num = document.querySelector(".panding_num");
const pending_task = document.querySelector(".pending_task");
const clear_btn = document.querySelector(".clear_btn");

function allTask() {
    let task = document.querySelectorAll(".pending");
    panding_num.textContent = task.length === 0 ? "no" : task.length;
}

todo_box.addEventListener("keyup", (e) => {
    let inputValue = todo_box.value.trim();

    if (e.key === "Enter" && inputValue.length > 0) {
        let list = `<li class="list pending" onclick="handleStatus(this)">
                        <div class="task_name">
                            <input class="checkbox" type="checkbox" /><span class="task">${inputValue}</span>
                        </div>
                        <button class="delete_btn" onclick="deleteTask(this)">
                            <i class="iconoir-trash"></i>
                        </button>
                    </li>`;

        todo_lists.insertAdjacentHTML("beforeend", list);
        todo_box.value = "";

        allTask();
    }
});

function handleStatus(e) {
    const checkbox = e.querySelector(".checkbox");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTask();
}

const deleteTask = (e) => {
    e.parentElement.remove();
};

clear_btn.addEventListener("click", () => {
    todo_lists.innerHTML = "";
    allTask();
});
