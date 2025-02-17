document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".content-section");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("data-section");

            sections.forEach(section => {
                section.classList.add("hidden");
            });

            document.getElementById(sectionId).classList.remove("hidden");

            playPageTurnSound();
        });
    });

    function playPageTurnSound() {
        const sound = new Audio("Page-turn-sound.mp3");
        sound.play();
    }
});