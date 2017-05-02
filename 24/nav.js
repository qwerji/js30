const nav = document.querySelector('nav'),
    navTop = nav.offsetTop

window.addEventListener('scroll', function(e) {
    if (this.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px'
        document.body.classList.add('scrolled')
    } else {
        document.body.style.paddingTop = 0
        document.body.classList.remove('scrolled')
    }
})
