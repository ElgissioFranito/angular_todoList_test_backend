import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_todoList_test_backend';
  tasks : any[];

  constructor(private http:ApiService){
    this.tasks = http.task;
  }

}
