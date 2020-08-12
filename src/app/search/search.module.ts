import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {SearchOptionsComponent} from './search-options/search-options.component';
import {SearchButtonComponent} from './search-button/search-button.component';
import {SearchLogoComponent} from './search-logo/search-logo.component';
import {SharedModule} from '../shared/shared.module';
import { SearchPageComponent } from './search-page/search-page.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    SearchOptionsComponent,
    SearchButtonComponent,
    SearchLogoComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class SearchModule { }
