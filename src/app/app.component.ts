import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Todo } from './interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_todoList_test_backend';
  todos : Todo[] = [];
  filteredTodos: Todo[] = [];

  constructor(private apiService:ApiService){
    this.apiService.getTodos().subscribe(
      {
        next : (data : Todo[]) => {
          this.todos = data;
          this.filteredTodos = data;
        }
      }
    );
  }

}
