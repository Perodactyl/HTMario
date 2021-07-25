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
    ctx.clearRect(0, 0, canv.width, canv.height)
    framerule += 1
    framerule %= 21
    if(framerule == 0){
        for(timer in timers){
            if(timers[timer].type == 0){
                timers[timer]()
                if(!timers[timer].const)timers.splice(timer, 1)
            }
        }
    }
    for(timer in timers){
        if(timers[timer].type == 1){
            timers[timer]()
            if(!timers[timer].const)timers.splice(timer, 1)
        }
    }
}
var timers = []
function addTimer(callback, type=0, constant=false){
    callback.type = type
    callback.const = constant
    timers.push(callback)
}
setInterval(gameFrame, 1000/60)