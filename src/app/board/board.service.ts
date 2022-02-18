import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

export interface Moves {
  row1: [string, string, string];
  row2: [string, string, string];
  row3: [string, string, string];
}

export const initialBoard: Moves = {
  row1: ['', '', ''],
  row2: ['', '', ''],
  row3: ['', '', ''],
};


@Injectable({
  providedIn: 'root',
})
export class BoardService {
  counter: number = 1;
  moves: Moves = initialBoard;
  player1: string;

  startSubject = new BehaviorSubject<boolean>(true);
  playerSubject = new BehaviorSubject<string>('X');
  movesSubject = new BehaviorSubject<Moves>(initialBoard);
  winnerSubject = new BehaviorSubject<string>('');
  noWinnerSubject = new BehaviorSubject<boolean>(false);
  player1Subject = new BehaviorSubject<string>("");
  player2Subject = new BehaviorSubject<string>("");
  endGameSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  onAddPlayers(namesForm: NgForm) {
    this.player1Subject.next(namesForm.value.player1);
    this.player2Subject.next(namesForm.value.player2);
    this.startSubject.next(false);
    this.player1 = this.player1Subject.value;
  }

  newGame() {
    this.playerSubject.next('X');
    this.endGameSubject.next(false);
    this.winnerSubject.next('');
    this.noWinnerSubject.next(false);
    this.counter = 1;
    this.player1Subject.next(this.player1);
    this.player1Subject.next(this.player1);
    this.cleanTable();
  }

  onSkip() {
    this.player1Subject.next('X');
    this.player2Subject.next('O');
    this.startSubject.next(false);
    this.player1 = this.player1Subject.value;
  }

  cleanTable() {
    this.moves = {
      row1: ['', '', ''],
      row2: ['', '', ''],
      row3: ['', '', ''],
    };
    this.movesSubject.next(this.moves);
  }

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
      this.winnerSubject.next(player === "X" ? this.player1Subject.value : this.player2Subject.value);
      console.log('the winner is ' + player);
      this.endGameSubject.next(true);
      return;
    }

    if (this.counter < 9) {
      this.counter++;
    } else {
      this.endGameSubject.next(true);
      this.noWinnerSubject.next(true);
      console.log('the winner is nobody');
    }
  }

  changePlayer() {
    if (this.endGameSubject.value === true) {
      return;
    } else {
      this.playerSubject.next(
        this.playerSubject.value === 'X' ? 'O' : 'X'
      );

    }
  }

  onMove(move: number) {
    if (this.endGameSubject.value === true) {
      return;
    }
    if (move === 1) {
      if (this.moves.row1[0] === '') {
        this.moves.row1[0] = this.playerSubject.value;
        this.movesSubject.next(this.moves);
      } else {
        return;
      }
      this.checkWinner(this.playerSubject.value);
      this.changePlayer();
    } else if (move === 2) {
      if (this.moves.row1[1] === '') {
        this.moves.row1[1] = this.playerSubject.value;
        this.movesSubject.next(this.moves);
      } else {
        return;
      }
      this.checkWinner(this.playerSubject.value);
      this.changePlayer();
    } else if (move === 3) {
      if (this.moves.row1[2] === '') {
        this.moves.row1[2] = this.playerSubject.value;
        this.movesSubject.next(this.moves);
      } else {
        return;
      }
      this.checkWinner(this.playerSubject.value);
      this.changePlayer();
    } else if (move === 4) {
      if (this.moves.row2[0] === '') {
        this.moves.row2[0] = this.playerSubject.value;
        this.movesSubject.next(this.moves);
      } else {
        return;
      }
      this.checkWinner(this.playerSubject.value);
      this.changePlayer();
    } else if (move === 5) {
      if (this.moves.row2[1] === '') {
        this.moves.row2[1] = this.playerSubject.value;
        this.movesSubject.next(this.moves);
      } else {
        return;
      }
      this.checkWinner(this.playerSubject.value);
      this.changePlayer();
    } else if (move === 6) {
      if (this.moves.row2[2] === '') {
        this.moves.row2[2] = this.playerSubject.value;
        this.movesSubject.next(this.moves);
      } else {
        return;
      }
      this.checkWinner(this.playerSubject.value);
      this.changePlayer();
    } else if (move === 7) {
      if (this.moves.row3[0] === '') {
        this.moves.row3[0] = this.playerSubject.value;
        this.movesSubject.next(this.moves);
      } else {
        return;
      }
      this.checkWinner(this.playerSubject.value);
      this.changePlayer();
    } else if (move === 8) {
      if (this.moves.row3[1] === '') {
        this.moves.row3[1] = this.playerSubject.value;
        this.movesSubject.next(this.moves);
      } else {
        return;
      }
      this.checkWinner(this.playerSubject.value);
      this.changePlayer();
    } else if (move === 9) {
      if (this.moves.row3[2] === '') {
        this.moves.row3[2] = this.playerSubject.value;
        this.movesSubject.next(this.moves);
      } else {
        return;
      }
      this.checkWinner(this.playerSubject.value);
      this.changePlayer();
    }
  }
}
