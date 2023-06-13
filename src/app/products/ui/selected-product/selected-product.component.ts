import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductVm } from '../../utils/interfaces/product.interface';
import { TooltipPositions } from '@shared/utils/button-properties';

@Component({
  selector: 'selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss'],
})
export class SelectedProductComponent {
  @Input() public product: ProductVm | undefined = undefined;

  @Input() public index: number = 0;

  @Output() onRemoveSelectedProduct = new EventEmitter<unknown>();

  public tooltipPosition: TooltipPositions = TooltipPositions.BELOW;
}
