function playGame() {
  
  function getMoveName(argMoveId){ //argMoveId = 2
      if(argMoveId == 1) return 'kamień';
      if(argMoveId == 2) return 'papier';
      if(argMoveId == 3) return 'nożyce';
      else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
  }
  
  function displayResult(argComputerMove, argPlayerMove){
    if(argPlayerMove == 'Nieznany ruch'){
        printMessage('Nieznany ruch');
    }
    else if(argComputerMove == 'kamień' && argPlayerMove== 'papier'){
        printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrywasz!');
    }
    else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('remis!');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrywasz!');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('remis!');
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz');
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrywasz!');
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('remis!');
    }
  }

  // MAIN PROCESS
  let randomNumber = Math.floor(Math.random() * 3 + 1); //3
  const computerMove = getMoveName(randomNumber); //nozyce
  
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); //2
  const playerMove = getMoveName(playerInput); //papier
  
  displayResult(getMoveName(randomNumber) getMoveName(playerInput));
    return function displayResult;
}
  

  
playGame();