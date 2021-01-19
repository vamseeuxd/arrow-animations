import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TechnologiesPageRoutingModule} from './technologies-routing.module';

import {TechnologiesPage} from './technologies.page';
import {SharedModule} from '../../../share-modules';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        TechnologiesPageRoutingModule
    ],
    declarations: [TechnologiesPage]
})
export class TechnologiesPageModule {
}
