var dino = document.querySelector(".dino")
var background = document.querySelector(".background")
var isJumping = false
let position = 0
var pontuacao = document.querySelector(".score")
var pontos = 0

function handleKeyUp(event){
       if(!isJumping){
            if(event.keyCode == 32){
                jump()
            }
       }
}



function jump(){
    
    isJumping = true
    let upInterval = setInterval(() =>{
       
        
        if(position >= 150){
            let downInterval = setInterval(()=>{

                if (position <= 0){
                    clearInterval(downInterval)
                    isJumping = false 
                }
                else{
                    clearInterval(upInterval);
                    position = position -  20;
                    dino.style.bottom = position + "px"
                   
                    
                }

            },20)
        
        }
        
      

        else{
            position += 20;
            dino.style.bottom = position + "px"
            // pontos += 10
        }

        
    

    },20)
}

function criarCactus (){
    var cactus = document.createElement("div")
    var posicaoCacto = 1000;

    var tempo = Math.random() * 4000
    cactus.classList.add("cactus")
    cactus.style.left = 1000 + "px"
    background.appendChild(cactus)
    
    let letInterval = setInterval(() =>{
        
        if(posicaoCacto < -60){
            clearInterval(letInterval)
            background.removeChild(cactus)
        }

        else if(posicaoCacto > 0 && posicaoCacto <60 && position < 60){
            clearInterval(letInterval);
            clearInterval(gamePlay)
          gameOver()

        }
    
        else{
            
      
        posicaoCacto -= 15
        cactus.style.left = posicaoCacto + "px"
    
        }


    },20)

    setTimeout(criarCactus,tempo)
   
    }

 

   
   
  

function pterodactyl(){
    var ptero = document.createElement("div")
    var posicaoPtero = 1000;

    let tempo = Math.random() * 10000
    ptero.innerHTML = "<div> <img src='imgs/pterodactyl.png'></img></div>"
    ptero.classList.add("ptero")
    ptero.style.left = 1000 + "px"
    background.appendChild(ptero)
    
    let letInterval = setInterval(() =>{
        
        if(posicaoPtero < -60){
            clearInterval(letInterval)
            background.removeChild(ptero)
        }

        else if(posicaoPtero > 0 && posicaoPtero <60 && position > 90){
            clearInterval(letInterval);
            clearInterval(gamePlay)
            gameOver()


        }
    
        else{
            
      
            posicaoPtero -= 25
            ptero.style.top = 20 + "px"
        ptero.style.left = posicaoPtero + "px"
    
        }


    },20)
    setTimeout(pterodactyl,tempo)
}

var gamePlay = setInterval( function (){
  pontos += 10
  pontuacao.textContent = `pontuação: ${pontos}`
  return pontos

 },500)
criarCactus()
pterodactyl()

function gameOver (){
    document.body.innerHTML = `
    <div class="game-container">
        <h1 class='gameOver'> Game Over </h1> 
        <h2>Sua Pontuação: ${pontos} </h2>
        <i class="fa-solid fa-arrow-rotate-right" onclick='restart()'></i>
    </div>
                                        
                                        `
                                    
}

function restart (){
    window.location.reload(true)
}

document.addEventListener('keyup',handleKeyUp)

