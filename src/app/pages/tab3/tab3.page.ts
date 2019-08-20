import { Component } from '@angular/core';
import { DatosLocalService } from 'src/app/services/datos-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  slidersOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(public datosLocal: DatosLocalService) {}

}
