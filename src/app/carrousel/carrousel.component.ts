import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';
import { ClasseMereNavBar } from '../shared/classe-mere-navBar';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent extends ClasseMereNavBar implements OnInit {
  collegues: Collegue[]

  constructor(colServ: CollegueService) {
    super(colServ)
  }
}
