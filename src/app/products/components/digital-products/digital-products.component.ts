import { Component, Signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductVm } from '../../utils/interfaces/product.interface';
import { Animations } from '@shared/animations/animations';

@Component({
  selector: 'digital-products',
  templateUrl: './digital-products.component.html',
  styleUrls: ['./digital-products.component.scss'],
  animations: [Animations],
})
export class DigitalProductsComponent {
  public constructor(private readonly _productsService: ProductsService) {}

  public readonly digitalProducts: Signal<ProductVm[]> =
    this._productsService.digitalProducts;

  public onRemoveSelectedProduct = (prod: ProductVm, index: number): void =>
    this._productsService.onRemoveSelectedProduct({
      ...prod,
      index,
    });
}
