import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardService } from './board/board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  noWinner$: Observable<boolean>;
  winner$: Observable<string>;
  start$: Observable<boolean>;

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
      this.noWinner$ = this.boardService.noWinnerSubject;
      this.winner$ = this.boardService.winnerSubject;
      this.start$ = this.boardService.startSubject;
  }

}
