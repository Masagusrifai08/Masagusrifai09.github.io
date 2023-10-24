//interaksi navbar ponsel
const bar=document.querySelector('.fa-bars');
const menu=document.querySelector('ul');
bar.addEventListener('click', function(){
  menu.classList.toggle('navTampil');
})
//interaksi animasi scroll
window.addEventListener('scroll', muncul);
function muncul(){
  const isis=document.querySelectorAll('.isi');
  for(let i=0; i < isis.length; i++){
    let tinggiLayar=window.innerHeight;
    let jarakAtasLayar=isis[i].getBoundingClientRect().top; 
    let ukuranScroll=150;
    if(jarakAtasLayar < tinggiLayar-ukuranScroll){
      isis[i].classList.add('ulTampil');
    } else{
      isis[i].classList.remove('ulTampil');
    }
  }
}
//ineraksi scroll imga
window.addEventListener('scroll', imga);
function imga(){
  let imgas=document.querySelectorAll('.imga');
  for (let a=0; a < imgas.length; a++){
    let tinggiImga=window.innerHeight;
    let jarakAtasImga=imgas[a].getBoundingClientRect().top; 
    let ukuranImga=150;
    if (jarakAtasImga < tinggiImga-ukuranImga){
      imgas[a].classList.add('imgaScroll');
    } else{
      imgas[a].classList.remove('imgaScroll');
    }
  }
}
