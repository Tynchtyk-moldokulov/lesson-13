let butik = document.querySelector('#butik')
let kitcen = document.querySelector('.kitcen-flex')
let a = 0
function openmenu(){
    if (kitcen.style.height == '550px'){
        kitcen.style.height = '265px'
        butik.style.backgroundColor = '#D5621D'
        butik.innerText = 'ВСЕ МЕНЮ'
    }else{
        kitcen.style.height = '550px'
        butik.innerText = 'СКРЫТЬ МЕНЮ'
        butik.style.backgroundColor = 'grey'
    }
    a += 1
    if(a == 5){
        butik.removeEventListener('click',openmenu)
    }
}

butik.addEventListener('click',openmenu)
