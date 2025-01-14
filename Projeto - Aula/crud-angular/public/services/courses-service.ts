import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoursesInterface } from '../models/curses/curses.model/curses.modeule';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

constructor( private httpClient: HttpClient) { }

getList(): CoursesInterface[]{
   return []
}

}
