import { Component, Signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductVm } from '../../utils/interfaces/product.interface';

@Component({
  selector: 'physical-products',
  templateUrl: './physical-products.component.html',
  styleUrls: ['./physical-products.component.scss'],
})
export class PhysicalProductsComponent {
  public constructor(private readonly _productsService: ProductsService) {}

  public readonly physicalProducts: Signal<ProductVm[]> =
    this._productsService.physicalProducts;
}
