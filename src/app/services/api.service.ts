import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public task: Todo[] = [
    {
      id: 1,
      title: "Mangala entagna",
      description: `Mandeha mangala entagna nalaifanery mama tsarahonenana agny`,
      date: "21/10/2023",
      time: "08:00",
      isDone: false,
    },
    {
      id: 2,
      title: "Manasa lamba",
      description: `Mangala rano de mandeha manasa lamba`,
      date: "16/10/2023",
      time: "6:00",
      isDone: true,
    },
  ]

  constructor() { }
}
