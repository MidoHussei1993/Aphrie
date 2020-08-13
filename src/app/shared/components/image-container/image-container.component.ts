import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit {
  
  @Input('imageURL') imageURL: string;
  @Output() view = new EventEmitter();
  @Output() open = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // emit url of image to parent component to view image
  viewImage(){
    this.view.emit({url:this.imageURL})
  }
  // emit url of image to parent component to open image
  openImage(){
    this.open.emit({url:this.imageURL})
  }

}
