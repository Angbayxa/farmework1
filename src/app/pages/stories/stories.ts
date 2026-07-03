import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: 'doraemon',
      content: 'những câu chuyện về chú mèo máy doraemon',
      view: 1000,
      phatHanh: '1990',
      theLoai: 'hoạt hình'
    },
    {
      title: 'naruto',
      content: 'những câu chuyện về chú mèo máy naruto',
      view: 3000,
      phatHanh: '1999',
      theLoai: 'hoạt hình'
    },
    {
      title: 'goku',
      content: 'những câu chuyện về chú mèo máy goku',
      view: 5000,
      phatHanh: '2000',
      theLoai: 'hoạt hình'
    },
    {
      title: 'Attack On Titan',
      content: 'những câu chuyện về chú mèo máy Attack On Titan',
      view: 7000,
      phatHanh: '2009',
      theLoai: 'hoạt hình'
    },
    {
      title: 'Bleach',
      content: 'những câu chuyện về chú mèo máy Bleach',
      view: 6000,
      phatHanh: '2004',
      theLoai: 'hoạt hình'
    }
    
  ];
}