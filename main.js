function grid() {
    for (let i = 0; i < 256; i++) {
        const mainContainer = document.getElementById("main-container");
        const square = document.createElement("div");
        square.classList = "square";
        mainContainer.append(square);
    }
    const artWork = document.querySelectorAll(".square");
    for (const art of artWork) {
    art.addEventListener("mouseover", () => {
        art.classList.add("paint");
    })
}
}




grid();

