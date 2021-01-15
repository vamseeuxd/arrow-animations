import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {BootstrapModule} from '../bootstrap/bootstrap.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
        BootstrapModule
    ], exports: [
        MaterialModule,
        BootstrapModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
