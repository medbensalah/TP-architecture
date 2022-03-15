import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <img src="./../../../assets/images/box-img1.jpg">
  `,
  styles: [
  ]
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
