import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxUserCrudService } from 'projects/ngx-user-crud/src/lib/ngx-user-crud.service';
@Injectable({
  providedIn: 'root'
})
export class JsonTestService extends NgxUserCrudService{

  protected baseUrl = 'https://jsonplaceholder.typicode.com';
  protected endPoint = 'posts';
  protected parseData(data) { return data; }

  constructor(http: HttpClient) {
    super(http);
   }
}
