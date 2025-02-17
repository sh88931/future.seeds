function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });

    document.getElementById(sectionId).classList.remove('hidden');

    // تشغيل صوت تقليب الصفحة
    document.getElementById('pageSound').play();
}