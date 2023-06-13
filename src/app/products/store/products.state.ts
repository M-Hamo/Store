import { ProductVm } from '../utils/interfaces/product.interface';

export interface ProductsStates {
  productsList: ProductVm[];
  physicalProducts: ProductVm[];
  digitalProducts: ProductVm[];
  productsLoadedSuccessfully: boolean;
}

export const productsInitialState: ProductsStates = {
  productsList: [],
  physicalProducts: [],
  digitalProducts: [],
  productsLoadedSuccessfully: false,
};
