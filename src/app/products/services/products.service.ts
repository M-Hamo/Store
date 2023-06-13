import { Injectable, Signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductVm } from '../utils/interfaces/product.interface';
import { ProductType } from '../utils/enums/product-type.enum';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import {
  AddDigitalProduct,
  AddPhysicalProduct,
} from '../store/products.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public constructor(
    private readonly _http: HttpClient,
    private readonly _store: Store<IAppState>,
    private readonly _toasterService: ToastrService
  ) {}

  private readonly _productList$: Observable<ProductVm[]> = this._store.select(
    (state: IAppState) => state.products.productsList
  );

  private readonly _physicalProducts$: Observable<ProductVm[]> =
    this._store.select((state: IAppState) => state.products.physicalProducts);

  private readonly _digitalProducts$: Observable<ProductVm[]> =
    this._store.select((state: IAppState) => state.products.digitalProducts);

  public productList = toSignal(this._productList$, {
    initialValue: [] as ProductVm[],
  });

  public physicalProducts = toSignal(this._physicalProducts$, {
    initialValue: [] as ProductVm[],
  });

  public digitalProducts = toSignal(this._digitalProducts$, {
    initialValue: [] as ProductVm[],
  });

  public onAddToCart = (prod: ProductVm): void => {
    if (prod.type === ProductType.PHYSICAL) {
      this._store.dispatch(AddPhysicalProduct({ prod }));
      this._toasterService.success('Product added to the cart successfully');
    }
    if (prod.type === ProductType.DIGITAL) {
      if (prod.productPrice !== 0) {
        this._store.dispatch(AddDigitalProduct({ prod }));
        this._toasterService.success('Product added to the cart successfully');
      } else
        this._toasterService.error(
          "Can't add this product until now, only free download"
        );
    }
  };

  public readonly totalPrice: Signal<number> = computed(() =>
    this._calculateTotalPrice([
      ...this.physicalProducts(),
      ...this.digitalProducts(),
    ])
  );

  private _calculateTotalPrice = (prods: ProductVm[]): number =>
    prods.reduce(
      (prevValue: number, current: ProductVm) =>
        prevValue + current?.productPrice,
      0
    );

  public getProducts$: Observable<ProductVm[]> = this._http.get<ProductVm[]>(
    'assets/data-source/products.json'
  );
}
