import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-etat-serveur',
  templateUrl: './etat-serveur.component.html',
  styleUrls: ['./etat-serveur.component.css']
})
export class EtatServeurComponent implements OnInit {

  constructor(public colServ:CollegueService) { }
  ping:boolean
  ngOnInit() {
    this.colServ.ping().subscribe(boolean => this.ping=boolean)
  }

}
