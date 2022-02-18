import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BoardService } from '../board/board.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private boardService: BoardService) { }

  newGame(){
    this.boardService.newGame();
  }

  onAddPlayers(namesForm: NgForm) {
    console.log(namesForm.value.player1);
    console.log(namesForm.value.player2);
    this.boardService.onAddPlayers(namesForm);
  }

  onSkip() {
    this.boardService.onSkip();
  }

}
