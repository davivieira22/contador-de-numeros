let numero= 0
let cron
let h1=document.querySelector(".titulo")

function start(){
cron=setInterval(function(){
numero++
h1.innerHTML=numero

},1000)
}
function stop(){ 
    clearInterval(cron)
    clearInterval(cron)
    clearInterval(cron)
} 
function zerar(){
    h1.innerHTML=numero=0
}
