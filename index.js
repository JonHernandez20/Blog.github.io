let header = document.getElementById('home');
let tec = document.getElementById('technology')

window.addEventListener('scroll', ()=> {
    let scroll = window.scrollY;
    if(scroll>10) {
        header.style.height = 'auto';
        tec.style.display = 'none';
    } else {
        header.style.height = '150px';
        tec.style.display = 'block';
    }
})