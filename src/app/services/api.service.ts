import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { environment } from 'src/env/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly BASEURL = environment.host; 

  private readonly findTodosURL = this.BASEURL+'/todo/findTodos';

  constructor(private http: HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.findTodosURL);
  }
}
