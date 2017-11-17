import { Collegue } from "./domain/collegue";
import { CollegueService } from "./service/collegue.service";

export class ClasseMereNavBar {
    collegues: Collegue[]
    
      constructor(public colServ: CollegueService) { }
    
      jaime(collegue: Collegue) {
        this.colServ.aimerUnCollegue(collegue).then(data => {
          collegue = data
          this.collegues = this.collegues.filter(c => c.nom != collegue.nom)
          this.collegues.push(data)
          this.collegues.sort(this.compare)
        })
      }
    
      jeDeteste(collegue: Collegue) {
        this.colServ.detesterUnCollegue(collegue).then(data => {
          collegue = data
          this.collegues = this.collegues.filter(c => c.nom != collegue.nom)
          this.collegues.push(data)
          this.collegues.sort(this.compare)
        })
      }
    
      ngOnInit() {
        this.colServ.listerCollegues().then(data => {
        this.collegues = data
          this.collegues.sort(this.compare)
        })
      }
      compare(a, b) {
        if (a.score < b.score)
          return 1;
        if (a.score > b.score)
          return -1;
        return 0;
      }
    }