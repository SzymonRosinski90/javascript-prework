/* functions */
{
  const stone = 'kamień'; 
  const paper = 'papier';
  const sscissors = 'nozyce';
  
  const playGame = function(playerInput){
    clearMessages();

    function getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return 'kamień';
      }
      else if (argMoveId == 2) {
        return 'papier';
      }
      else if (argMoveId == 3) {
        return 'nożyce';
      }

      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }

    /* computer */
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    /* player */
    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */
    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    /* results */
    const displayResult = function (argPlayerMove, argComputerMove) {
      console.log("wywołano funkcję displayResults z argumentami: " + argPlayerMove + ", " + argComputerMove);
      if (argPlayerMove == paper && argComputerMove == stone) {
        printMessage("Wygrywasz!");
      } else if (argPlayerMove == sscissors && argComputerMove == paper) {
        printMessage("Wygrywasz!");
      } else if (argPlayerMove == stone && argComputerMove == sscissors) {
        printMessage("Wygrywasz!");
      } else if (argPlayerMove == argComputerMove) {
        printMessage("Remis!");
      } else {
        printMessage("Przegrywasz :(");
      }
    };
    displayResult(playerMove, computerMove);
  }
  document.getElementById('playRock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('playPaper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('playScissors').addEventListener('click', function(){
    playGame(3);
  });
}