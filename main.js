let isSectionVisible = (section) => {
    let rect = section.getBoundingClientRect();
    let height = window.innerHeight
    return( rect.top <= height - height*0.1 && rect.bottom >= height - height*0.2);
}

const sections = document.querySelectorAll('body>section')

window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        const nav = document.querySelector(`nav.header__navigation>a[href="#${section.className}"]`);
        if (isSectionVisible(section))
            nav.classList.add('highlight');
        else
            nav.classList.remove('highlight')
    })
})