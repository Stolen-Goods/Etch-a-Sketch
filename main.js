const mainContainer = document.getElementById("main-container");

function grid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.className = "square";
        mainContainer.append(square);
    }
}

grid();