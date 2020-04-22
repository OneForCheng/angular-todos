import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value = '';

  constructor() { }

  ngOnInit() {
  }

  onKeyUpEnter(value: string) {
    const trimValue = value.trim()
    if (trimValue) {
      console.log(trimValue);
      this.value = '';
    }
  }
}
