import { ProductType } from '../enums/product-type.enum';

export interface ProductVm {
  productId: number;
  productName: string;
  description: string;
  productPrice: number;
  type: ProductType;
  productImg: string;
}
