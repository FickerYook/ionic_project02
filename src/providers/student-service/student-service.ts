import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { student } from '../../model/std_data';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class StudentServiceProvider {

  // apiURL:string ="http://192.168.10.76/API_STUDENT/get_student.php"  //192.168.10.20/api_student/get_student.php (my computer ip)
  apiURL:string ="http://192.168.10.20/API_STUDENT/get_student.php"  //192.168.10.20/api_student/get_student.php (techer)
  constructor(public http: HttpClient) {}
  getStudent(): Observable<student[]>{
    return this.http.get<student[]>(this.apiURL);
  }

}
