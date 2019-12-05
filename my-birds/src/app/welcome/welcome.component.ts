import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: []
})
export class WelcomeComponent implements OnInit {

  title: String;

  constructor() { }

  ngOnInit() {
    this.title = "My List of Birds";
  }

}
