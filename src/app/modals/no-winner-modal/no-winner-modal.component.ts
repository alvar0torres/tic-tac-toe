import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardService } from 'src/app/board/board.service';
import { ModalService } from '../modals.service';

@Component({
  selector: 'app-no-winner-modal',
  templateUrl: './no-winner-modal.component.html',
  styleUrls: ['./no-winner-modal.component.css']
})
export class NoWinnerModalComponent implements OnInit {
  winner$: Observable<string>;

  constructor(private modalService: ModalService, private boardService: BoardService) { }

  ngOnInit(): void {
    this.winner$ = this.boardService.winnerSubject;
  }

  newGame() {
    this.modalService.newGame();
  }

}
