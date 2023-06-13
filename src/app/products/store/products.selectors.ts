import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsStates } from './products.state';

const productFeatureState = createFeatureSelector<ProductsStates>('products');

export const productListSelector = createSelector(
  productFeatureState,
  (state) => state.productsList
);

export const physicalProductsSelector = createSelector(
  productFeatureState,
  (state) => state.physicalProducts
);

export const digitalProductsSelector = createSelector(
  productFeatureState,
  (state) => state.digitalProducts
);
