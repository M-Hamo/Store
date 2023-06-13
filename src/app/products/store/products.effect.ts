import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {
  GetProducts,
  GetProductsFail,
  GetProductsSuccess,
} from './products.actions';
import { ProductsService } from '../services/products.service';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly _actions: Actions,
    private readonly _productsService: ProductsService
  ) {}

  public getProducts$ = createEffect(() =>
    this._actions.pipe(
      ofType(GetProducts),
      switchMap(() =>
        this._productsService.getProducts$.pipe(
          switchMap((res) => of(GetProductsSuccess({ products: res }))),
          catchError(() => of(GetProductsFail()))
        )
      )
    )
  );
}
