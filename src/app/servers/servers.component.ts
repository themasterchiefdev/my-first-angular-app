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

  serverName = '';

  onUpdateServerName(event: Event) {
    console.log('TCL: ServersComponent -> onUpdateServerName -> event', event);
    this.serverName = (event.target as HTMLInputElement).value;
  }

  ngOnInit() {}

  onCreateServer() {
    return (this.serverCreationStatus = 'Server was created');
  }
}
