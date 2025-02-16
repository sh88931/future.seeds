function showSection(sectionId) {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.remove("active");
    });

    let activeSection = document.getElementById(sectionId);
    activeSection.classList.add("active");

    let audio = document.getElementById("pageTurn");
    audio.play();
}