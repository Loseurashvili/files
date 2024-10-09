import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'project_1';
  users: Person[] = [];
  NewPerson: Person = {Name:'', Surname:'', Email:'', PhoneNumber:''};

  AddPerson() {
    this.users.push({...this.NewPerson});
    this.NewPerson = {Name:'', Surname:'', Email:'', PhoneNumber:''}; // this to reset the form
  }
}

