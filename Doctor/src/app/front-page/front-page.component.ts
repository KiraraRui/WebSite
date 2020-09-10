import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  frontpagePic = [];
  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i <= 0; i++){
      this.frontpagePic[i] = 0;
    }
  }

}
