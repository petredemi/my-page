

const divimg = document.querySelectorAll('div.content1 > div');
const imginfo = document.querySelectorAll('div.content1 > div > div.imginfo');
const pict = document.querySelectorAll('div.pict > img');

divimg.forEach((node, index) => node.addEventListener('mouseover', (e) => {
    imginfo[index].setAttribute('style','display:block')
}))
divimg.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
    imginfo[index].setAttribute('style', 'border: none')
}))


