import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  player: string = 'O';
  counter: number = 1;
  endGame: boolean = false;
  winner: string = '';

  moves = {
    row1: ['', '', ''],
    row2: ['', '', ''],
    row3: ['', '', ''],
  };

  checkWinner(player: string) {
    if (
      this.moves.row1.toString() === [player, player, player].toString() ||
      this.moves.row2.toString() === [player, player, player].toString() ||
      this.moves.row3.toString() === [player, player, player].toString() ||
      (this.moves.row1[0] === player &&
        this.moves.row2[0] === player &&
        this.moves.row3[0] === player) ||
      (this.moves.row1[1] === player &&
        this.moves.row2[1] === player &&
        this.moves.row3[1] === player) ||
      (this.moves.row1[2] === player &&
        this.moves.row2[2] === player &&
        this.moves.row3[2] === player) ||
      (this.moves.row1[0] === player &&
        this.moves.row2[1] === player &&
        this.moves.row3[2] === player) ||
      (this.moves.row1[2] === player &&
        this.moves.row2[1] === player &&
        this.moves.row3[0] === player)
    ) {
      this.winner = player;
      console.log('the winner is ' + player);
      this.endGame = true;
      return;
    }

    if (this.counter < 9) {
      this.counter++;
    } else {
      this.endGame = true;
      console.log('the winner is nobody');
    }
  }

  newGame() {
    this.player = 'O';
    this.cleanTable();
    this.endGame = false;
    this.winner = '';
    this.counter = 1;
  }

  cleanTable() {
    this.moves = {
      row1: ['', '', ''],
      row2: ['', '', ''],
      row3: ['', '', ''],
    };
  }

  changePlayer() {
    if (this.endGame === true) {
      return;
    } else {
      return (this.player = this.player === 'X' ? 'O' : 'X');
    }
  }

  onMove(move: number) {
    if (this.endGame === true) {
      return;
    }
    if (move === 1) {
      if (this.moves.row1[0] === '') {
        this.moves.row1[0] = this.player;
      } else {
        return;
      }
      this.checkWinner(this.player);
      this.changePlayer();
    } else if (move === 2) {
      if (this.moves.row1[1] === '') {
        this.moves.row1[1] = this.player;
      } else {
        return;
      }
      this.checkWinner(this.player);
      this.changePlayer();
    } else if (move === 3) {
      if (this.moves.row1[2] === '') {
        this.moves.row1[2] = this.player;
      } else {
        return;
      }
      this.checkWinner(this.player);
      this.changePlayer();
    } else if (move === 4) {
      if (this.moves.row2[0] === '') {
        this.moves.row2[0] = this.player;
      } else {
        return;
      }
      this.checkWinner(this.player);
      this.changePlayer();
    } else if (move === 5) {
      if (this.moves.row2[1] === '') {
        this.moves.row2[1] = this.player;
      } else {
        return;
      }
      this.checkWinner(this.player);
      this.changePlayer();
    } else if (move === 6) {
      if (this.moves.row2[2] === '') {
        this.moves.row2[2] = this.player;
      } else {
        return;
      }
      this.checkWinner(this.player);
      this.changePlayer();
    } else if (move === 7) {
      if (this.moves.row3[0] === '') {
        this.moves.row3[0] = this.player;
      } else {
        return;
      }
      this.checkWinner(this.player);
      this.changePlayer();
    } else if (move === 8) {
      if (this.moves.row3[1] === '') {
        this.moves.row3[1] = this.player;
      } else {
        return;
      }
      this.checkWinner(this.player);
      this.changePlayer();
    } else if (move === 9) {
      if (this.moves.row3[2] === '') {
        this.moves.row3[2] = this.player;
      } else {
        return;
      }
      this.checkWinner(this.player);
      this.changePlayer();
    }
  }
}
