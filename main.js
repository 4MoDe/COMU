isSectionVisible((section) => {
    const rect = section.getBoundingClientRect();
    return( rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
})

const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        if (isSectionVisible(section)){
            console.log(section.className)
        }
    })
})