//const img1 = document.querySelector('#img1');
//const img2 = document.querySelector('#img2');
//const img3 = document.querySelector('#img3');
//const img4 = document.querySelector('#img4');
//const img5 = document.querySelector('#img5');
//const img6 = document.querySelector('#img6');
//const img7 = document.querySelector('#img7');
//const img8 = document.querySelector('#img8');

const divimg = document.querySelectorAll('div.content1 > div');
const imginfo = document.querySelectorAll('div.content1 > div > div.imginfo');
divimg.forEach((node, index) => node.addEventListener('mouseover', (e) => {
    imginfo[index].setAttribute('style','display:block')
}))
divimg.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
    imginfo[index].setAttribute('style', 'border: none')
}))

