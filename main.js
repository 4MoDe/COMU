let isSectionVisible = (section) => {
    let rect = section.getBoundingClientRect();
    let height = window.innerHeight
    return( rect.top <= height - height*0.5 && rect.bottom >= height - height*0.5);
}

const sections = document.querySelectorAll('body>section')

let highlight = () => {
    sections.forEach((section) => {
        const nav = document.querySelector(`nav.header__navigation>a[href="#${section.className}"]`);
        if (isSectionVisible(section))
            nav.classList.add('highlight');
        else
            nav.classList.remove('highlight')
    })
}

window.addEventListener('load',  highlight)
window.addEventListener('scroll', highlight)

