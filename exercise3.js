document.addEventListener("DOMContentLoaded", function() {
    // Task 2: Change color of the box when clicked
    window.changeColor = function() {
        const box = document.getElementById("box");
        const colors = ["red", "blue", "yellow", "purple", "orange"];
        const currentColor = box.style.backgroundColor;
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        while (newColor === currentColor) {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        }
        box.style.backgroundColor = newColor;
    };

    // Task 3: Hover effect to change background color of hoverBox
    const hoverBox = document.getElementById("hoverBox");
    hoverBox.addEventListener("mouseover", function() {
        hoverBox.style.backgroundColor = "pink";
    });
    hoverBox.addEventListener("mouseout", function() {
        hoverBox.style.backgroundColor = "green";
    });

    // Task 3: Button click to change size of the box
    const sizeButton = document.getElementById("sizeButton");
    sizeButton.addEventListener("click", function() {
        const box = document.getElementById("box");
        box.style.width = box.style.width === "200px" ? "100px" : "200px";
        box.style.height = box.style.height === "200px" ? "100px" : "200px";
        box.style.lineHeight = box.style.height;
    });

    // Task 3: Hover effect to change text of textChange element
    const textChange = document.getElementById("textChange");
    textChange.addEventListener("mouseover", function() {
        textChange.textContent = "Text Changed!";
    });
    textChange.addEventListener("mouseout", function() {
        textChange.textContent = "Hover to change text";
    });

    // Task 3: Reset button to reset styles
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", function() {
        const box = document.getElementById("box");
        box.style.backgroundColor = "blue";
        box.style.width = "100px";
        box.style.height = "100px";
        box.style.lineHeight = "100px";

        hoverBox.style.backgroundColor = "green";

        textChange.textContent = "Hover to change text";
    });
});
