import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { FindLotsComponent } from './find-lots/find-lots.component';
import { AgmCoreModule } from '@agm/core';
import { FindSpotsComponent } from './find-spots/find-spots.component';

@NgModule({
  declarations: [
    FindLotsComponent,
    FindSpotsComponent
  ],
  imports: [
  	CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9aj3-17cojks6gicZZ_PY2t5ERVu25ac'
    })
  ],
  exports: [
    FindLotsComponent,
    FindSpotsComponent
  ],
  entryComponents:[
    FindLotsComponent,
    FindSpotsComponent
  ]
})
export class FindParkingModule {}
