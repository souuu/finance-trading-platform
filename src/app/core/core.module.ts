import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderModalComponent} from "../order-modal/order-modal.component";
import {BusinessService} from "./business.service";

@NgModule({
    providers: [BusinessService],
    entryComponents: [OrderModalComponent]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

}