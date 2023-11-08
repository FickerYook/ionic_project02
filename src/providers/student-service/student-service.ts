import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { student } from '../../model/std_data';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentServiceProvider {

  apiURL:string ="http://192.168.10.76/API_STUDENT/get_student.php"
  constructor(public http: HttpClient) {}
  getStudent(): Observable<student[]>{
    return this.http.get<student[]>(this.apiURL);
  }

}
