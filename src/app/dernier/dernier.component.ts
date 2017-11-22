import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Avis } from '../shared/domain/avis';

@Component({
  selector: 'app-dernier',
  templateUrl: './dernier.component.html',
  styleUrls: ['./dernier.component.css']
})
export class DernierComponent implements OnInit {
  avis:Avis = null
  constructor(public colServ:CollegueService) { }

  ngOnInit() {
    this.colServ.dernierAvis().subscribe(data => this.avis = data)
  }

  
}
