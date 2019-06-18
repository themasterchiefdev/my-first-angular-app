import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  private serverStatus = 'Offline';

  constructor() {}

  ngOnInit() {}

  getServerStatus() {
    return this.serverStatus;
  }
}
