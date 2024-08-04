let mainBox = document.querySelector('.box')
let joyStick =document.querySelector('.tap')
let text =document.querySelector('.writer')
let Errortext =document.querySelector('.error')

joyStick .addEventListener('click', ()=>{
    if(mainBox.value==''){
        Errortext.innerHTML = 'Please enter a text'
    }else{
            text.innerHTML = mainBox.value
            Errortext.innerHTML = ''
    }
})