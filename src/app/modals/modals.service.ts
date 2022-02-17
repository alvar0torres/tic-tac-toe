import { Injectable } from '@angular/core';
import { BoardService } from '../board/board.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private boardService: BoardService) { }

  newGame(){
    this.boardService.newGame();
  }

}
