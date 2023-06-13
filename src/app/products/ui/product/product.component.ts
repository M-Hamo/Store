import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonColors, ButtonTypes } from '@shared/utils/button-properties';
import { ProductType } from '../../utils/enums/product-type.enum';
import { ProductVm } from '../../utils/interfaces/product.interface';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() public product: ProductVm | undefined = undefined;

  @Output() onAddProduct = new EventEmitter<unknown>();

  public readonly ProductType = ProductType;

  public readonly ButtonTypes = ButtonTypes;

  public readonly ButtonColors = ButtonColors;
}
