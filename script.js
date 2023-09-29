const cursor = document.querySelector(".cursor");
const title = document.querySelector(".title");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";

    const rect = title.getBoundingClientRect();
    const cursorRect = cursor.getBoundingClientRect();

    if (
        rect.left < cursorRect.right &&
        rect.right > cursorRect.left &&
        rect.top < cursorRect.bottom &&
        rect.bottom > cursorRect.top
    ) {
        cursor.style.backgroundColor = "#fff";
    } else {
        cursor.style.backgroundColor = "#000";
    }
});

document.querySelector(".navbar").addEventListener("mouseenter", () => {
    cursor.style.width = "40px";
    cursor.style.height = "40px";
});

document.querySelector(".navbar").addEventListener("mouseleave", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
});
