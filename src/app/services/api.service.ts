import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public task: any[] = [
    {
      id: 1,
      title: "Mangala entagna",
      description: `Mandeha mangala entagna nalaifanery mama tsarahonenana agny`,
      date: "21/10/2023",
      heure: "08:00",
      isChecked: false,
    },
    {
      id: 2,
      title: "Manasa lamba",
      description: `Mangala rano de mandeha manasa lamba`,
      date: "16/10/2023",
      heure: "6:00",
      isChecked: true,
    },
  ]

  constructor() { }
}
