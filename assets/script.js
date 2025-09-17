// Year in footer
document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());

// Simple lightbox for gallery
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbCap = document.getElementById('lightbox-cap');

document.querySelectorAll('.card a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    lbImg.src = a.getAttribute('href');
    lbImg.alt = a.querySelector('img')?.alt || '';
    lbCap.textContent = a.dataset.caption || '';
    lb.classList.add('show');
    lb.setAttribute('aria-hidden','false');
  });
});

document.querySelector('.lightbox-close').addEventListener('click', ()=>{
  lb.classList.remove('show');
  lb.setAttribute('aria-hidden','true');
});

lb.addEventListener('click', e=>{
  if(e.target===lb){
    lb.classList.remove('show');
    lb.setAttribute('aria-hidden','true');
  }
});
