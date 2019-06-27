import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }
  allowServer = false;
  serverCreationStatus = 'No server was created!';

  serverName = 'Test server';
  serverCreated = false;

  onUpdateServerName(event: Event) {
    console.log('TCL: ServersComponent -> onUpdateServerName -> event', event);
    this.serverName = (event.target as HTMLInputElement).value;
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    return (this.serverCreationStatus = 'Server was created ' + this.serverName);
  }
}
