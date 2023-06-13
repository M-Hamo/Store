import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { productsModuleModule } from './products-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ImagePickerComponent } from '@shared/components/image-picker/image-picker.component';
import { StarsComponent } from '@shared/components/stars/stars.component';

@NgModule({
  declarations: [productsModuleModule.Component],
  imports: [
    CommonModule,
    productsModuleModule,
    SharedModule,
    ImagePickerComponent,
    StarsComponent,
  ],
})
export class productsModule {}
