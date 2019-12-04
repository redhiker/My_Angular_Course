import { Component, OnInit, Input } from '@angular/core';

import { Bird } from '../bird.model';

@Component({
  selector: 'app-bird-card',
  templateUrl: './bird-card.component.html',
  styleUrls: ['./bird-card.component.css']
})
export class BirdCardComponent implements OnInit {

  @Input()
  bird: Bird;

  constructor() { }

  ngOnInit() {
  }

}
