import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public afficherAlert:boolean
  public ping:boolean
    constructor(public colServ:CollegueService){}


  ngOnInit() {
    this.colServ.ping().subscribe(boolean => this.ping=boolean)
  }
add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    if(pseudo.value && imageUrl.value){

    this.colServ.sauvegarder(new Collegue(pseudo.value, imageUrl.value, 100))
    pseudo.value = null
    imageUrl.value = null
    this.afficherAlert=true
    }
    return false
  }
  
}
