import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Avis } from '../domain/avis';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { ReplaySubject } from 'rxjs/ReplaySubject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CollegueService {
  // données en mémoire
  public collegues: BehaviorSubject<Collegue[]> = new BehaviorSubject([])
  public dernierAvisSubject: BehaviorSubject<Avis> = new BehaviorSubject(null)
  public etatServeurSubject: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public avis:Avis
  public historiqueAvisSubject:  BehaviorSubject<Avis[]> = new  BehaviorSubject([])

  constructor(private http: HttpClient) {
    this.etatServeur()
    Observable.interval(5000).subscribe(value => this.etatServeur())
  }
  refresh(): void {
    this.http.get<Collegue[]>(`${environment.apiUrl}/collegues`).subscribe(data => {
      this.collegues.next(data)
    })
  }

  listerCollegues(): Observable<Collegue[]> {
    this.refresh()
    return this.collegues.asObservable()
  }
  sauvegarder(newCollegue: Collegue): void {
    this.http.post<Collegue>(`${environment.apiUrl}/collegues`, newCollegue, httpOptions).subscribe(collegue => {
      const colleguesTab = this.collegues.getValue()
      colleguesTab.push(collegue)
      this.collegues.next(colleguesTab)
    })
  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    this.dernierAvisSubject.next(this.avis=new Avis(true, unCollegue))
    this.sauvegarderAvis()
    return this.http.put<Collegue>(`${environment.apiUrl}/collegues/${unCollegue.nom}/score`, { "avis": "jaime" }, httpOptions)
  }
  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    this.dernierAvisSubject.next(this.avis=new Avis(false, unCollegue))
    this.sauvegarderAvis()
    return this.http.put<Collegue>(`${environment.apiUrl}/collegues/${unCollegue.nom}/score`, { "avis": "jeDeteste" }, httpOptions)
  }
  dernierAvis(): Observable<Avis> {
    return this.dernierAvisSubject.asObservable()
  }
  etatServeur(): void {
    this.http.get<boolean>(`${environment.apiUrl}/ping`).subscribe(
      time => this.etatServeurSubject.next(true),
      error => this.etatServeurSubject.next(false))
  }
  ping():Observable<boolean>{
    return this.etatServeurSubject.asObservable()
  }
  sauvegarderAvis():void{
    this.http.post<Avis>(`${environment.apiUrl}/vote`, this.avis, httpOptions).subscribe(avis => {
      const avisTab = this.historiqueAvisSubject.getValue()
      avisTab.push(avis)
      this.historiqueAvisSubject.next(avisTab)
    })
  }
  historiqueAvis(): Observable<Avis[]>{
    return this.historiqueAvisSubject.asObservable()
  }
}