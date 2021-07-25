/** @type {HTMLCanvasElement} */
var canv = document.getElementById("gameCanv")
/** @type {CanvasRenderingContext2D} */
var ctx = canv.getContext("2d")
/** @type {HTMLDivElement} */
var container = document.getElementById("gameContainer")
function UIFrame(){
    canv.style.left = (container.clientWidth/2-canv.width/2)+"px"
    canv.style.top = (container.clientHeight/2-canv.height/2)+"px"
}
setInterval(UIFrame, 1000/10)
var framerule = 0
function gameFrame(){
    framerule += 1
    framerule %= 21
}
setInterval(gameFrame, 1000/60)