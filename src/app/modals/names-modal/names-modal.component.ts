import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalService } from '../modals.service';

@Component({
  selector: 'app-names-modal',
  templateUrl: './names-modal.component.html',
  styleUrls: ['./names-modal.component.css']
})
export class NamesModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  onAddPlayers(namesForm: NgForm) {
    this.modalService.onAddPlayers(namesForm);
  }

  onSkip() {
    this.modalService.onSkip();
  }

}
