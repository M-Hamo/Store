import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalProductsComponent } from './components/digital-products/digital-products.component';
import { PhysicalProductsComponent } from './components/physical-products/physical-products.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { TotalPriceComponent } from './components/total-price/total-price.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsContainerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class productsModuleModule {
  public static Component = [
    ProductsContainerComponent,
    PhysicalProductsComponent,
    DigitalProductsComponent,
    TotalPriceComponent,
  ];
}
