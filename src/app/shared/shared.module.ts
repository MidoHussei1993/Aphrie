import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {
  MapComponent,
  AboutUsSectionComponent,
  AdvantageItemComponent,
  ImageContainerComponent,
} from './components';
import { GoogleMapsModule } from '@angular/google-maps';

export function sharedTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n', '.json');
}

const components = [
  AboutUsSectionComponent,
  MapComponent,
  AdvantageItemComponent,
  ImageContainerComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    GoogleMapsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: sharedTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
  exports: [...components],
})
export class SharedModule {}
