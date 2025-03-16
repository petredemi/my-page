
const divimg = document.querySelectorAll('div.content1 > div');
const imginfo = document.querySelectorAll('div.content1 > div > div.imginfo');
const pict = document.querySelectorAll('div.pict > img');
const img = document.querySelectorAll('div.pict > img');
const ar1 = document.querySelector('#ar1');
const ar2 = document.querySelector('#ar2');


divimg.forEach((node, index) => node.addEventListener('mouseover', (e) => {
    imginfo[index].setAttribute('style','display:block')
}))
divimg.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
    imginfo[index].setAttribute('style', 'border: none')
}))
let i = 9; //images  index 
ar1.addEventListener('click', (e) => {
    console.log('dcdcd')
    img[i].setAttribute('style', 'display: block')
    if( i >= 9)return;
        i = i + 1
    console.log(i)
})
ar2.addEventListener('click', (e) => {
    console.log('vvcv')    
    img[i].setAttribute('style', 'display: none')
    if (i <= 1) return;
        i = i -1
    console.log(i)
})



