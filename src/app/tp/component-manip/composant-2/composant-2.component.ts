import { Component } from '@angular/core';
import { Composant4Component } from "./composant-4/composant-4.component";
import { Composant5Component } from "./composant-5/composant-5.component";

@Component({
  selector: 'app-composant-2',
  imports: [Composant4Component, Composant5Component],
  templateUrl: './composant-2.component.html',
  styleUrl: './composant-2.component.css'
})
export class Composant2Component {

}
