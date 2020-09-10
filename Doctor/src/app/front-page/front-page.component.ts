import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  frontPageSlideOne = {"Pic" : "../../assets/FrontPage/SlideOne.png", "Des" : "../../assets/FrontPage/SlideOneDescription"};
  frontPageSlideTwo = {"Pic" : "../../assets/FrontPage/SlideTwo.jpg", "Des" : "../../assets/FrontPage/SlideTwoDescription.png"};
  frontPageSlideTree = {"Pic" : "../../assets/FrontPage/SlideTree.png", "Des" : "../../assets/FrontPage/SlideTreeDescription.png"};
  constructor() { }

  ngOnInit(): void {
  }

}
