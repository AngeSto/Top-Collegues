import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public collegues: Collegue[]
  public afficherAlert:boolean

  ngOnInit() {
    this.collegues = [new Collegue('Benjamin', 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAy2AAAAJGQ4ZjNkNDRhLTg5MGQtNGY3MC1hODA1LTcyODk1Y2ViYzg4Yg.jpg', 20),
    new Collegue('Ange', 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAm9AAAAJGFlNjI3NmZmLTc5ZDMtNDA1Zi05MjBiLWM1OTNmZmY2MjM2ZA.jpg', 9999),
    new Collegue('Joris', 'https://lol.seek-team.com/images/medals/silver_1.png?v22', -9999),
    new Collegue('Julien', 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/17951618_1589493484416070_6489814754820572271_n.jpg?oh=fcdb12ea810e3b764282dc00424a3fa9&oe=5A8FE65E', 0),
    new Collegue('Florent', 'https://avatars3.githubusercontent.com/u/32134408?s=400&v=4', -20)]
  }
  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    if(pseudo.value && imageUrl.value){
    
    this.collegues.push(new Collegue(pseudo.value, imageUrl.value))
    pseudo.value = null
    imageUrl.value = null
    this.afficherAlert=true
    }
    return false
  }
}
