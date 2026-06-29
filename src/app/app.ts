import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  name='Tuấn Anh';
  age=20;
  
  sayHello(){
    alert('hello '+this.name+this.age)
  }
  delete(){
    alert('delete'+this.name+this.age)
  }
}
