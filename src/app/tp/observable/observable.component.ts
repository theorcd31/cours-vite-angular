import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import {RandomNumberComponent} from './random-number/random-number.component';

@Component({
  selector: 'app-observable',
  imports: [RandomNumberComponent],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

}
