import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //show and hide nav bar in small screen
  isCollapsed = true;

  constructor(private readonly translate: TranslateService) {
  }

  ngOnInit(): void {}
  // reflects isCollapsed property
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
