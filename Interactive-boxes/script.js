document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
  
    boxes.forEach((box) => {
      box.addEventListener("click", function () {
        boxes.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        this.querySelector("input[type='radio']").checked = true;
      });
    });
  });
  