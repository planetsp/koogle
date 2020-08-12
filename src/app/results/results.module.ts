import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultItemComponent } from './result-item/result-item.component';
import {SharedModule} from '../shared/shared.module';
import { ResultsPageComponent } from './results-page/results-page.component';



@NgModule({
  declarations: [ResultItemComponent, ResultsPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ResultsModule { }
