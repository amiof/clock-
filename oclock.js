let dateP = document.querySelector(".date")
let puse = document.getElementById ("puse")
puse.addEventListener("click",puseButton)
let start =document.getElementById("start").addEventListener("click",timestart)
let sstart =document.getElementById("sstart").addEventListener("click",()=>console.log(1))
let sstop =document.getElementById("sstop").addEventListener("click", ()=>console.log(1))
let houre = new Date().getHours()
let minut = new Date().getMinutes()
let second = new Date().getSeconds()
let ms=new Date().getMilliseconds()
console.log(ms)
let setIntervaltime
function puseButton(){
    clearInterval(setIntervaltime)
}
function timestart (){
setIntervaltime=setInterval (timereload,1000)
function timereload (){
    houre = new Date().getHours()
    minut = new Date().getMinutes()
    second = new Date().getSeconds()
    time = `${houre}:${minut}:${second}`
    let amPm
    if(houre>12){
        houre=houre-12
        amPm="PM"
    }else{
        amPm="AM"
    }
    dateP.innerText = `${time} ${amPm}`
    
}
}
timestart()

