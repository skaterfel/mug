var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

canvas.width = 550
canvas.height = 550

var teclas = {}
document.addEventListener('keydown', function(e){
    teclas[e.keyCode] = true
})
document.addEventListener('keyup', function(e){
    delete teclas[e.keyCode]
})

var mug = {
    x: 0,
    y: 0,
    tamanho: 10,
    cor: 'gray',  
    velocidade: 10,
    pontos: 0    
}
var tchli = {
    x: Math.floor(Math.random()*canvas.width),
    y: Math.floor(Math.random()*canvas.height),
    tamanho: 20,
    cor: 'green'
}

function desenha(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    moveMug()
    pegaTchli()
    ctx.fillStyle = tchli.cor
    ctx.fillRect(tchli.x, tchli.y, tchli.tamanho, tchli.tamanho)

    ctx.fillStyle = mug.cor
    ctx.fillRect(mug.x,mug.y,mug.tamanho,mug.tamanho);
    
}

function moveMug(){
    if(40 in teclas) {
        // && mug.y + mug.tamanho < canvas.height 
        // colocar no if acima para colidir na parede
        
        mug.y += mug.velocidade
        if(mug.y > canvas.height){
            mug.y = 0
        }
    } else if (38 in teclas) {
        //  && mug.y > 0
        // colocar no if acima para colidir na parede
        
        mug.y -= mug.velocidade
        if(mug.y < 0){
            mug.y = canvas.height
        }
    }   
    if(39 in teclas) {
        //  && mug.x + mug.tamanho < canvas.width
        // colocar no if acima para colidir na parede
        
        mug.x += mug.velocidade
        if(mug.x > canvas.width){
            mug.x = 0
        }
    } else if(37 in teclas) {
        // && mug.x > 0
        // colocar no if acima para colidir na parede
        
        mug.x -= mug.velocidade
        if(mug.x < 0){
            mug.x = canvas.width
        }
    }
    
}

var pontos = document.getElementById('pontos')
var oba = 0
function ponto(){
    pontos.innerHTML = `Crash Counter: ${oba}`
}

function pegaTchli() {
    if(mug.x < tchli.x + tchli.tamanho && mug.x + mug.tamanho > tchli.x && mug.y < tchli.y + tchli.tamanho && mug.y + mug.tamanho > tchli.y){
            console.log(tchli)
            tchli = {}
            oba++
            ponto()
            tchli = {
                x: Math.floor(Math.random()*canvas.width),
                y: Math.floor(Math.random()*canvas.height),
                tamanho: 20,
                cor: 'green'
            }
            if(tchli.x < 0 || tchli.y < 0){
                tchli.x += 20
                tchli.y += 20
            } else if (tchli.x > canvas.width || tchli.y > canvas.height){
                tchli.x -= 20
                tchli.y -= 20
            }
            mugUp() 
    }
}

function mugUp(){
    mug.tamanho += 2
    mugCor()
}

function mugCor(){
    if(mug.tamanho >= 20 && mug.tamanho <= 30){
        mug.cor = 'blue'
    }
    if(mug.tamanho >= 31 && mug.tamanho <= 40){
        mug.cor = 'yellow'
    }
    if(mug.tamanho >= 41 && mug.tamanho <= 50){
        mug.cor = 'purple'
    }
    if(mug.tamanho >= 51 && mug.tamanho <= 60){
        mug.cor = 'black'
    }
    if(mug.tamanho >= 61 && mug.tamanho <= 70){
        mug.cor = 'red'
    }
    if(mug.tamanho >= 71 && mug.tamanho <= 80){
        mug.cor = '#24dead'
    }
}

function mudaTchli(){
    tchli = {
        x: Math.floor(Math.random()*canvas.width),
        y: Math.floor(Math.random()*canvas.height),
        tamanho: 20,
        cor: 'green'
    }
}
setInterval(desenha, 20)
setInterval(mudaTchli, 2000)