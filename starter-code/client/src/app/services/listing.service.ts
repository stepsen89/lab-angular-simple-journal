import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListingService {

  API_URL = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getList(): Promise<any> {
    return this.http.get(`${this.API_URL}/journal-entries`)
      .toPromise()
      .then((res: Response) => res.json());

  }

}