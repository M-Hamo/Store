import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductVm } from '../../utils/interfaces/product.interface';
import { TooltipPositions } from '@shared/utils/button-properties';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule],
})
export class SelectedProductComponent {
  @Input({ required: true }) public product!: ProductVm;

  @Input({ required: true }) public index: number = 0;

  @Output() onRemoveSelectedProduct = new EventEmitter<unknown>();

  public tooltipPosition: TooltipPositions = TooltipPositions.BELOW;
}
