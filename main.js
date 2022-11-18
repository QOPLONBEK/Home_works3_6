let text = document.querySelector('.soz')

let son = prompt('Sonni kiriting')

let oneRes = son % 3
let twoRes = son % 5


if(oneRes == 0 && twoRes == 0){
    text.textContent = "Bu son 3 ga ham 5 ga ham bo'linadi"
}
else if(oneRes == 0 && twoRes !== 0){
    text.textContent = "Bu son 3 ga bo'linadi"
}
else if(oneRes !== 0 && twoRes == 0){
    text.textContent = "Bu son 5 ga bo'linadi"
}
else{
    text.textContent = "Bu son 3ga ham 5 ga ham bo'linmaydi"
}
