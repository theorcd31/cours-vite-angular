import { Component } from '@angular/core';
import { AddArticleComponent } from "./add-article/add-article.component";
import { ArticleElementComponent } from "./article-element/article-element.component";
import { NgFor } from '@angular/common';

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  type: string;
}

@Component({
  selector: 'app-blog-control-center',
  imports: [AddArticleComponent, ArticleElementComponent, NgFor],
  templateUrl: './blog-control-center.component.html',
  styleUrl: './blog-control-center.component.css'
})
export class BlogControlCenterComponent {
articles:({titre: string, contenu: string})[] = []

onAddedArticle(article: {titre:string, contenu:string}){
  this.articles.push(article);
}
}
