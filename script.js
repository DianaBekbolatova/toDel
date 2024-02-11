let firstDiv = document.querySelector('#block')
let secondDiv = document.querySelector('#blockTwo')
secondDiv.style.display = 'none'
let startBtn = document.querySelector('#start-btn')
let yesBtn = document.querySelector('#yes-btn')
let noBtn = document.querySelector('#no-btn')
let img = document.querySelector('#change-img')
let txt = document.querySelector('#change-txt')


startBtn.addEventListener('click', ()=>{
    firstDiv.style.display = 'none'
    secondDiv.style.display = 'block'
})


let count = 0
let textForNoBtn = [
  "серьезно?",
  "Э!!!!",
  "ясно, спасибо",
  "еще один клик, с 1001 розой будешь стоять!",
  "Все,с тобой не играю"
]

let fontSizes = ["20px", "40px", "60px","70px"]
noBtn.addEventListener('click', ()=>{
   noBtn.textContent = textForNoBtn[count]
   count++
   if(count == 1){
     img.src = 'catch.gif'
   }
   if(count == 3){
    img.src = 'bye.gif'
   }
   if(count >=1 && count < 4){
    yesBtn.style.fontSize = fontSizes[count-1]
   }
   if(count == 5){
      document.body.style.display = 'none'
      alert('ПОКА')
   }
})

yesBtn.addEventListener('click', ()=>{
    img.src = 'third.gif'
    noBtn.style.display = 'none'
    yesBtn.style.display = 'none'
    txt.innerHTML = 'Думал все??? Сам зови  &#128545'
    let txt2 = document.createElement('p')
    let a = document.createElement('a')
    a.innerHTML = 'НАЖМИ'
    a.href =  'https://www.instagram.com/dinwtch/'
    txt2.innerHTML = 'Вот ссылка пиши '
    txt2.append(a)
    txt.append(txt2)
})