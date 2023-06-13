import { Component } from '@angular/core';
import { ButtonTypes, ButtonColors } from '@shared/utils/button-properties';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { ProductType } from '../../utils/enums/product-type.enum';

@Component({
  selector: 'total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss'],
})
export class TotalPriceComponent {
  public constructor(private readonly _productsService: ProductsService) {}

  public readonly totalPrice$: Observable<number> =
    this._productsService.totalPrice$;

  public readonly ProductType = ProductType;

  public readonly ButtonTypes = ButtonTypes;

  public readonly ButtonColors = ButtonColors;
}
