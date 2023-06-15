import { Component, OnInit, Signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductVm } from '../../utils/interfaces/product.interface';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { GetProducts } from '../../store';
import { Animations } from '@shared/animations/animations';

@Component({
  selector: 'products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
  animations: [Animations],
})
export class ProductsContainerComponent implements OnInit {
  public constructor(
    private readonly _store: Store<IAppState>,
    private readonly _productsService: ProductsService
  ) {}

  public readonly productList: Signal<ProductVm[]> =
    this._productsService.productList;

  public readonly physicalProducts: Signal<ProductVm[]> =
    this._productsService.physicalProducts;

  public readonly digitalProducts: Signal<ProductVm[]> =
    this._productsService.digitalProducts;

  public ngOnInit(): void {
    this._store.dispatch(GetProducts());
  }

  public onAddToCart = (prod: ProductVm): void =>
    this._productsService.onAddToCart(prod);

  public onRemoveSelectedProduct = (prod: ProductVm, index: number): void =>
    this._productsService.onRemoveSelectedProduct({
      ...prod,
      index,
    });
}
