import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { ProductVm } from '../../utils/interfaces/product.interface';

@Component({
  selector: 'physical-products',
  templateUrl: './physical-products.component.html',
  styleUrls: ['./physical-products.component.scss'],
})
export class PhysicalProductsComponent {
  public constructor(private readonly _productsService: ProductsService) {}

  public readonly physicalProducts$: Observable<ProductVm[]> =
    this._productsService.physicalProducts$;
}
