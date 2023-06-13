import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { productsModuleModule } from './products-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ImagePickerComponent } from '@shared/components/image-picker/image-picker.component';
import { ProductComponent } from './ui/product/product.component';
import { SelectedProductComponent } from './ui/selected-product/selected-product.component';

@NgModule({
  declarations: [productsModuleModule.Component],
  imports: [
    CommonModule,
    productsModuleModule,
    SharedModule,
    ImagePickerComponent,
    ProductComponent,
    SelectedProductComponent,
  ],
})
export class productsModule {}
