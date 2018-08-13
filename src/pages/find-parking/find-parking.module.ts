import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { FindLotsComponent } from './find-lots/find-lots.component';
import { AgmCoreModule } from '@agm/core';
import { FindSpotsComponent } from './find-spots/find-spots.component';
import { AutocompletePage } from './autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    FindLotsComponent,
    FindSpotsComponent,
    AutocompletePage
  ],
  imports: [
  	CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9aj3-17cojks6gicZZ_PY2t5ERVu25ac',
      libraries: ["places"]
    })
  ],
  exports: [
    FindLotsComponent,
    FindSpotsComponent,
    AutocompletePage
  ],
  entryComponents:[
    FindLotsComponent,
    FindSpotsComponent,
    AutocompletePage
  ]
})
export class FindParkingModule {}
