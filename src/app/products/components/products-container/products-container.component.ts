import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { ProductVm } from '../../utils/interfaces/product.interface';

@Component({
  selector: 'products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent {
  public constructor(private readonly _productsService: ProductsService) {}

  public readonly allProducts$: Observable<ProductVm[]> =
    this._productsService.allProducts$;

  public onAddToCart = (prod: ProductVm): void =>
    this._productsService.onAddToCart(prod);
}
