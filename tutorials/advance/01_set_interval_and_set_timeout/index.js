// set timeout ----------------------------------------- //

const changeText = setTimeout(() => {
    const target = document.querySelector(".target");
    target.textContent = "Text";
    target.style.backgroundColor = "skyblue";
    target.style.color = "white";
    target.style.padding = "10px 20px";
}, 4000);

const stop_timeout = document.querySelector(".stop_timeout");
stop_timeout.addEventListener("click", () => {
    clearTimeout(changeText);
    console.log("time out cleared");
});

// set interval ----------------------------------------- //

const list = document.querySelector(".list");
let list_num = 1;

const handleAddList = () => {
    list_num++;
    const createList = `<li class="list_item_${list_num}">list ${list_num}</li>`;
    list.insertAdjacentHTML("beforeend", createList);
};

const start_interval = document.querySelector(".start_interval");
const stop_interval = document.querySelector(".stop_interval");

// start interval

let addList;

start_interval.addEventListener("click", () => {
    addList = setInterval(handleAddList, 1000);
    console.warn("interval started");
});

// stop interval

stop_interval.addEventListener("click", () => {
    clearInterval(addList);
    console.error("interval stopped");
});
