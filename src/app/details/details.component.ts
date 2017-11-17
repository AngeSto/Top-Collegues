import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  collegue: Collegue
  pseudo: string
  constructor(private route: ActivatedRoute, public servCol: CollegueService) {
    route.params.subscribe(params => { this.pseudo = params['nom'] })
  }
  ngOnInit() {
    console.log("Entree dans init")
    this.servCol.listerCollegues().
      then(collegues => {
        this.collegue = collegues.
          find(col => col.nom == this.pseudo)
      })
  }

  jaime() {
    this.servCol.aimerUnCollegue(this.collegue).then(col => { this.collegue = col })
  }
  jeDeteste() {
    this.servCol.detesterUnCollegue(this.collegue).then(col => { this.collegue = col })

  }
}
