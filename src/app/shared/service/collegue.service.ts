import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';


@Injectable()
export class CollegueService {
  // données en mémoire
  collegues: Collegue[] = [new Collegue('Benjamin', 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAy2AAAAJGQ4ZjNkNDRhLTg5MGQtNGY3MC1hODA1LTcyODk1Y2ViYzg4Yg.jpg', 20),
  new Collegue('Ange', 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAm9AAAAJGFlNjI3NmZmLTc5ZDMtNDA1Zi05MjBiLWM1OTNmZmY2MjM2ZA.jpg', 9999),
  new Collegue('Joris', 'https://lol.seek-team.com/images/medals/silver_1.png?v22', -9999),
  new Collegue('Julien', 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/17951618_1589493484416070_6489814754820572271_n.jpg?oh=fcdb12ea810e3b764282dc00424a3fa9&oe=5A8FE65E', 0),
  new Collegue('Florent', 'https://avatars3.githubusercontent.com/u/32134408?s=400&v=4', -20)]
  constructor() { }
  listerCollegues(): Promise<Collegue[]> {
    return new Promise((resolve, reject) => {
      if (this.collegues) {
        resolve(this.collegues)
      } else {
        reject("Il n'y a pas encore de collègue")
      }
    })
  }
  sauvegarder(newCollegue: Collegue): Promise<Collegue> {
    this.collegues.push(newCollegue)
    return new Promise((resolve, reject) => {
      if (this.collegues) {
        resolve(newCollegue)
      }
    })
  }
  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    let index: number = this.collegues.findIndex(collegue => collegue.nom == unCollegue.nom)
    this.collegues[index].score += 10
    return new Promise((resolve, reject) => {
      resolve(this.collegues[index])
    })
  }
  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    let index: number = this.collegues.findIndex(collegue => collegue.nom == unCollegue.nom)
    this.collegues[index].score -= 5
    return new Promise((resolve, reject) => {
      resolve(this.collegues[index])
    })
  }
}