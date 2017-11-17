import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { ClasseMereNavBar } from '../shared/classe-mere-navBar';


@Component({
  selector: 'app-liste-collegue',
  templateUrl: './liste-collegue.component.html',
  styleUrls: ['./liste-collegue.component.css']
})
export class ListeCollegueComponent extends ClasseMereNavBar implements OnInit {

  constructor(public colServ:CollegueService){
    super(colServ)
  }
  
}
