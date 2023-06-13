import { ActionReducerMap } from '@ngrx/store';

import * as Products from './products/store';

export interface IAppState {
  products: Products.ProductsStates;
}

export const appReducers: ActionReducerMap<IAppState> = {
  products: Products.productsReducer,
};

export const appEffects: Array<any> = [Products.ProductsEffects];
