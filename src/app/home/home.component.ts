import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = {
    title: 'Home sweet home for ',
    name: 'Name'
  };
  btn = {
    submit: 'go',
    cancel: 'really?'
  };
  name = 'yonatan';
  constructor() { }
  list = ['aaa', 'bbb', 'ccc', 'ddd'];
  ngOnInit() {
  }
  onsubmit() {
    this.list.push(this.name);
    this.name = undefined;
  }
  delete(item) {
    console.log(item);
    const index = this.list.indexOf(item);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }
}
