import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css'],
  styles: [
    `
      .online {
        color: white;
      }
    `
  ]
})
export class ServerComponent implements OnInit {
  serverId = 10;
  private serverStatus = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {}

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    if (this.serverStatus === 'online') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
