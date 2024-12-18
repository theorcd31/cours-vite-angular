import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  detailsIsActive:boolean = false;
  tab: number[] = [];
  background:boolean = false;

  details(){
    this.detailsIsActive = !this.detailsIsActive;
    this.tab.push(this.tab.length + 1)
  }
}
