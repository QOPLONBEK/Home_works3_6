let Res = document.querySelector('.natija')

let son = prompt('Sonni kiriting')

let boshRes = son % 3
let keyingiRes = son % 5


if(boshRes == 0 && keyingiRes == 0){
    text.textContent = "Bu son 3 ga ham 5 ga ham bo'linadi"
}
else if(boshRes == 0 && keyingiRes !== 0){
    text.textContent = "Bu son 3 ga bo'linadi"
}
else if(boshRes !== 0 && keyingiRes == 0){
    text.textContent = "Bu son 5 ga bo'linadi"
}
else{
    text.textContent = "Bu son 3ga ham 5 ga ham bo'linmaydi"
}
