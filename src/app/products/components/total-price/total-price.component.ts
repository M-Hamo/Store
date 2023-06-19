import { Component, Signal, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductType } from '../../utils/enums/product-type.enum';

@Component({
  selector: 'total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss'],
})
export class TotalPriceComponent {
  public readonly totalPrice: Signal<number> =
    inject(ProductsService).totalPrice;

  public readonly ProductType = ProductType;
}
