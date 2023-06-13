import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from '../../utils/enums/product-type.enum';
import { ProductVm } from '../../utils/interfaces/product.interface';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule],
})
export class ProductComponent {
  @Input({ required: true }) public product!: ProductVm;

  @Output() onAddProduct = new EventEmitter<unknown>();

  public readonly ProductType = ProductType;
}
