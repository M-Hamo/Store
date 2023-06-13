import { createReducer, on } from '@ngrx/store';
import * as productsActions from './products.actions';
import { productsInitialState } from './products.state';

export const productsReducer = createReducer(
  productsInitialState,
  on(productsActions.GetProductsSuccess, (state, { products }) => {
    return {
      ...state,
      productsList: [...products],
      productsLoadedSuccessfully: true,
    };
  }),
  on(productsActions.GetProductsFail, (state) => {
    return {
      ...state,
      productsLoadedSuccessfully: false,
    };
  }),
  on(productsActions.AddPhysicalProduct, (state, { prod }) => {
    return {
      ...state,
      physicalProducts: [...state.physicalProducts, prod],
    };
  }),
  on(productsActions.AddDigitalProduct, (state, { prod }) => {
    return {
      ...state,
      digitalProducts: [...state.digitalProducts, prod],
    };
  })
);
