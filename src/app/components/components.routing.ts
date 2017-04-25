import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';

export const ComponentsRoutes: Routes = [{

      path: '',
      children: [ {
        path: 'buttons',
        component: ButtonsComponent
      }]

}];
