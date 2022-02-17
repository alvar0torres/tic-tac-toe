import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardService, Moves } from './board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  player$: Observable<string>;
  moves$: Observable<Moves>;

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.player$ = this.boardService.playerSubject;
    this.moves$ = this.boardService.movesSubject;
  }

  onMove(number: number) {
    this.boardService.onMove(number);
  }
}
