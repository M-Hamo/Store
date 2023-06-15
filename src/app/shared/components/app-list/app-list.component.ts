import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-list[items]',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule],
})
export class AppListComponent {
  @ContentChild('listItem') public readonly listItem!: TemplateRef<unknown>;

  @Input() public items: any[] = [];

  @Input() public title: string = '';
}
