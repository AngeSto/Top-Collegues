import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { ClasseMereNavBar } from '../shared/classe-mere-navBar';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends ClasseMereNavBar implements OnInit {
  collegues: Collegue[]

  constructor(colServ:CollegueService) {
    super(colServ)
   }
}
