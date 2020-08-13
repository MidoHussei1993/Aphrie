import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../shared/models';
import { UserService } from '../shared/services/api';
import { NotifierService } from 'angular-notifier';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Patterns } from '../shared/common/patterns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //object uset in specifing carousel option
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    navSpeed: 3000,
    animateIn:'fadeIn',
    animateOut:'fadeOut',
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  
  aboutUsSechionIconsURL: string[] = [
    'assets/images/icon/sec1.png',
    'assets/images/icon/sec2.png',
    'assets/images/icon/sec3.png',
  ];
  precedenceSechionIconsURL: string[] = [
    'assets/images/icon/cho1.png',
    'assets/images/icon/cho2.png',
    'assets/images/icon/cho3.png',
  ];
  //to hide and show selectd type of image
  activeBtnIndex: number = 0;
  //to hide and show image view container
  isChosenImage: boolean = false;
  //to bind selectd chosenImageURL with image view container
  chosenImageURL: string;

  users: User[];
  // api monitoring 
  busyLoadingUsers: boolean = false;
  //used to build contact us section form
  form: FormGroup;

  constructor(
    private translate: TranslateService,
    private userService: UserService,
    private notifier: NotifierService,
    private formbuilder : FormBuilder,
  ) {}

  ngOnInit(): void {
    // create form befor templete render
    this.createForm();
    // initialize users array
    this.users = [];
  // get all users before templete render
    this.getUsers();
  }
  //to create form with specific shape of validation
  createForm(){
    this.form = this.formbuilder.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      email: ['',[Validators.pattern(Patterns.Email),Validators.required,Validators.maxLength(100)]],
      subject: ['',[Validators.required,Validators.maxLength(100)]],
      message: ['',[Validators.required,Validators.maxLength(100)]],
      
    })
  }
  // to select active type of projects
  assignActiveIndex(index: number): void {
    this.activeBtnIndex = index;
  }
  // open view image container
  openChosenImage(event): void {
    this.chosenImageURL = event.url;
    this.isChosenImage = true;
  }
  //close view image container
  closeChosenImage(): void {
    this.isChosenImage = false;
  }
  //open selected image in new tap in browser
  openImageInNewTap(event) {
    let image = new Image();
    image.src = event.url;
    var w = window.open('');
    w.document.write(image.outerHTML);
  }
  // get users list from api
  getUsers() {
    this.busyLoadingUsers = true;
    this.userService.get(1).subscribe(
      (res) => {
        this.busyLoadingUsers = false;
        this.users = res.data;
      },
      (err) => {
        this.busyLoadingUsers = false;
        let errorMessage = err.message || 'error in server';
        // to toaster if error happen form back-end 
        this.notifier.notify('error', errorMessage);
      }
    );
  }
}
