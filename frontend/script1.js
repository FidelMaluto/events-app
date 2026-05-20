const menubtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menubtn.addEventListener('click', () =>{
    navLinks.classList.toggle('mobile-menu')
})

// Ativando e desativando o background das li
const lis = document.querySelectorAll('.li');

lis.forEach(item =>{
    item.addEventListener('click', () =>{
        lis.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    })
})
