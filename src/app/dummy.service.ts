import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  apiURL: string = '/offices?fields=id,name';

  constructor(private httpClient: HttpClient) { }

  public getDummyData() {
    console.log("Call " + this.apiURL);
    return this.httpClient.get(this.apiURL);
  }
}
