import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  title = 'Angular';
  name = 'Tuấn Anh';
  age = 20;

  sayHello() {
    alert('Hello ' + this.name);
  }
}