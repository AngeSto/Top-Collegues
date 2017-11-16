import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue:Collegue
  

  constructor(public colServ:CollegueService) { }

  jaime(){
    this.colServ.aimerUnCollegue(this.collegue).then(data => {this.collegue = data})
    
  }

  jeDeteste(){
    this.colServ.detesterUnCollegue(this.collegue).then(data => {this.collegue = data})
  }

  ngOnInit() {
  }

}
