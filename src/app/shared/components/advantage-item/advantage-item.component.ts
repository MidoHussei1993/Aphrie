import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-advantage-item',
  templateUrl: './advantage-item.component.html',
  styleUrls: ['./advantage-item.component.scss']
})
export class AdvantageItemComponent implements OnInit {
  @Input('iconUrl') iconUrl: string;
  @Input('key') key: string;
  @Input('value') value: string;
  @Input('linkTilte') linkTilte: string;
  constructor(
    private readonly  translate : TranslateService
  ) { }

  ngOnInit(): void {
  }

}
