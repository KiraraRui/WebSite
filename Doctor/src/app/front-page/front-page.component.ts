import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ReadLocalFileService} from '../read-local-file.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  //fileReaderFront =  this.getTextFile();
  frontPageSlideOne = {"Pic" : "../../assets/FrontPage/SlideOne.png", "Des" : "../../assets/FrontPage/SlideTwoDescription.png"};
  frontPageSlideTwo = {"Pic" : "../../assets/FrontPage/SlideTwo.jpg", "Des" : "../../assets/FrontPage/SlideTwoDescription.jpg"};
  frontPageSlideTree = {"Pic" : "../../assets/FrontPage/SlideTree.png", "Des" : "../../assets/FrontPage/SlideTreeDescription.png"};
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    console.debug(this.getTextFile());
  }
  getTextFile(){
    console.debug("ARgh!!");
    return this.http.get(this.frontPageSlideOne.Des, {responseType: 'text'});

  }
}
