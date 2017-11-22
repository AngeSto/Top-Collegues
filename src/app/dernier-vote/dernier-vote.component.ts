import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Avis } from '../shared/domain/avis';

@Component({
  selector: 'app-dernier-vote',
  templateUrl: './dernier-vote.component.html',
  styleUrls: ['./dernier-vote.component.css']
})
export class DernierVoteComponent implements OnInit {
  avis:Avis[]=[]
  constructor(public colServ:CollegueService) { }

  
  ngOnInit() {
    this.colServ.historiqueAvis().subscribe(avis => {this.avis = avis})
  }

}
