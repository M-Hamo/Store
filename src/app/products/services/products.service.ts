import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { ProductVm } from '../utils/interfaces/product.interface';
import { ProductType } from '../utils/enums/product-type.enum';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public constructor(
    private readonly _http: HttpClient,
    private readonly _toasterService: ToastrService
  ) {
    this._storProducts();
  }

  // Products Store
  private readonly _productsStore: BehaviorSubject<ProductVm[]> =
    new BehaviorSubject<ProductVm[]>([]);

  public readonly allProducts$: Observable<ProductVm[]> =
    this._productsStore.asObservable();

  public readonly physicalProducts: BehaviorSubject<ProductVm[]> =
    new BehaviorSubject<ProductVm[]>([]);

  public readonly physicalProducts$: Observable<ProductVm[]> =
    this.physicalProducts.asObservable();

  public readonly digitalProducts: BehaviorSubject<ProductVm[]> =
    new BehaviorSubject<ProductVm[]>([]);

  public readonly digitalProducts$: Observable<ProductVm[]> =
    this.digitalProducts.asObservable();

  public onAddToCart = (prod: ProductVm): void => {
    if (prod.type === ProductType.PHYSICAL) {
      this.physicalProducts.next([...this.physicalProducts.getValue(), prod]);
      this._toasterService.success('Product added to the cart successfully');
    }
    if (prod.type === ProductType.DIGITAL) {
      if (prod.productPrice !== 0) {
        this.digitalProducts.next([...this.digitalProducts.getValue(), prod]);
        this._toasterService.success('Product added to the cart successfully');
      } else
        this._toasterService.error(
          "Can't add this product until now, only free download"
        );
    }
  };

  public readonly totalPrice$: Observable<number> = combineLatest([
    this.physicalProducts$,
    this.digitalProducts$,
  ]).pipe(
    map(([physicalProducts, digitalProducts]) =>
      this._calculateTotalPrice([...physicalProducts, ...digitalProducts])
    )
  );

  private _calculateTotalPrice = (prods: ProductVm[]): number =>
    prods.reduce(
      (prevValue: number, current: ProductVm) =>
        prevValue + current?.productPrice,
      0
    );

  // This func responsible for storing products to make changes with data
  // Take(1) => Store it once i Inject the service
  private _storProducts = (): void => {
    this._getProducts$
      .pipe(
        tap((prods: ProductVm[]) => this._productsStore.next(prods)),
        take(1)
      )
      .subscribe();
  };

  private _getProducts$: Observable<ProductVm[]> = this._http.get<ProductVm[]>(
    'assets/data-source/products.json'
  );
}
