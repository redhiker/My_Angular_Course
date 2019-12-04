import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Bird } from '../bird.model';

@Component({
  selector: 'app-bird-card',
  templateUrl: './bird-card.component.html',
  styleUrls: ['./bird-card.component.css']
})
export class BirdCardComponent implements OnInit {

  @Input()
  bird: Bird;

  @Output()
 birdClicked: EventEmitter<Bird> = new EventEmitter<Bird>();

  constructor() { }

  ngOnInit() {
  }

  showBird() {
    this.birdClicked.emit(this.bird);
  }

}
