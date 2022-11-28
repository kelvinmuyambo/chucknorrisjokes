import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from 'src/app/models/joke';

@Component({
  selector: 'app-joke-modal',
  templateUrl: './joke-modal.component.html',
  styleUrls: ['./joke-modal.component.css']
})
export class JokeModalComponent implements OnInit {
  @Input() joke!: Joke | null;
  @Output() onClose = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
  }
}
