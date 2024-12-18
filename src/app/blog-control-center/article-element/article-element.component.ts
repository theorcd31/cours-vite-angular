import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-element',
  imports: [],
  templateUrl: './article-element.component.html',
  styleUrl: './article-element.component.css'
})
export class ArticleElementComponent {
@Input() titre: string = '';
@Input() contenu: string ='';
}
