import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-category-box',
  templateUrl: 'component-category-box.html'
})
export class ComponentCategoryBoxComponent {
  @Input() category;

  
}
