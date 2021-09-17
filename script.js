const box = document.querySelector("div");
box.addEventListener("mouseenter", function() {
    box.style.backgroundColor = "blue";
})
box.addEventListener("dblclick", function() {
    box.style.backgroundColor = "yellow";
})