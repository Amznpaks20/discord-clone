import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor() { }
  languages: Language[] = [
    { language: "English, USA", imgUrl: "assets/discord/english.png" }
  ]

  selected: Language = this.languages[0];
  ngOnInit(): void {
  }

}

class Language {
  language?: string = "";
  imgUrl?: string = "";
}
