import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class CollegueService {
  // données en mémoire
  collegues: Collegue[] = []
  
  constructor(private http:HttpClient) {
    
   }
  listerCollegues(): Promise<Collegue[]> {
    return this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise()
    /*
    return new Promise((resolve, reject) => {
      if (this.collegues.length == 0) {
        this.http.get<Collegue[]>('http://localhost:8080/collegues').subscribe(data => {
          this.collegues=data
          resolve(this.collegues)
        })
        
      } else {
        resolve(this.collegues)
      }
    })
    */
  }
  sauvegarder(newCollegue: Collegue): Promise<Collegue> {
    return this.http.post<Collegue>('http://localhost:8080/collegues', newCollegue, httpOptions ).toPromise()
  }
  
  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.http.put<Collegue>(`http://localhost:8080/collegues/${unCollegue.nom}/score`, {"avis" : "jaime"}, httpOptions).toPromise()
  }
  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.http.put<Collegue>(`http://localhost:8080/collegues/${unCollegue.nom}/score`, {"avis" : "jeDeteste"}, httpOptions).toPromise()
  }
}