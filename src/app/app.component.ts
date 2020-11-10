import { Component, VERSION } from '@angular/core';
import { WikipediaService } from './wikipedia.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  pages = [];

  constructor(private wikipedia: WikipediaService){

  }

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
    })
  }
}
