import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'TodoList';
  constructor() {}

  ngOnInit(): void {}
  taskRun() {
    console.log('Add');
  }
}
