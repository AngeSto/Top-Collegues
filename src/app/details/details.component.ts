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
  ping:boolean
  constructor(private route: ActivatedRoute, public colServ: CollegueService) {
    route.params.subscribe(params => { this.pseudo = params['nom'] })
  }
  ngOnInit() {
    console.log("Entree dans init")
    this.colServ.listerCollegues().
      subscribe(collegues => {
        this.collegue = collegues.
          find(col => col.nom == this.pseudo)
      })
      this.colServ.ping().subscribe(boolean => this.ping=boolean)
  }

  jaime() {
    this.colServ.aimerUnCollegue(this.collegue).subscribe(col => { this.collegue = col })
  }
  jeDeteste() {
    this.colServ.detesterUnCollegue(this.collegue).subscribe(col => { this.collegue = col })

  }
}
