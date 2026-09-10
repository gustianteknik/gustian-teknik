document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('#navMenu').classList.toggle('open'));
document.querySelectorAll('#navMenu a').forEach(a=>a.addEventListener('click',()=>document.querySelector('#navMenu').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
