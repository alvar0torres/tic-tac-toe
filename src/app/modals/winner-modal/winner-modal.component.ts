import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardService } from 'src/app/board/board.service';
import { ModalService } from '../modals.service';

@Component({
  selector: 'app-winner-modal',
  templateUrl: './winner-modal.component.html',
  styleUrls: ['./winner-modal.component.css']
})
export class WinnerModalComponent implements OnInit {
  winner$: Observable<string>;

  constructor(private boardService: BoardService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.winner$ = this.boardService.winnerSubject;
  }

  newGame() {
    this.modalService.newGame();
  }

}
