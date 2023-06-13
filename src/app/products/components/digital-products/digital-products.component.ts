import { Component, Signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductVm } from '../../utils/interfaces/product.interface';

@Component({
  selector: 'digital-products',
  templateUrl: './digital-products.component.html',
  styleUrls: ['./digital-products.component.scss'],
})
export class DigitalProductsComponent {
  public constructor(private readonly _productsService: ProductsService) {}

  public readonly digitalProducts: Signal<ProductVm[]> =
    this._productsService.digitalProducts;
}
