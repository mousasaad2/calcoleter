let shwo = document.querySelector('.shwo input')
let calcoleter = document.querySelectorAll('.calcoleter');
let eqwal = document.querySelector('.eqwal');
let delate = document.querySelector('.delate');

calcoleter.forEach((but)=>{
    but.addEventListener('click',(e)=>{
        let val = e.target.dataset.num;
        shwo.value += val
    })
})

eqwal.addEventListener('click',()=>{
    if(shwo.value !== ""){
        let result = eval(shwo.value);
        shwo.value = result
    }
})

delate.addEventListener('click', ()=>{
    shwo.value = ""
})