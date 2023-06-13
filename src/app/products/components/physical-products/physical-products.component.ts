import { Component, Signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductVm } from '../../utils/interfaces/product.interface';
import { Animations } from '@shared/animations/animations';

@Component({
  selector: 'physical-products',
  templateUrl: './physical-products.component.html',
  styleUrls: ['./physical-products.component.scss'],
  animations: [Animations],
})
export class PhysicalProductsComponent {
  public constructor(private readonly _productsService: ProductsService) {}

  public readonly physicalProducts: Signal<ProductVm[]> =
    this._productsService.physicalProducts;

  public onRemoveSelectedProduct = (prod: ProductVm, index: number): void =>
    this._productsService.onRemoveSelectedProduct({
      ...prod,
      index,
    });
}
