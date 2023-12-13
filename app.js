//* основні блоки html
const parentDiv = document.querySelector(".parent");
const allBclock = document.querySelectorAll(".parent div")

//* Tic Tac Toe 
const nameGame = document.createElement('h1')

//* хто ходить
const whoGo = document.createElement('div')
const spanX = document.createElement('div')
const spanO = document.createElement('div')

//* Інфо панель
const infoWinContainer = document.createElement('div')
const infoWin = document.createElement('div')
const infoWinH1 = document.createElement('h1')
const infoWinH1Win = document.createElement('h1')
const infoWinH1WinPlayer = document.createElement('h1')



allBclock.forEach((button) => {
   button.addEventListener("click", function () {
      const isX = button.classList.contains('X');
      const isO = button.classList.contains('O');

      if (!isX && !isO) {
         click++;
         const currentPlayer = click % 2 === 0 ? 'O' : 'X';
         if (currentPlayer === 'O') {
            //* задаємо 
            btnIs(button, '#f2ebd3')
            sizeStyleSee()

            //* забираємо 
            sizeStyleShodwe()

         } if (currentPlayer === 'X') {
            //* задаємо 
            btnIs(button, '#545454')
            sizeStyleSee()

            //* забираємо 
            sizeStyleShodwe()
         }

         button.classList.add(currentPlayer);
         button.insertAdjacentHTML('afterbegin', `<h1>${currentPlayer}</h1>`);


         if (click >= 5 && checkWin()) {
            infoGame(currentPlayer, 'Win player')

            setTimeout(restartGame, 4000)

         } else if (click >= 9) {
            infoGame('Please try again', 'Draw')

            setTimeout(restartGame, 4000)

         }
      }
   });
});


//* виграшні комбінації
function checkWin() {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ];

   for (const line of lines) {
      const [a, b, c] = line;

      const isX_a = allBclock[a].classList.contains('X');
      const isO_a = allBclock[a].classList.contains('O');

      const isX_b = allBclock[b].classList.contains('X');
      const isO_b = allBclock[b].classList.contains('O');

      const isX_c = allBclock[c].classList.contains('X');
      const isO_c = allBclock[c].classList.contains('O');

      if (isX_a && isX_b && isX_c) {
         highlightWinner([a, b, c], 'X');
         return 'X'; // Гравець X переміг
      } else if (isO_a && isO_b && isO_c) {
         highlightWinner([a, b, c], 'O');
         return 'O'; // Гравець O переміг
      }
   }

   return null; // Немає переможця
}

//* фарбуємо виграшні клітини
function highlightWinner(winningCells) {
   for (const cellIndex of winningCells) {
      allBclock[cellIndex].style.backgroundColor = 'black';
   }
}


function restartGame() {
   click = 0

   allBclock.forEach(button => {
      button.innerHTML = ''
      button.classList.remove('X', 'O');
      button.style.backgroundColor = ''
   })
   sizeStyleShodwe()
}
function sizeStyleShodwe() {
   spanX.style.fontSize = '18px';
   spanX.style.borderBottom = '0';
   spanO.style.fontSize = '18px';
   spanO.style.borderBottom = '0';
}
function sizeStyleSee() {
   spanO.style.borderBottom = '5px solid #05b9a7';
   spanO.style.fontSize = '30px';
}
//*  колік О Х
function btnIs(button, color) {
   button.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${color};
      font-size: 60px;
      border: 2px solid black;

      `
}
function infoGame(player, whoWin) {
   // ========
   infoWin.style.cssText = `
width: 550px;
height: 900px;

position: absolute;
top: 308%;
left: 50%;
transform: translate(-50%, -50%);

background-color: #b80c09;
padding: 50px;
margin: 0 auto;
margin-top: -50px;
border: 3px solid red;
opacity: 0.7;
border-radius: 5px;
letter-spacing: 2px;
line-height: 38px;

`
   infoWinContainer.insertAdjacentElement(
      'afterbegin',
      infoWin
   )

   // ========
   infoWinH1.textContent = 'tic tac toe'
   infoWinH1.style.cssText = `
      text-align: center;
      font-size: 50px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      letter-spacing: 3px;
      color: white;
      margin-top: 20px;
      text-transform: capitalize;
      margin-top: 41px;

   `
   infoWin.insertAdjacentElement(
      'afterbegin',
      infoWinH1
   )


   // ========
   infoWinH1Win.textContent = `${whoWin}`
   infoWinH1Win.style.cssText = `
      text-align: center;
      font-size: 50px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      letter-spacing: 3px;
      color: white;
      margin-top: 20px;
      text-transform: capitalize;
      margin-top: 241px;

   `

   infoWin.insertAdjacentElement(
      'beforeend',
      infoWinH1Win
   )

   // ========
   infoWinH1WinPlayer.textContent = `${player}`
   infoWinH1WinPlayer.style.cssText = `
      text-align: center;
      font-size: 50px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      letter-spacing: 3px;
      color: white;
      margin-top: 20px;
      text-transform: capitalize;
      margin-top: 41px;

   `

   infoWin.insertAdjacentElement(
      'beforeend',
      infoWinH1WinPlayer
   )
   setTimeout(() => {
      infoWinContainer.removeChild(infoWin);
   }, 4000);
}

parentDiv.style.cssText = `
   width: 500px;
   height: 500px;
   margin: 0 auto;
   margin-top: 120px;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(3, 1fr);
   grid-column-gap: 0px;
   grid-row-gap: 0px;
   border: 1px solid #000;
   background-color: #05b9a7;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
   border-radius: 5px;
`

//* стиль для кожного блоку
allBclock.forEach(function (div) {
   div.style.cssText = `
        cursor: pointer;
        border: 2px solid black;
    `
});

let click = 0;


//* Tic Tac Toe стайл
nameGame.textContent = 'tic tac toe'
nameGame.style.cssText = `
      text-align: center;
      font-size: 50px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      letter-spacing: 3px;
      color: #202124;
      margin-top: 20px;
      text-transform: capitalize;
   `
parentDiv.insertAdjacentElement(
   'beforebegin',
   nameGame
)

//* загольний блок 'хто ходить' 
whoGo.style.cssText = `
   margin: 0 auto;
   width: 242px;
   height: 70px;
   border: 1px solid black;
   border-radius: 5px;
   margin-top: 20px;
   background-color: #202124;
`
parentDiv.insertAdjacentElement(
   'beforebegin',
   whoGo
)
spanO.textContent = `O`
spanO.style.cssText = `
   width: 120px;   
   border: 1px solid black;
   height: 70px;
   margin: 0;
   font-weight: bold;
   font-size: 18px;
   float: left;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
`
whoGo.insertAdjacentElement(
   'afterbegin',
   spanO
)
spanX.textContent = `X`
spanX.style.cssText = `
   width: 120px;
   height: 70px;
   border: 1px solid black;
   font-size: 18px;
   font-weight: bold;
   float: left;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
`
whoGo.insertAdjacentElement(
   'afterbegin',
   spanX
)




//* інфо стайл 
infoWinContainer.style.cssText = `
   position: relative;
   width: 300px;
   height: 200px; 
   margin: 0 auto;
   margin-top: -200px;
   `

nameGame.insertAdjacentElement(
   'beforebegin',
   infoWinContainer
)





