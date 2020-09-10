import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ReadLocalFileService} from '../read-local-file.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  frontPageSlideOne = {"Pic" : "../../assets/FrontPage/SlideOne.png", "TitleDes" : "Bmw","Des" : "This is a bmw car 1"};
  frontPageSlideTwo = {"Pic" : "../../assets/FrontPage/SlideTwo.png", "TitleDes" : "Bmw","Des" : "This is a bmw car 2"};
  frontPageSlideTree = {"Pic" : "../../assets/FrontPage/SlideTree.jpg", "TitleDes" : "Bmw","Des" : "This is a bmw car 3"};
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    console.log(this.getTextFile());
  }
  getTextFile(){
    let testTxr;
    this.http.get("../../assets/FrontPage/SlideOneDescription.json").subscribe(data =>{
       testTxr = data;
    });
    console.debug("Teset of http Get Json" + testTxr);
    return testTxr;
  }
}
