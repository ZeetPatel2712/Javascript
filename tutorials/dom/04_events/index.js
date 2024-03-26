// Events ------------------------------------ //

const events = () => {
    const body = document.querySelector("body");

    // 01 Click --------------- //
    const handleClick = () => (body.style.backgroundColor = "lightpink");

    // 01 Double Click --------------- //
    const handleDblClick = () => (body.style.backgroundColor = "skyblue");

    // 01 Right Click --------------- //
    const handleRightClick = () => (body.style.backgroundColor = "crimson");

    // 01 Mouse Hover --------------- //
    const handleMouseEnter = () => (body.style.backgroundColor = "salmon");

    // 01 Mouse Out --------------- //
    const handleMouseOut = () => (body.style.backgroundColor = "deeppink");

    // 01 Mouse Up --------------- //
    const handleMouseUp = () => (body.style.backgroundColor = "purple");

    // 01 Mouse Down --------------- //
    const handleMouseDown = () => (body.style.backgroundColor = "violet");

    // 01 Key Press --------------- //
    const handleKeyPress = () => (body.style.backgroundColor = "green");

    // 01 Key Up --------------- //
    const handleKeyUp = () => (body.style.backgroundColor = "orange");

    // 01 Load --------------- //
    const handleLoad = () => (body.style.backgroundColor = "#1e1e1e");

    // 01 Unload --------------- //
    const handleUnload = () => (body.style.backgroundColor = "red");

    // 01 Resize --------------- //
    const handleResize = () => (body.style.backgroundColor = "ghostwhite");

    // 01 Scroll --------------- //
    const handleScroll = () => (body.style.backgroundColor = "brown");
};

const eventListener = () => {
    const ctm_button = document.querySelector(".ctm__btn.click");
    ctm_button.addEventListener("click", () => console.log("hello click"));

    // REMEMBER :- in add event listener when you use body events use window
    window.addEventListener("resize", () => console.log("resize"));
};

eventListener();
