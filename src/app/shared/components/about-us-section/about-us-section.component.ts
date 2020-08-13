import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss']
})
export class AboutUsSectionComponent implements OnInit {
@Input('image') image: string;
@Input('title') title: string;
@Input('paragraph') paragraph: string;
//used to set image first in the row if it true  
@Input('isImageFirst') isImageFirst: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
