const sections = document.querySelectorAll(".fade");

window.addEventListener("scroll", function () {
    sections.forEach(section => {
        let top = section.getBoundingClientRect().top;
        let trigger = window.innerHeight - 100;

        if(top < trigger){
            section.classList.add("show");
        }
    });
});