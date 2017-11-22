import { Collegue } from "./domain/collegue";
import { CollegueService } from "./service/collegue.service";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

export class ClasseMereNavBar {
    collegues: Collegue[]
    ping:boolean
      constructor(public colServ: CollegueService) { }
    
      jaime(collegue: Collegue) {
        this.colServ.aimerUnCollegue(collegue).subscribe(data => {
          collegue = data
          this.collegues = this.collegues.filter(c => c.nom != collegue.nom)
          this.collegues.push(data)
          this.collegues.sort(this.compare)
        })

      }
    
      jeDeteste(collegue: Collegue) {
        this.colServ.detesterUnCollegue(collegue).subscribe(data => {
          collegue = data
          this.collegues = this.collegues.filter(c => c.nom != collegue.nom)
          this.collegues.push(data)
          this.collegues.sort(this.compare)
        })

      }
    
      ngOnInit() {
       this.colServ.listerCollegues().subscribe(data => {
        this.collegues = data
          this.collegues.sort(this.compare)
        })
        this.colServ.ping().subscribe(boolean => this.ping=boolean)
      }
      compare(a, b) {
        if (a.score < b.score)
          return 1;
        if (a.score > b.score)
          return -1;
        return 0;
      }
    }