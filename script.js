document.addEventListener("DOMContentLoaded", function () {
    let spanElement = document.querySelector(".home-info h2 span");
    let texts = ["Frontend Developer", "Backend Developer", "Student"];
    let index = 0;

    function changeText() {
        spanElement.textContent = "";
        setTimeout(() => {
            spanElement.textContent = texts[index]; 
            index = (index + 1) % texts.length; 
        }); 
    }

    changeText(); 
    setInterval(changeText, 4000); // Change text every 4 seconds
});
