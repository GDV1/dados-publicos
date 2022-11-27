import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Deputados } from '../typings/data';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  private readonly urlDeputados = '/deputados';
  // private deputados$: BehaviorSubject<Array<Deputados>>;
}
