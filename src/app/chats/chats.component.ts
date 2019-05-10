import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  template: `
    <p>
      chats works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ChatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
