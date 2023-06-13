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
  DeleteDigitalProduct,
  DeletePhysicalProduct,
} from '../store/products.actions';
import { TranslateService } from '@ngx-translate/core';
import {
  digitalProductsSelector,
  physicalProductsSelector,
  productListSelector,
} from '../store';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public constructor(
    private readonly _http: HttpClient,
    private readonly _store: Store<IAppState>,
    private readonly _translateService: TranslateService,
    private readonly _toasterService: ToastrService
  ) {}

  private readonly _productList$: Observable<ProductVm[]> =
    this._store.select(productListSelector);

  private readonly _physicalProducts$: Observable<ProductVm[]> =
    this._store.select(physicalProductsSelector);

  private readonly _digitalProducts$: Observable<ProductVm[]> =
    this._store.select(digitalProductsSelector);

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
      this._toasterService.success(
        this._translateService.instant('product_added_successfully')
      );
    }
    if (prod.type === ProductType.DIGITAL) {
      if (prod.productPrice !== 0) {
        this._store.dispatch(AddDigitalProduct({ prod }));
        this._toasterService.success(
          this._translateService.instant('product_added_successfully')
        );
      } else
        this._toasterService.error(
          this._translateService.instant('only_free_download_msg')
        );
    }
  };

  public onRemoveSelectedProduct = (prod: ProductVm): void => {
    this._store.dispatch(
      prod?.type === ProductType.PHYSICAL
        ? DeletePhysicalProduct({ prod })
        : DeleteDigitalProduct({ prod })
    );
    this._toasterService.success(
      this._translateService.instant('product_deleted_successfully')
    );
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
