import { createAction, props } from '@ngrx/store';
import { ProductVm } from '../utils/interfaces/product.interface';

export enum productsActionEnum {
  GET_PRODUCTS = '[PRODUCTS] GET PRODUCTS',
  GET_PRODUCTS_SUCCESS = '[PRODUCTS] GET PRODUCTS SUCCESS',
  GET_PRODUCTS_FAIL = '[PRODUCTS] GET PRODUCTS FAIL',

  ADD_PHYSICAL_PRODUCT = '[PRODUCTS] ADD PHYSICAL PRODUCT',
  ADD_PHYSICAL_PRODUCT_SUCCESS = '[PRODUCTS] ADD PHYSICAL PRODUCT SUCCESS',
  ADD_PHYSICAL_PRODUCT_FAIL = '[PRODUCTS] ADD PHYSICAL PRODUCT FAIL',

  ADD_DIGITAL_PRODUCT = '[PRODUCTS] ADD DIGITAL PRODUCT',
  ADD_DIGITAL_PRODUCT_SUCCESS = '[PRODUCTS] ADD DIGITAL PRODUCT SUCCESS',
  ADD_DIGITAL_PRODUCT_FAIL = '[PRODUCTS] ADD DIGITAL PRODUCT FAIL',

  DELETE_SELECTED_PHYSICAL_PRODUCT = '[PRODUCTS] DELETE SELECTED PHYSICAL PRODUCT',
  DELETE_SELECTED_DIGITAL_PRODUCT = '[PRODUCTS] DELETE SELECTED DIGITAL PRODUCT',
}

export const GetProducts = createAction(productsActionEnum.GET_PRODUCTS);
export const GetProductsSuccess = createAction(
  productsActionEnum.GET_PRODUCTS_SUCCESS,
  props<{ products: ProductVm[] }>()
);
export const GetProductsFail = createAction(
  productsActionEnum.GET_PRODUCTS_FAIL
);

export const AddPhysicalProduct = createAction(
  productsActionEnum.ADD_PHYSICAL_PRODUCT,
  props<{ prod: ProductVm }>()
);

export const AddDigitalProduct = createAction(
  productsActionEnum.ADD_DIGITAL_PRODUCT,
  props<{ prod: ProductVm }>()
);

export const DeletePhysicalProduct = createAction(
  productsActionEnum.DELETE_SELECTED_PHYSICAL_PRODUCT,
  props<{ prod: ProductVm }>()
);

export const DeleteDigitalProduct = createAction(
  productsActionEnum.DELETE_SELECTED_DIGITAL_PRODUCT,
  props<{ prod: ProductVm }>()
);
