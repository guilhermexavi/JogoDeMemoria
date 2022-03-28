let order =[];
let clickedOrder =[];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

// cria ordem aleatoria de cores

let shuftletOrder = () => {
        let colorOrder = Math.floor(Math.random() * 4);
        order[order.length] = colorOrder;
        clickedOrder = [];

        for(let i in order) {
            let elementColor = creatColorElement(order[i]);
            lightColor(elementColor, Number(i) + 1);
        }
}

//acende a proxima cor

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
      element.classlist.add('selected');
    }, number - 250);
    setTimeout(()  => {
        element.classlist.remove('selected');
     });
    }


//checa se os botoes clicados sao os mesmo da ordem gerada no jogo
  
let checkOrder = () =>  {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {

      gameOver();
      break;
    }
  }

  if(clickedOrder.length == order.length) {
    alert('Pontuação: ${score}\nVocê acertou! Iniciando proximo nivel!');
    nextlevel();

  }
}


// funçao para o click do usuario

  let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  creatColorElement(color).classlist.add('selected');

  setTimeout(() => {
    creatColorElement(color).classlist.remove('selected');
    checkOrder();

  },250);
  }
 



//  funçao que retorna a cor
let creatColorElement = (color) => {
  if(color == 0) {
    return green;
      } else if(color == 1) {
        return red;
       } else if (color == 2) {
          return yellow;
        } else if(color == 3) {
            return blue;
          }
      }
         
      //funçao para proximo nivel do jogo

      let nextlevel = () => {
        score++;
        shuftletOrder();

      }


      //funçao para game over
      let gamerOver = () => {
        alert('pontuaçao: $(score)!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo');
        order = [];
        clickedOrder = [];

        playGame();
      }

      // funçao de inicio do jogo
      let playGame = () => {
        alert('bem vindo no Genesis! Iniciando novo jogo!');
        score = 0;

        nextlevel();        
      }

      //eventos de clique para as cores
      green.onclick = () => click(0);
      red.onclick = () => click(1);
      yellow.onclick = () => click(2);
      blue.onclick = () => click(3);


      //inicio do jogo
      playGame();

